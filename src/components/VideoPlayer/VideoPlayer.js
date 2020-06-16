import React, { useState } from 'react';
import VideoPlayerAside from './VideoPlayerAside';

const VideoPlayer = (props) => {

    const [index, setIndex] = useState(props.indexArg);
    const [content, setContent] = useState(props.contentArg);
    // console.log(index)
    
    return (
        <div className="video-player">
            <div className="video-player__content">
                <div className="bg-image-container">
                    <img src={content[index].imgUrl} alt="bg" className="bg-image-container__image"/>    
                </div>
                <div className="video-container">
                    <video src={content[index].videoUrl} className="video-container__video" loop autoPlay muted ref={props.videoRef}></video>
                    {!props.isPlaying ? <div className="play-button" onClick={(e) => { props.videoRef.current.play(); props.playToggler()}}></div> : null}
                    <span className="event-delegate-mask" onClick={() => props.playToggler()}></span>
                </div>
                {index !== 0 && <img className="player__left-arrow" onClick={(e) => props.prevVideo(e, index, setIndex)} src="//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/arrow-c26566a07694be4e19165eb102ca9b29.svg" alt="left arrow"/>}
                {index !== content.length - 1 && <img className="player__right-arrow" onClick={(e) => props.nextVideo(e, content, index, setIndex)} src="//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/arrow-c26566a07694be4e19165eb102ca9b29.svg" alt="right arrow"/>}
                <img onClick={(e) => props.closeVideoPlayer(e, null, props.videoRef)} className="player__close" src="//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/close-dc074e52693a0ee0428fb5508d5b9486.svg" alt="close"/> 
                <img className="player__logo" src="//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-441371124b15403175a080da9df31116.png" alt="TikTok" />   
                <div className="player__mute-icon" onClick={(e) => props.muteToggler(e)}></div>
                <div className="player__report-text">Report</div>           
            </div>
            <VideoPlayerAside  indexArg={index}
                               contentArg={content} 
                               closeVideoPlayer={props.closeVideoPlayer}/>
        </div>
    )
}

export default VideoPlayer;