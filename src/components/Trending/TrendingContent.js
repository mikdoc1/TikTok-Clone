import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { openPlayer } from '../../actions/profile';

const TrendingContent = (props) => {
    const videoRef = useRef(null);
    const [hoveredVideoData, setHoveredVideoData] = useState({
        hoveredVideo: null,
        hoveredVideoTime: null
    });

    useEffect(() => {
        if(props.isPlayerOpen && videoRef.current) {
            videoRef.current.pause();
            setHoveredVideoData(state => ({
                ...state,
                hoveredVideoTime: videoRef.current.currentTime
            }));
        } else if(!props.isPlayerOpen && videoRef.current) {
            videoRef.current.play();
            videoRef.current.currentTime = hoveredVideoData.hoveredVideoTime
        }
    }, [props.isPlayerOpen]);

    const hoverPlayer = (video) => {
        setHoveredVideoData(state => ({
            ...state,
            hoveredVideo: video
        }));
    }

    return (
        <>
            {props.usersData.map((video, index) => {
                return (
                    <div className="trending-body-video-wrapper"
                    style={{backgroundImage: `url(${video.preview})`}}
                    onMouseEnter={() => hoverPlayer(video.videoURL)}    
                    key={index}>
                        <div className="trending-body-second-wrapper">
                            {hoveredVideoData.hoveredVideo === video.videoURL &&  <video    className="trending-body-second-wrapper__video"
                                                                                            onClick={() => props.onOpenPlayer(index)}
                                                                                            ref={videoRef}
                                                                                            autoPlay 
                                                                                            muted 
                                                                                            loop 
                                                                                            src={video.videoURL}/>}
                        </div>  
                    </div>
                )
            })}
        </>
    )

}

const mapStateToProps = state => {
    return {
        usersData: state.trending.usersData,
        isPlayerOpen: state.trending.isPlayerOpen

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOpenPlayer: (openedVideoIndex) => dispatch(openPlayer(openedVideoIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingContent);