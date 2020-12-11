import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setMobile, setDesktop } from '../../actions/ui';
import debounce from '../../helper/debounce';
import Footer from '../Footer/Footer';
import video01 from '../../assets/homeVideos/1.mp4';
import video02 from '../../assets/homeVideos/2.mp4';
import video03 from '../../assets/homeVideos/3.mp4';
import video04 from '../../assets/homeVideos/4.mp4';
import video05 from '../../assets/homeVideos/5.mp4';
import video06 from '../../assets/homeVideos/6.mp4';
import video07 from '../../assets/homeVideos/7.mp4';
import video08 from '../../assets/homeVideos/8.mp4';
import video09 from '../../assets/homeVideos/9.mp4';
import video10 from '../../assets/homeVideos/10.mp4';

const fetchedVideos = [video01, video02, video03, video04, video05, video06, video07, video08, video09, video10];

const HomePage = (props) => {
  const [videos, setVideos] = useState([]);
  let updatedIndex = null;

  useEffect(() => {
    setVideos(fetchedVideos);
  }, []);

  const updateVideo = (e, arr) => {
    if (updatedIndex === null) {
      updatedIndex = arr.length;
    } else {
      updatedIndex += 1;
    }

    if (updatedIndex === videos.length) {
      updatedIndex = 0;
    }

    e.target.src = videos[updatedIndex];
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(function resizeHandler() {
      if (window.innerWidth <= 992 && props.isDesktop) {
        props.onSetMobile();
      } else if (window.innerWidth > 992 && !props.isDesktop) {
        props.onSetDesktop();
      }
    }, 300);

    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  });

  return (
    <React.Fragment>
      <div className="home-content">
        <div className="main-text ">
          <h1 className="title-largest">Make Your Day</h1>
          <h1 className="title-small">Real People. Real Videos.</h1>
        </div>
        {props.isDesktop ? (
          <div className="main-videos">
            {videos.slice(0, 5).map((video, _, arr) => (
              <video
                className="main-videos__video"
                src={video}
                muted
                autoPlay
                key={video}
                onEnded={(e) => updateVideo(e, arr)}
              />
            ))}
          </div>
        ) : (
          <div className="main-videos">
            {videos.slice(0, 1).map((video, _, arr) => (
              <video
                className="main-videos__video"
                src={video}
                autoPlay
                muted
                key={video}
                onEnded={(e) => updateVideo(e, arr)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isDesktop: state.ui.isDesktop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetMobile: () => dispatch(setMobile()),
    onSetDesktop: () => dispatch(setDesktop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
