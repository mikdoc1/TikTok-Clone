const setSpeed = (speed) => ({
    type: 'SET_SPEED',
    speed
});

const setPrevAudio = (audioID, audioUrl) => ({
    type: 'SET_PREV_AUDIO',
    audioID,
    audioUrl
})


export const playerHandler = (audioID, audioUrl, prevAudioID) => { 
    return dispatch => {
        const currentAudio = document.getElementById(audioID);
        const prevAudio = document.getElementById(prevAudioID);
    
        if(currentAudio.paused) {
            currentAudio.play();
        } else {
            console.log('pause')
            currentAudio.pause();
        }
    
        if(prevAudio !== currentAudio && prevAudio !== null){
            prevAudio.pause();
        } 
    
        dispatch(setSpeed((currentAudio.duration * 10 / 3.45)));
        dispatch(setPrevAudio(audioID, audioUrl))
    }

};

export const musicEnd = (audioUrl) => ({
    type: 'MUSIC_END',
    audioUrl
});

export const musicPaused = (audioUrl) => ({
    type: 'MUSIC_PAUSED',
    audioUrl
});

export const musicStartPlay = (audioUrl) => ({
    type: 'MUSIC_START_PLAY',
    audioUrl
});

export const setInitState = (audioUrl) => ({
    type: 'SET_INIT_STATE',
    audioUrl
})