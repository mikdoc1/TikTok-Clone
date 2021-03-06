const initState = {
    tagData: null,
    isPlayerOpen: false,
    isPlaying: false,
    openedVideoIndex: null, 
    isMuted: true,
    // shouldUpdate: false,
}

const tagReducer = (state = initState, action) => {
    switch(action.type) {
        case('SET_DATA'):
            return {
                ...state,
                tagData: action.tagData
            };
        // case('UPDATE_PROFILE_DATA'):
        //     return {
        //         ...state,
        //         userData: {
        //             videos: [
        //                 ...state.userData.videos,
        //                 ...action.updatedData.videos,
        //             ],
        //             user: {
        //                 ...state.userData.user,
        //                 ...action.updatedData.user,
        //             }
        //         },
        //         shouldUpdate: false
        //     };
        // case('SCROLL_UPDATE'):
        //     return {
        //         ...state,
        //         shouldUpdate: true
        //     }
        case('OPEN_PLAYER'): 
            return {
                ...state,
                isPlayerOpen: true,
                isPlaying: true,
                openedVideoIndex: action.openedVideoIndex
            };
        case('CLOSE_PLAYER'):
            return {
                ...state,
                isPlayerOpen: false,
                isMuted: true,
                openedVideoIndex: null
            }
        case('PLAY_TOGGLE'):
            return {
                ...state,
                isPlaying: !state.isPlaying
            };
        case('SET_PREV_VIDEO'): 
            return {
                ...state,
                openedVideoIndex: state.openedVideoIndex - 1
            };
        case('SET_NEXT_VIDEO'):
            return {
                ...state,
                openedVideoIndex: state.openedVideoIndex + 1
            }
        case('MUTE_TOGGLE'):
            return {
                ...state,
                isMuted: !state.isMuted
            }
        default:
            return state
    }
}

export default tagReducer;