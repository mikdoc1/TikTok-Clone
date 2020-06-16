import * as actionTypes from './actionTypes';

export const openModal = () => {
    return {
        type: actionTypes.SHOW_MODAL
    }
}

export const closeModal = () => {
    return {
        type: actionTypes.HIDE_MODAL
    }
}