import React, { useRef } from 'react';
import withVideo from '../../HOC/withVideo';
import Videos from '../VideoPlayer/Videos';


const UserContent = props => {
    const bottomLineRef = useRef(null);

    const tabToggler = e => {
        if(e.target.classList.contains('video-tab__video') ||  e.currentTarget.classList.contains('video-tab')) {
            bottomLineRef.current.style.transform = 'translateX(0px)'
        } else {
            bottomLineRef.current.style.transform = `translateX(${bottomLineRef.current.clientWidth}px)`
        } 
    }

    return (
        <div className="user__content" >
            <div className="video-tab" onMouseLeave={(e) => tabToggler(e)}>
                <p className="video-tab__video" onMouseEnter={(e) => tabToggler(e)}>
                    <span className="video-tab__video-text">Video</span>
                </p>
                <p className="video-tab__likes" onMouseEnter={(e) => tabToggler(e)} >
                    <span className="video-tab__likes-text">Likes</span>
                </p>
                <div className="video-tab__bottom-line" ref={bottomLineRef}></div>
            </div>
            <Videos content={props.content}
                    mouseEnterHandler={props.mouseEnterHandler}
                    video={props.video}
                    openVideoPlayer={props.openVideoPlayer}/>
        </div>
    )
}

export default withVideo(UserContent);