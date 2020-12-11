

const initState = {
    askUserBirthday: false,
    askUserNickName: false,
    userInfo: {
        age: null,
        nickName: null,
        uid: null,
        email: null
    }
}

const authReducer = (state = initState, action) =>  {
    
    switch(action.type) {
        case('NEW_USER'):
            return {
                ...state,
                askUserBirthday: true,
            }
        case('SET_USER_INFO'):
            return {
                askUserNickName: true,
                askUserBirthday: false,
                userInfo: {
                    age: action.age,
                    uid: action.uid,
                    email: action.email,
                    phoneNumber: action.phoneNumber,
                    nickName: action.nickName
                }
            }
        case('SET_NICK_NAME'): 
            return {
                askUserBirthday: false,
                askUserNickName: false,
                userInfo: {
                    ...state.userInfo,
                    nickName: action.nickName
                }
            }
        case('LOGIN_WITH_PHONE_NUMBER'):
            return {
                ...state,
                response: action.response
            };
        case('DELETE_ACCOUNT'):
            return {
                askUserBirthday: false,
                askUserNickName: false,
                userInfo: {
                    age: null,
                    nickName: null,
                    uid: null,
                    email: null,
                    phoneNumber: null
                }
            }
        case('LOGOUT'):
            return {
                askUserBirthday: false,
                askUserNickName: false,
                userInfo: {
                    age: null,
                    nickName: null,
                    uid: null,
                    email: null,
                    phoneNumber: null
                }
            };
        case('LOGIN'):
            return {
                askUserBirthday: false,
                askUserNickName: false,
                userInfo: {
                    age: action.age,
                    nickName: action.nickName,
                    uid: action.uid,
                    email: action.email,
                    phoneNumber: action.phoneNumber
                }
            }
        case('SET_RANDOM_USERNAME'):
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    nickName: action.username
                }
            }
        default:
            return state
    }
};

export default authReducer;