const initState = {
    isDesktop: window.innerWidth > 992 
}

const uiReducer = (state = initState, action) => {
    switch(action.type) {
        case('MOBILE'):
            return {
                ...state,
                isDesktop: false
            };
        case('DESKTOP'):
            return {
                ...state,
                isDesktop: true
            };
        default:
            return state
    }
};

export default uiReducer;