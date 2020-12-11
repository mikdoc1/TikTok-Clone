import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { signUpWithPhoneNumber, loginWithSocial, loginWithPassword, setUserInfo,  newUser} from '../../../actions/auth';
import LoginWithSocial from './LoginWithSocial';
import LoginWithPhone from './LoginWithPhone';
import LoginWithPassword from './LoginWithPassword';
import AskBirthday from '../AskBirthday';
import AskNickName from '../AskNickName';
import { LoginContext } from '../Form';



const Login = (props) => {
    const context = useContext(LoginContext)
    let LoginSocial = null;
    let LoginPhone = null;
    let LoginPassword = null;
    let Birthday = null;
    let NickName = null;

    if(!context.loginWithPhone) {
        LoginSocial = <LoginWithSocial login={props.onLoginWithSocial}/>
    } else {
        LoginPhone = <LoginWithPhone    onLoginWithPhoneNumber={props.onLoginWithPhoneNumber} 
                                        response={props.response}
                                        onSetNewUser={props.onSetNewUser}/>
    }

    if(context.loginWithPassword) {
        LoginPassword = <LoginWithPassword  onLoginWithPassword={props.onLoginWithPassword}/>
        LoginSocial = null;
        LoginPhone = null;
        Birthday = null;
        NickName = null;

    }

    if(props.askUserBirthday) {
        Birthday = <AskBirthday  age={props.age}
                                 onSetUserInfo={props.onSetUserInfo}/>;
        LoginSocial = null;
        LoginPhone = null;
        LoginPassword = null;
    }

    if(props.askUserNickName) {
        NickName = <AskNickName />
        Birthday = null;
        LoginSocial = null;
        LoginPhone = null;
        LoginPassword = null;
    }

    return (
            <div className="login-form__body" style={context.bodyStyle}>        
                {LoginSocial}
                {LoginPhone}
                {LoginPassword}
                {Birthday}
                {NickName}
            </div>
    )
}

const mapStateToProps = state => {
    return {
        response: state.auth.response,
        age: state.auth.userInfo.age,
        askUserBirthday: state.auth.askUserBirthday,
        askUserNickName: state.auth.askUserNickName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginWithPhoneNumber: (phoneNumber) => dispatch(signUpWithPhoneNumber(phoneNumber)), 
        onLoginWithSocial: (provider) => dispatch(loginWithSocial(provider)), 
        onSetUserInfo: (birthday) => dispatch(setUserInfo(birthday)),
        onSetNewUser: () => dispatch(newUser()),
        onLoginWithPassword: (e, email, password) => dispatch(loginWithPassword(e, email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);