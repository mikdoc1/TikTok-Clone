import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserData, scrollUpdate } from '../../actions/profile';
import UserHeader from './UserHeader';
import UserContent from './UserContent';
import Aside from '../Aside/Aside';
import FooterContent from '../Footer/FooterContent';
import FooterBottom from '../Footer/FooterBottom';
import VideoPlayer from './VideoPlayer';
import debounce from '../../helper/debounce';

let prevUsername = null;

const User = ({ onFetchData, onScrollUpdate, shouldUpdate, userData, history, isPlayerOpen }) => {
  const username = history.location.pathname.match(/[^/]*$/)[0];

  useEffect(() => {
    console.log('useEffect');
    if (shouldUpdate || prevUsername !== username) {
      onFetchData(username, userData.videos.length, shouldUpdate);
    }
    prevUsername = username;
  }, [shouldUpdate, username, userData.videos.length, onFetchData]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(function scrollHandler() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        onScrollUpdate();
      }
    }, 300);

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  });

  return (
    <React.Fragment>
      <div className="narrower-container">
        <div className="user-container">
          {userData.videos.length && (
            <React.Fragment>
              <UserHeader userData={userData.user} />
              <UserContent />
            </React.Fragment>
          )}
        </div>
        <div className="aside">
          <Aside />
        </div>
      </div>
      <div className="footer-container" style={{ background: 'black' }}>
        <div className="footer-content-wrapper">
          <FooterContent />
        </div>
        <div className="footer-bottom-wrapper">
          <FooterBottom />
        </div>
      </div>
      {isPlayerOpen && <VideoPlayer />}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.profile.userData,
    isPlayerOpen: state.profile.isPlayerOpen,
    shouldUpdate: state.profile.shouldUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: (username, videosAmmount, shouldUpdate, isUserChanged) =>
      dispatch(fetchUserData(username, videosAmmount, shouldUpdate, isUserChanged)),
    onScrollUpdate: () => dispatch(scrollUpdate()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
