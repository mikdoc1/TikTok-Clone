import { firebase, db } from '../firebase/firebase';


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
                dispatch(phoneSignUp(res))
            })
            .catch(err => console.log(err));   
    };
};

const newUser = () => ({
    type: 'NEW_USER'
});

export const loginWithSocial = (provider) => {
    return dispatch => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                if(res.additionalUserInfo) {
                    dispatch(newUser());
                }
            })
            .catch(err => console.log(err)) 
    }
}

const userInfo = (uid, age, email) => ({
    type: 'SET_USER_INFO',
    uid,
    age,
    email
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
            age   
        })
        .then(() => {
            dispatch(userInfo(user.uid, age, user.email))
        })
        .catch(err => console.log('ERROR', err))
    }
}

const setNickName = (nickName) => ({
    type: 'SET_NICK_NAME',
    nickName
})

export const setUserNickName = (nickName) => {
    return dispatch => {
        db.collection('nick-names').doc('nick-names-list').set({
            [nickName]: true
        }, {merge: true})
        .then(() => dispatch(setNickName(nickName)))
    }
}

const deleteUser = () => ({
    type: 'DELETE_ACCOUNT'
})

export const deleteAccount = () => {
    return dispatch => {
        let user = firebase.auth().currentUser;
        user.delete();
        dispatch(deleteUser())
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

export const login = () => ({
    type: 'LOGIN'
})


