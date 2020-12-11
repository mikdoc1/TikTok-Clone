const initState = {
    isOpen: false
}

const sidebarReducer = (state = initState, action) => {
    switch(action.type) {
        case('OPEN'):
            return {
                isOpen: true
            };
        case('CLOSE'):
            return {
                isOpen: false
            };
        default:
            return state
    }
}

export default sidebarReducer;