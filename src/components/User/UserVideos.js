import React, { useState, useRef, useEffect } from 'react';
import { history } from '../../index';
import { connect } from 'react-redux';
import { openPlayer } from '../../actions/profile';

const UserVideos = (props) => {
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
            {props.userData.videos.map((video, index) => {
                return (
                    <div    className="trending-body-video-wrapper"
                            style={{backgroundImage: `url(${video.preview})`}}
                            onMouseEnter={() => hoverPlayer(video.videoURL)}    
                            key={index}>
                        <div className="trending-body-second-wrapper" style={{paddingBottom: '133%'}}>
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
        userData: state.profile.userData,
        isPlayerOpen: state.profile.isPlayerOpen

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOpenPlayer: (openedVideoIndex) => dispatch(openPlayer(openedVideoIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserVideos);