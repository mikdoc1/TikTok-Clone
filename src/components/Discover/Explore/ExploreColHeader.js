import React, { useRef } from 'react';
import CircleProgressBar from '../../CircleProgress/CircleProgressBar';
import { Link } from 'react-router-dom';
// import withAudioPlayer from '../../../HOC/withAudioPlayer';

const ExploreColHeader = (props) => {  
    const { 
        musicData,
        playInfo, 
        speed,
        musicEnd,
        musicPaused,
        musicStartPlay,
        playerHandler,
    } = props;

    const audioRef = useRef(null);
    const {
        logo,
        smallText,
        title,
        subtitle,
        audioUrl,
    } = musicData;

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
                    onClick={(e) => playerHandler(e, audioUrl, audioRef)}
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