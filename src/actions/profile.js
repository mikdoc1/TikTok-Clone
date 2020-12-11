import { db } from '../firebase/firebase';

const updateData = (updatedData) => {
    return {
        type: 'UPDATE_PROFILE_DATA',
        updatedData
    }
}

const setUserData = (userData) => ({
    type: 'SET_USER_DATA',
    userData
}) 

export const fetchUserData = (username, videosAmmount, shouldUpdate) => {
    
    return dispatch => {
        db.collection("users").where("personalData.username", "==", username).get()
            .then(users => {
                const user = users.docs[0];
                if(shouldUpdate) {
                    console.log(videosAmmount)
                    dispatch(updateData({
                        user: {
                            ...user.data().profileData,
                            ...user.data().personalData
                        },
                        videos: [
                            ...user.data().videoData.splice(videosAmmount, 3)
                        ]
                    }))
                } else {

                    dispatch(setUserData({
                        user: {
                            ...user.data().profileData,
                            ...user.data().personalData
                        },
                        videos: [
                            ...user.data().videoData.splice(0, 3)
                        ]
                    }))
                }
            });
    }
}

export const scrollUpdate = () => {
    return {
        type: 'SCROLL_UPDATE'
    }
}

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