import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/firebase';
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import ExploreColHeader from './ExploreColHeader';





const ExploreCol  = () => {
    const [vidUrl, setVidUrl] = useState('');
    const [videoWithAudio, setVideoWithAudio] = useState([]);
    const [video, setVideo] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        if(mounted) {
            db.collection('discover').doc('explore').get()
            .then((doc) => {
                setVideoWithAudio(videoWithAudio => [
                    ...videoWithAudio,
                    ...doc.data().exploreInfos
                ]);
            });
        db.collection('discover').doc('exploreTags').get()
            .then((doc) => {
                setVideo(video => [
                    ...video,
                    ...doc.data().exploreInfos
                ]);
            });
        }
        return () => mounted = false
    }, []);

   
    const mouseEnterHandler = (e, url) => {
        setVidUrl(url)   
    };

    // const mouseEnter = (e) => {
    //    e.target.play()
    // }


    return (
        <React.Fragment>
            <div className="explore__col">
                {videoWithAudio.map(({ videosInfo, logo, smallText, title, subtitle, audioUrl }, index) => {
                    return (
                    <div className="explore__col-item" key={title}>                       
                        <div className="explore__col-header">
                            <ExploreColHeader   logo={logo}
                                                smallText={smallText} 
                                                title={title} subtitle={subtitle} 
                                                audioUrl={audioUrl} 
                                                index={index}/> 
                                        
                    
                        </div>  

                        <div className="explore__col-content">
                                {videosInfo.map(({ videoUrl, imgUrl }) => {
                                    
                                    return (
                                        <div    className="explore__col-video-wrapper"  
                                                key={uuidv4()}
                                                style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: '0 -26px'}}
                                                onMouseEnter={(e) => mouseEnterHandler(e, videoUrl)}>
                                            {vidUrl === videoUrl && <video className="explore__col-video" autoPlay muted loop src={videoUrl}/>}
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="explore__col" style={{marginLeft: '5.4rem'}}>
                {video.map(({ videosInfo, logo, smallText, title, subtitle}) => {
                    return (
                    <div className="explore__col-item" key={subtitle}>
                        <div className="explore__col-header">
                            <Link to="#" className="explore__col-img-wrapper">
                                <div className="explore__col-img" style={{backgroundImage: `url(${logo})`, width: '100px', height: '100px', backgroundSize: 'cover'}}></div>                    
                            </Link>
                            <Link to="#" className="explore__col-text-wrapper">
                                <h3 className="explore__col-title">{title}</h3>
                                <p className="explore__col-subtitle">{subtitle}</p>
                                <p className="explore__col-small-text">{smallText}</p>
                            </Link>
                        </div>
                            
                        <div className="explore__col-content">
                                {videosInfo.map(({ videoUrl, imgUrl }) => {
                                    return (
                                        <div    className="explore__col-video-wrapper" 
                                                key={uuidv4()}
                                                style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: '0 -26px'}}                                              
                                                onMouseEnter={(e) => mouseEnterHandler(e, videoUrl)}>
                                            {vidUrl === videoUrl && <video className="explore__col-video" autoPlay muted loop src={videoUrl}/>}
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    )
                })}
            </div>

        </React.Fragment>
    )
};  


export default ExploreCol;