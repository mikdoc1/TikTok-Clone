import React, { useRef } from 'react';
import { connect } from 'react-redux';
import withHoverMenu from '../../HOC/withHoverMenu';
import CircleProgressBar from '../CircleProgress/CircleProgressBar';
import { musicEnd, musicStartPlay, musicPaused, playerHandler } from '../../actions/audioPlayer';

const MusicHeader = ({
  musicData,
  openAction,
  closeAction,
  isPopupOpen,
  playInfo,
  speed,
  onMusicEnd,
  onMusicStartPlay,
  onMusicPaused,
  prevAudioData,
  onPlayerHandler,
}) => {
  const audioRef = useRef(null);

  const { title, subtitle, smallText, avatar, audioUrl } = musicData;

  return (
    <div className="user__header">
      <div className="user__info-description explore__col-img-wrapper">
        <div
          className="user__avatar explore__col-img"
          style={{ backgroundImage: `url(${avatar})`, width: '120px', height: '120px', backgroundSize: 'cover' }}
        >
          {playInfo[audioUrl].isPlaying ? (
            <>
              <div className="img-mask"></div>
              <div className="progress-bar">
                <CircleProgressBar
                  percentage={100}
                  musicEnd={onMusicEnd.bind(null, audioUrl)}
                  speed={speed}
                  paused={playInfo[audioUrl].isPaused}
                  strokeWidth={1.5}
                  trailStrokeWidth={1.5}
                  strokeColor="white"
                  trailStrokeColor={'rgba(0, 0, 0, .06)'}
                />
              </div>
            </>
          ) : null}

          <audio
            id={audioUrl}
            className="audio-player"
            src={audioUrl}
            ref={audioRef}
            onPlay={() => onMusicStartPlay(audioUrl)}
            onPause={() => {
              if (!audioRef.current.ended) {
                onMusicPaused(audioUrl);
              }
            }}
          />

          <img
            className="play-pause-icon"
            onClick={() => onPlayerHandler(audioRef.current.id, audioUrl, prevAudioData.prevAudioID)}
            src={
              !playInfo[audioUrl].isPaused
                ? 'http://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/ic-pause-music-f17b0043d2eddfb53fedfc63f7d6ed23.svg'
                : 'http://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/ic-play-music-1c8e04d5f523f9f92d9eb5882f9ab005.svg'
            }
            alt="play-pause-icon"
          />
        </div>
        <div className="user__text">
          <h1 className="title-large user__text-title">{title}</h1>
          <h2 className="title title_black_bold user__text-subtitle" style={{ fontSize: '2rem' }}>
            {smallText}
          </h2>
          <p className="user__info-count" style={{ fontWeight: 'light', fontSize: '1.6rem', margin: '0' }}>
            {subtitle}
          </p>
        </div>
      </div>
      <div className="more-actions" onMouseEnter={() => openAction()} onMouseLeave={() => closeAction()}>
        <div className="more-actions__icon"></div>
        {isPopupOpen && (
          <div className="more-actions__popup">
            <p className="more-actions__popup-text">Report</p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    speed: state.audioPlayer.speed,
    prevAudioData: state.audioPlayer.prevAudioData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMusicStartPlay: (audioUrl) => dispatch(musicStartPlay(audioUrl)),
    onMusicPaused: (audioUrl) => dispatch(musicPaused(audioUrl)),
    onMusicEnd: (audioUrl) => dispatch(musicEnd(audioUrl)),
    onPlayerHandler: (audioID, audioUrl, prevAudioID) => dispatch(playerHandler(audioID, audioUrl, prevAudioID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withHoverMenu(MusicHeader));
