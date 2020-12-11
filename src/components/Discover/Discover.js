import React, { useRef, useState } from 'react';
import CarouselList from './Carousel/CarouselList';
import ShareGroup from '../Aside/ShareGroup';
import ExploreCol from './Explore/ExploreCol';
import Footer from '../Footer/Footer';

let x = 0;
const Discover = () => {
    const carouselRef = useRef(null);
    const [styles, setStyles] = useState({
        transform: `translateX(${x}px)`,
    });
    
    const clickHandler = (e) => {
        if(e.target.id === 'right' && x > -2128) {         
                x += -(carouselRef.current.clientWidth + 23)
                setStyles(styles => ({
                    ...styles,
                    transform: `translateX(${x}px)`
                }))
            } 
        if(e.target.id === 'left' && x !== 0) {
            x += (carouselRef.current.clientWidth + 23)
            setStyles(styles => ({
                ...styles,
                transform: `translateX(${x}px)`
            }))
        }  
    }
    
    return (
        <React.Fragment>
            <div className="narrow-container">
                <div className="discover">
                    <div className="discover__header">
                        <div className="heading">
                            <h1 className="heading__title">Discover</h1>
                            <h2 className="heading__subtitle">Be the first to watch the latest videos</h2>
                        </div>
                        <div className="share-group">
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
                    <div className="carousel">
                        <div id="left" className="carousel__left-arrow" onClick={(e) => clickHandler(e)}></div>
                        <div className="carousel__content" ref={carouselRef}>
                            <CarouselList styles={styles}/>
                        </div>
                        <div id="right" className="carousel__right-arrow" onClick={(e) => clickHandler(e)}></div>
                    </div>
                    <div className="explore">
                        <ExploreCol />
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div> 
        </React.Fragment>
    )
};

export default Discover