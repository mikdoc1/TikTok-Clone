import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../actions/music';
import MusicHeader from './MusicHeader';
import MusicContent from './MusicContent';
import Aside from '../Aside/Aside';
import VideoPlayer from './VideoPlayer';
// import debounce from '../../helper/debounce';

const Music = ({ musicData, onFetchData, isPlayerOpen, playInfo, history }) => {
  const music = history.location.pathname.match(/[^/]*$/)[0];
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    onFetchData(music);
  }, [music, onFetchData]);

  useEffect(() => {
    if (musicData.audioUrl) {
      setUpdate(true);
    }
  }, [musicData]);

  return (
    <React.Fragment>
      <div className="narrower-container">
        <div className="user-container">
          {isUpdate ? (
            <React.Fragment>
              <MusicHeader
                musicData={{
                  title: musicData.title,
                  subtitle: musicData.subtitle,
                  smallText: musicData.smallText,
                  avatar: musicData.logo,
                  audioUrl: musicData.audioUrl,
                }}
                playInfo={playInfo}
              />
              <div className="trending-body__content">
                <MusicContent />
              </div>
            </React.Fragment>
          ) : null}
        </div>
        <div className="aside">
          <Aside />
        </div>
      </div>
      {isPlayerOpen && <VideoPlayer />}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    musicData: state.music.musicData,
    isPlayerOpen: state.music.isPlayerOpen,
    playInfo: state.audioPlayer.playInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: (music) => dispatch(fetchUsersData(music)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Music);
