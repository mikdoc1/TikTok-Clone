import { db } from '../firebase/firebase';

const setUsersData = (usersData) => ({
    type: 'SET_USERS_DATA',
    usersData
})

const updateData = (updatedData) => ({
    type: 'UPDATE_TRENDING_DATA',
    updatedData
})

export const fetchUsersData = (usersAmmount, isUpdate) => {
    return dispatch => {
        const usersData = [];
        db.collection("users").where("profileData.hasVideos", "==", true).get()
            .then(users => {
                const splicedUsers = users.docs.splice(usersAmmount, 2);
                splicedUsers.forEach(user => {
                    usersData.push({
                        user: {
                            ...user.data().profileData,
                            ...user.data().personalData
                        },
                        ...user.data().videoData[0]
                    })
                })
            })
            .then(() => {
                if(isUpdate) {
                    dispatch(updateData(usersData))
                } else {
                    dispatch(setUsersData(usersData))
                }   
            })
    }
}


export const scrollUpdate = () => ({
    type: 'SCROLL_UPDATE'
})

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