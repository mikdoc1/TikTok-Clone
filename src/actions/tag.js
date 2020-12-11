import { db } from '../firebase/firebase';

// const updateData = (updatedData) => {
//     return {
//         type: 'UPDATE_PROFILE_DATA',
//         updatedData
//     }
// }

const setData = (tagData) => ({
    type: 'SET_DATA',
    tagData
});

export const fetchUsersData = (tag) => {
    let tagData;
    return dispatch => {
        db.collection("discover").doc('exploreTags').get()
            .then(res => {
                tagData = res.data().exploreInfos.find(item => {
                    return item.title === '#' + tag
                });
            })
            .then(() => {
                dispatch(setData(tagData));
            })
    }
}

// export const scrollUpdate = () => {
//     return {
//         type: 'SCROLL_UPDATE'
//     }
// }

export const openPlayer = (index) => ({
    type: 'OPEN_PLAYER',
    openedVideoIndex: index
});

export const closePlayer = () => ({
    type: 'CLOSE_PLAYER'
})

export const playToggler = () => ({
    type: 'PLAY_TOGGLE'
})

const setPrevVideo = () => ({
    type: 'SET_PREV_VIDEO'
})

export const prevVideo = (index) => {
    return dispatch => {
        if(index > 0) {  
            dispatch(setPrevVideo())
        }
    }
}

const setNextVideo = () => ({
    type: 'SET_NEXT_VIDEO'
})

export const nextVideo = (videos, index) => {
    return dispatch => {
        if(index < videos.length - 1) {
            dispatch(setNextVideo())
        }
    }
}

export const muteToggler = () => ({
    type: 'MUTE_TOGGLE'
})