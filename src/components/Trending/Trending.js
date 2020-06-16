import React from 'react';
import TrendingContent from './TrendingContent';
import Aside from '../Aside/Aside';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import withVideoPlayer from '../../HOC/withVideoPlayer';

const Trending = (props) => {

    return (
        <React.Fragment>
            <div className="container">
                <div className="trending-content-wrapper">
                    <div className="trending-content">
                        <TrendingContent    openVideoPlayer={props.openVideoPlayer} 
                                            collection={'videosURL'}
                                            doc={'URLs'}
                                            field={'urlArray'}/>
                    </div>          
                    <div className="aside">
                        <Aside />
                    </div>
                </div>
            </div>
            {props.playerInfo.content && <VideoPlayer   contentArg={props.playerInfo.content}
                                                        indexArg={props.playerInfo.index}
                                                        closeVideoPlayer={props.closeVideoPlayer}
                                                        videoRef={props.videoRef}
                                                        isPlaying={props.isPlaying}
                                                        playToggler={props.playToggler}
                                                        prevVideo={props.prevVideo}
                                                        nextVideo={props.nextVideo}
                                                        muteToggler={props.muteToggler}/>}
        </React.Fragment>

    )
};

export default withVideoPlayer(Trending);