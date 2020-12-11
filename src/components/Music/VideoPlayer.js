import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { playToggler, prevVideo, nextVideo, closePlayer, muteToggler } from '../../actions/profile';
import VideoPlayerAside from './VideoPlayerAside';


const VideoPlayer = ({ 
    musicData,
    index,
    isPlaying,
    isMuted,
    onPlayToggler,
    onPrevVideo,
    onNextVideo,
    onMuteToggler,
    onClosePlayer
 }) => {
    const videoRef = useRef(null);
    const { videosInfo } = musicData;
    useEffect(() => {
        if(isPlaying) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }, [isPlaying, index])
    
    return (
        <div className="video-player">
            <div className="video-player__content">
                <div className="bg-image-container">
                    <img src={videosInfo[index].imgUrl} alt="bg" className="bg-image-container__image"/>    
                </div>
                <div className="video-container">
                    <video src={videosInfo[index].videoUrl} className="video-container__video" loop autoPlay muted={isMuted} ref={videoRef}></video>
                    {!isPlaying && <div className="play-button" onClick={() => onPlayToggler()}></div>}
                    <span className="event-delegate-mask" onClick={() => onPlayToggler()}></span>
                </div>
                {index !== 0 && <img className="player__left-arrow" onClick={() => onPrevVideo(index)} src="//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/arrow-c26566a07694be4e19165eb102ca9b29.svg" alt="left arrow"/>}
                {index !== videosInfo.length - 1 && <img className="player__right-arrow" onClick={() => onNextVideo(videosInfo, index)} src="//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/arrow-c26566a07694be4e19165eb102ca9b29.svg" alt="right arrow"/>}
                <img onClick={() => onClosePlayer()} className="player__close" src="//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/close-dc074e52693a0ee0428fb5508d5b9486.svg" alt="close"/> 
                <img className="player__logo" src="//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-441371124b15403175a080da9df31116.png" alt="TikTok" />   
                <div className="player__mute-icon" onClick={() => onMuteToggler()} style={{backgroundImage: !isMuted ? "url(//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/volumn_withSound-640a5dfa17d62d22c3050317123200ed.svg)"
                                                                                                                     : "url(//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/volumn_muted-4deff03a96a3c2f0008c8798037f416b.svg)"}}></div>
                <div className="player__report-text">Report</div>           
            </div>
            <VideoPlayerAside   musicData={musicData.videosInfo}
                                index={index}/>
                                    
        </div>
    )
}

const mapStateToProps = state => {
    return {
        musicData: state.music.musicData,
        index: state.music.openedVideoIndex,
        isPlaying: state.music.isPlaying,
        isMuted: state.music.isMuted,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayToggler: () => dispatch(playToggler()),
        onPrevVideo: (index) => dispatch(prevVideo(index)),
        onNextVideo: (videos, index) => dispatch(nextVideo(videos, index)),
        onClosePlayer: () => dispatch(closePlayer()),
        onMuteToggler: () => dispatch(muteToggler())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);