const initState = {
    usersData: [],
    isPlayerOpen: false,
    isPlaying: false,
    openedVideoIndex: null,
    isMuted: true,
    isUpdate: false,
}

const profileReducer = (state = initState, action) => {
    switch(action.type) {
        case('SET_USERS_DATA'):
            return {
                ...state,
                usersData: action.usersData
            };
        case('UPDATE_TRENDING_DATA'):
            return {
                ...state,
                usersData: [
                    ...state.usersData,
                    ...action.updatedData
                ],
            };
        case('SCROLL_UPDATE'):
            return {
                ...state,
                isUpdate: true
            };
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

export default profileReducer;