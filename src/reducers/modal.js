import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isModalOpen: false
}

export const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                isModalOpen: true
            }
        case actionTypes.HIDE_MODAL:
            return {
                isModalOpen: false
            }
        default:
            return state
    }
}


