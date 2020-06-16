import React from 'react';
import withVideo from '../../HOC/withVideo';
import Videos from '../VideoPlayer/Videos';

const TrendingContent = (props) => {
    return (
        <>
            <div className="trending-content__header">
                <div className="trending-content__text">
                    <h1 className="trending-content__title">Trending</h1>
                    <h2 className="trending-content__subtitle">Watch the latest videos from our community</h2>
                </div>
            </div>
            <Videos content={props.content}
                    mouseEnterHandler={props.mouseEnterHandler}
                    video={props.video}
                    openVideoPlayer={props.openVideoPlayer}/>
        </>
    )
}

export default withVideo(TrendingContent)