import  React, { useState, useRef } from 'react';

const withVideoPlayer = (WrappedComponent) => {
    return (props) => {
        const [playerInfo, setPlayerInfo] = useState({
            index: null,
            content: null
        });
        const videoRef = useRef(null);
        const [video, setVideo] = useState(null);
        const [isPlaying, setIsPlaying] = useState(true);

        const muteToggler = (e) => {
            e.target.style.backgroundImage = videoRef.current.muted  ? "url(//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/volumn_withSound-640a5dfa17d62d22c3050317123200ed.svg)"
                                                                    : "url(//s16.tiktokcdn.com/tiktok/falcon/_next/static/images/volumn_muted-4deff03a96a3c2f0008c8798037f416b.svg)"
            videoRef.current.muted = !videoRef.current.muted
        }
    
        const playToggler = _ => {
            isPlaying ? videoRef.current.pause() : videoRef.current.play();
            setIsPlaying(!videoRef.current.paused);
        }
    
        const nextVideo = (e, content, index, setIndex) => {
            if(index < content.length - 1) {
                setIndex(index => index + 1)
            }
        }
    
        const prevVideo = (e, index, setIndex) => {
            if(index > 0) {
    
                setIndex(index => index - 1)
            }
        }

        const openVideoPlayer = (e, index, content) => {
            e.target.pause();
            setVideo(e.target);
    
            setPlayerInfo(playerInfo => ({
                index,
                content
            }));
    
            const header = document.getElementsByTagName('header');
            header[0].style.display = 'none';
        }
    
        const closeVideoPlayer = (e, content, videoRef) => {
            video.currentTime = videoRef.current.currentTime;
            video.currentTime = videoRef.current.paused ? 0 : videoRef.current.currentTime;
            video.play();
    
            setPlayerInfo(playerInfo => ({
                content,
                index: null
            }));
            const header = document.getElementsByTagName('header');
            header[0].style.display = 'flex';
        }

        return (
            <WrappedComponent   {...props}
                                openVideoPlayer={openVideoPlayer}
                                closeVideoPlayer={closeVideoPlayer}
                                videoRef={videoRef}
                                isPlaying={isPlaying}
                                playToggler={playToggler}
                                prevVideo={prevVideo}
                                nextVideo={nextVideo}
                                muteToggler={muteToggler}
                                playerInfo={playerInfo}/>
        )
    }
}

export default withVideoPlayer