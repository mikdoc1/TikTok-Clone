import React, { useState, useEffect } from 'react';
import RecommendListItem from '../Aside/RecommendListItem';
import ShareGroup from '../Aside/ShareGroup';
import { Link } from 'react-router-dom';



const VideoPlayerAside = ({ indexArg, contentArg, closeVideoPlayer }) => {
    const [content, setContent] = useState(contentArg);
    const [index, setIndex] = useState(indexArg);
    
    useEffect(() => {
        if(index !== indexArg) {
            setIndex(indexArg);
            setContent(contentArg);
        }
    }, [indexArg]);
    
    return (
        <div className="video-player__aside">
            <div className="user-info-container"> 
                <div className="user-info">
                    <RecommendListItem  src={content[index].userInfo.profileIMG}
                                        title={content[index].userInfo.title}
                                        subtitle={content[index].userInfo.subtitle}>
                        <button className="button-transparent button-transparent_big">Follow</button>
                    </RecommendListItem>
                </div>
            </div>

            <div className="video-info-container">
                <h1 className="title title_black">{content[index].videoInfo.title}</h1>
                <h2><Link className="title-medium-big title-medium-big_bold song-name" to="#">{content[index].videoInfo.song}</Link></h2>
                <div className="action-container">
                    <div className="action-left">
                        <span className="action-left__like">
                            <span className="like-icon"></span>
                            <strong className="like-text">{content[index].videoInfo.like}</strong>
                        </span>
                        <span className="action-left__comment">
                            <span className="comment-icon"></span>
                            <strong className="comment-text">{content[index].videoInfo.comment}</strong>
                        </span>
                    </div>
                    <div className="action-right">
                        <div className="share-group" style={{margin: '0'}}>
                            <ShareGroup     src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/facebook-e57973bad0d38696e66f7e406061c2d7.svg"
                                            link="https://www.facebook.com/login"
                                            alt="fb"/>
                            <ShareGroup     src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/pinterest-111d7b07a418e41e4e3c3b9271eb739b.svg"
                                            link="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.tiktok.com%2Ftrending%3Flang%3Den&media=https%3A%2F%2Fp16.muscdn.com%2Fobj%2Fmusically-maliva-obj%2F65299d601fce6efe7a1dd7535de1503e&desc=https%3A%2F%2Fwww.tiktok.com%2Ftrending%3Flang%3Den"
                                            alt="pin"/>
                            <ShareGroup     src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/twitter-f974686c9caf32edc64461df46aa2383.svg"
                                            link="https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2Ftrending%3Flang%3Den&text=https%3A%2F%2Fwww.tiktok.com%2Ftrending%3Flang%3Den"
                                            alt="fb"/>
                        </div>
                    </div>
                </div>
                <div className="comment-container">
                    <div className="login-container">
                        <h3 className="title-small_bold" style={{marginBottom: '.5rem'}}>Login to see comments</h3>
                        <p className="title">Login to see comments and like the video.</p>
                        <button className="big-button-wrapper big-button" style={{width: 'auto', margin: '2.5rem 0'}}>Log in</button>
                        <p className="title title_black">Don’t have an account?&nbsp;
                            <Link className="title title_red_bold" to="#">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayerAside;