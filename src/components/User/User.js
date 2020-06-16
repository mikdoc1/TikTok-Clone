import React from 'react';
import UserHeader from './UserHeader';
import UserContent from './UserContent';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import withVideoPlayer from '../../HOC/withVideoPlayer';
import Aside from '../Aside/Aside';
import FooterContent from '../Footer/FooterContent';
import FooterBottom from '../Footer/FooterBottom';


const User = props => {
    const doc = props.history.location.pathname.match(/[^/]*$/);

    return (
        <React.Fragment>
            <div className="narrower-container">
                <div className="user-container">
                        <UserHeader />
                        <UserContent    openVideoPlayer={props.openVideoPlayer}
                                        collection={'usersInfo'} 
                                        doc={doc.join(' ')} 
                                        field={'userVideos'}/>
                                       
                </div>
                <div className="aside">
                    <Aside />
                </div>
            </div>
            <div className="footer-container" style={{background: 'black'}}>
                <div className="footer-content-wrapper">
                    <FooterContent />
                </div>
                <div className="footer-bottom-wrapper">
                    <FooterBottom />
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

export default withVideoPlayer(User);