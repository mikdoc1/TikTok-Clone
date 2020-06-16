import React, { useState, useRef } from 'react';
import CircleProgressBar from '../../CircleProgress/CircleProgressBar';
import { Link } from 'react-router-dom';

let prevAudio = null;
let prevAudioUrl = null;
const audio = {};

const ExploreColHeader = (props) => {  
    
    const { logo, smallText, title, subtitle, audioUrl } = props;
    const [speed, setSpeed] = useState(0);
    const [playInfo, setPlayInfo] = useState(() => {
        audio[audioUrl] = {
            isPaused: true,
            isPlaying: false
        }
        return audio
    })
    const audioRef = useRef(null);

    const playerHandler = (e, audioUrl) => { 

        const currentAudio = audioRef.current;

        if(currentAudio.paused) {
            currentAudio.play();
        } else {
            currentAudio.pause();
        }

        if(prevAudio !== currentAudio && prevAudio !== null){
            prevAudio.pause();
        } 

        prevAudio = currentAudio; 
        prevAudioUrl = audioUrl;
        setSpeed((currentAudio.duration * 10 / 3.45));
    };

    const musicEnd = (audioUrl) => {
        setPlayInfo(playInfo => ({
            ...playInfo,
            [audioUrl]: {
                isPaused: true,
                isPlaying: false
            }
        }))
    };

    const musicPaused = (e, audioUrl) => {
        if(!e.target.ended) {
            setPlayInfo(playInfo => ({
                ...playInfo,
                [audioUrl]: {
                    isPaused: true,
                    isPlaying: true
                }
            }))
        }
    }

    const musicStartPlay = (e, audioUrl) => {
        setPlayInfo(playInfo => ({
            ...playInfo,
            [audioUrl]: {
                isPaused: false,
                isPlaying: true
            }
        }));
    }

    return (
        <React.Fragment>
            <Link to="#" className="explore__col-img-wrapper">
            <div className="explore__col-img" style={{backgroundImage: `url(${logo})`, width: '100px', height: '100px', backgroundSize: 'cover'}}>                
                    {(playInfo[audioUrl].isPlaying) ?  <>  
                                        <div className="img-mask"></div>
                                        <div className="progress-bar">
                                            <CircleProgressBar  percentage={100}
                                                                musicEnd={musicEnd.bind(null, audioUrl)}
                                                                speed={speed}
                                                                paused={playInfo[audioUrl].isPaused}
                                                                strokeWidth={1.5} 
                                                                trailStrokeWidth={1.5}
                                                                strokeColor="white"
                                                                trailStrokeColor={"rgba(0, 0, 0, .06)"}/>
                                        </div>
                                    </>  
                                    : null
                                }
                  
                    <audio className="audio-player" src={audioUrl} ref={audioRef} onPlay={(e) => musicStartPlay(e, audioUrl)}
                                                                                  onPause={(e) => musicPaused(e, audioUrl)}/>        

                    <img  className="play-pause-icon"                                       
                    onClick={(e) => playerHandler(e, audioUrl)}
                    src={!playInfo[audioUrl].isPaused  ? "http://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/ic-pause-music-f17b0043d2eddfb53fedfc63f7d6ed23.svg" 
                                                       : "http://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/ic-play-music-1c8e04d5f523f9f92d9eb5882f9ab005.svg"
                    }   
                    alt="play-pause-icon"/>             
                </div>
            </Link>
            <Link to="#" className="explore__col-text-wrapper">
                <h3 className="explore__col-title">{title}</h3>
                <p className="explore__col-subtitle">{subtitle}</p>
                <p className="explore__col-small-text">{smallText}</p>
            </Link>
        </React.Fragment>
    )
};

export default ExploreColHeader;