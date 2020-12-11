const initState = {
    speed: 0,
    playInfo: {},
    prevAudioData: {
        prevAudioID: null,
        prevAudioUrl: null
    }
}


const audioPlayerReducer = (state = initState, action) => {
    switch(action.type) {
        case('SET_INIT_STATE'):
            return {
                ...state,
                playInfo: {
                    ...state.playInfo,
                    [action.audioUrl]: {
                        isPlaying: false,
                        isPaused: true
                    }
                }
            };
        case('SET_SPEED'):
            return {
                ...state,
                speed: action.speed
            };
        case('SET_PREV_AUDIO'): 
            return {
                ...state,
                prevAudioData: {
                    prevAudioID: action.prevAudioID,
                    prevAudioUrl: action.prevAudioUrl
                }
            }
        case('MUSIC_START_PLAY'):
            return {
                ...state,
                playInfo: {
                    ...state.playInfo,
                    [action.audioUrl]: {
                        isPlaying: true,
                        isPaused: false
                    }
                }
            };
        case('MUSIC_PAUSED'):
            return {
                ...state,
                playInfo: {
                    ...state.playInfo,
                    [action.audioUrl]: {
                        isPlaying: true,
                        isPaused: true
                    }
                }
            }
        case('MUSIC_END'):
            return {
                ...state,
                playInfo: {
                    ...state.playInfo,
                    [action.audioUrl]: {
                        isPlaying: false,
                        isPaused: true
                    }
                }
            }
        default:
            return state
    }
};

export default audioPlayerReducer;