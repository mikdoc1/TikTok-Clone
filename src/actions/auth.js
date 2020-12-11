import { firebase, db } from '../firebase/firebase';
import { closeModal } from '../actions/modal';

export const loginWithPassword = (_, email, password) => {
    
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => {
                firebase.auth().createUserWithEmailAndPassword(email, password);
                dispatch(newUser());
            })
    }
}

export const resetPassword = (emailAddress) => {
    return dispatch => {
        firebase.auth().sendPasswordResetEmail(emailAddress)
            .then(function() {
                console.log('email sent')
            }).catch(function(error) {
                console.log(error)
            });  
    }
}

const phoneSignUp = response => ({
    type: 'LOGIN_WITH_PHONE_NUMBER',
    response
})

export const signUpWithPhoneNumber = (number) => {
    return dispatch => {
       
        const countryCode = document.getElementsByName('countryCode')[0];

        let phoneNumber = countryCode.value + number;

        const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

        firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
            .then(res => {
                dispatch(phoneSignUp(res));
            })
            .catch(err => console.log(err));   
    };
};

export const newUser = () => ({
    type: 'NEW_USER'
});

export const loginWithSocial = (provider) => {
    return dispatch => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                if(res.additionalUserInfo.isNewUser) {
                    dispatch(newUser());
                }
            })
            .catch(err => console.log(err)) 
    }
}

const userInfo = (uid, age, email, phoneNumber, nickName) => ({
    type: 'SET_USER_INFO',
    uid,
    age,
    email,
    phoneNumber,
    nickName
});

export const setUserInfo = (userBirthday) => {
    return dispatch => {
        const user = firebase.auth().currentUser;
        const calculateAge = () => {
            const dob = new Date(
                +userBirthday.year,
                +userBirthday.month,
                +userBirthday.day
            );
    
            let diff_ms = Date.now() - dob.getTime();
            let age_dt = new Date(diff_ms);
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        }

        let age = calculateAge();
        
        db.collection('users').doc(user.uid).set({
            personalData: {
                age,
                email: user.email,
                phoneNumber: user.phoneNumber,
                bio: 'Hello World!',
                name: user.displayName,
                username: ''
            },
            profileData: {
                followers: 0,
                following: 0,
                likes: 0,
                avatar: user.photoURL,
                hasVideos: false
            },
            videoData: []
        }, {merge: true})
        .then(() => {
            dispatch(userInfo(user.uid, age, user.email, user.phoneNumber, ''))
        })
        .catch(err => console.log('ERROR', err))
    }
}

const setNickName = (username) => ({
    type: 'SET_NICK_NAME',
    username
})

export const setUserNickName = (username) => {
    let user = firebase.auth().currentUser;
    return dispatch => {
        db.collection('users').doc(user.uid).update({
            'personalData.username': username
        }).then(() => {
            dispatch(setNickName(username));
            dispatch(closeModal());
        })
    }
}

const deleteUser = () => ({
    type: 'DELETE_ACCOUNT'
})

export const deleteAccount = () => {
    return dispatch => {
        const user = firebase.auth().currentUser;

        db.collection('collection').doc(user.uid).delete()
            .then(() => {
                user.delete();
                dispatch(deleteUser());
            })  
    }
}

const logoutUser = () => ({
    type: 'LOGOUT'
})

export const logout = () => {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => dispatch(logoutUser()));
    }
}

const loginUser = (age, email, uid, nickName, phoneNumber) => ({
    type: 'LOGIN',
    age,
    email,
    uid,
    nickName,
    phoneNumber
});

export const login = (uid) => {
    return async dispatch => {
        let user = firebase.auth().currentUser;

        let doc = await db.collection('users').doc(user.uid).get();

        if(doc.data() && !uid) {
            let userInfo = {...doc.data().personalData};
            dispatch(loginUser(userInfo.age, userInfo.email, user.uid, userInfo.username, userInfo.phoneNumber));
            dispatch(closeModal());
        } 
        
    }
}

const generateUsername = () => {
    const length = 8;
    let timestamp = +new Date();
    let ts = timestamp.toString();
    let parts = ts.split( "" ).reverse();
    let id = "";
  
    const getRandomInt = ( min, max ) => {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    for( let i = 0; i < length; ++i ) {
        let index = getRandomInt( 0, parts.length - 1 );
        id += parts[index];	 
    }
    return 'user' + id;
}

const randomUsername = (username) => ({
    type: 'SET_RANDOM_USERNAME',
    username
})

export const setRandomUsername = () => {
    return dispatch => {
        const user = firebase.auth().currentUser;

        const username = generateUsername();
        db.collection('users').doc(user.uid).update({
            'personalData.username': username
        }).then(() => {
            dispatch(randomUsername(username));
            dispatch(closeModal());
        })
        
    }
}

