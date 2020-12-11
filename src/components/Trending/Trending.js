import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TrendingHeader from './TrendingHeader';
import TrendingContent from './TrendingContent';
import { fetchUsersData, scrollUpdate } from '../../actions/trending';
import Aside from '../Aside/Aside';
import VideoPlayer from './VideoPlayer';
import debounce from '../../helper/debounce';

const Trending = ({ onFetchData, onScrollUpdate, isPlayerOpen, usersData, isUpdate }) => {
  useEffect(() => {
    onFetchData(usersData.length, isUpdate);
  }, [isUpdate, onFetchData, usersData.length]);

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
      <div className="container">
        <div className="trending">
          <div className="trending-body">
            <div className="trending-body__header">
              <TrendingHeader />
            </div>
            <div className="trending-body__content">
              <TrendingContent />
            </div>
          </div>
          <div className="aside">
            <Aside />
          </div>
        </div>
      </div>
      {isPlayerOpen && <VideoPlayer />}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isPlayerOpen: state.trending.isPlayerOpen,
    usersData: state.trending.usersData,
    isUpdate: state.trending.isUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: (usersAmmount, isUpdate) => dispatch(fetchUsersData(usersAmmount, isUpdate)),
    onScrollUpdate: () => dispatch(scrollUpdate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
