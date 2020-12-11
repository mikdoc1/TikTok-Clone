import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { openPlayer } from '../../actions/tag';

const TagContent = (props) => {
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
            {props.tagData.videosInfo.map((video, index) => {
                return (
                    <div className="trending-body-video-wrapper"
                    style={{backgroundImage: `url(${video.imgUrl})`}}
                    onMouseEnter={() => hoverPlayer(video.videoUrl)}    
                    key={video.videoUrl}>
                        <div className="trending-body-second-wrapper" style={{paddingBottom: '133%'}}>
                            {hoveredVideoData.hoveredVideo === video.videoUrl &&  <video    className="trending-body-second-wrapper__video"
                                                                                            onClick={() => props.onOpenPlayer(index)}
                                                                                            ref={videoRef}
                                                                                            autoPlay 
                                                                                            muted 
                                                                                            loop 
                                                                                            src={video.videoUrl}/>}
                        </div>  
                    </div>
                )
            })}
        </>
    )

}

const mapStateToProps = state => {
    return {
        tagData: state.tag.tagData,
        isPlayerOpen: state.tag.isPlayerOpen

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOpenPlayer: (openedVideoIndex) => dispatch(openPlayer(openedVideoIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagContent);