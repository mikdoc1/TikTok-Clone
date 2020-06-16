import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { signUpWithPhoneNumber, loginWithSocial, setUserInfo } from '../../../actions/auth';
import withAuthWithPhoneNumber from '../../../HOC/withAuthWithPhoneNumber';
import LoginWithSocial from './LoginWithSocial';
import LoginWithPhoneOrEmail from './LoginWithPhoneOrEmail';
import AskBirthday from '../AskBirthday';
import AskNickName from '../AskNickName';
import { LoginContext } from '../Form';



const Login = (props) => {
    const context = useContext(LoginContext)
    let LoginSocial = null;
    let LoginPhoneOrEmail = null;
    let Birthday = null;
    let NickName =null;

    if(!context.loginWithPhone) {
        LoginSocial = <LoginWithSocial login={props.onLoginWithSocial}/>
    } else {
        LoginPhoneOrEmail = <LoginWithPhoneOrEmail onLoginWithPhoneNumber={props.onLoginWithPhoneNumber} response={props.resonse}/>
    }

    if(props.askUserBirthday) {
        Birthday = <AskBirthday  age={props.age}
                                 onSetUserInfo={props.onSetUserInfo}/>;
        LoginSocial = null;
        LoginPhoneOrEmail = null;
    }

    if(props.askUserNickName) {
        NickName = <AskNickName />
        Birthday = null;
        LoginSocial = null;
        LoginPhoneOrEmail = null;
    }

    return (
            <div className="login-form__body" style={context.bodyStyle}>        
                {LoginSocial}
                {LoginPhoneOrEmail}
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
        onLoginWithPhoneNumber: () => dispatch(signUpWithPhoneNumber()), 
        onLoginWithSocial: (provider) => dispatch(loginWithSocial(provider)), 
        onSetUserInfo: (birthday) => dispatch(setUserInfo(birthday)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthWithPhoneNumber(Login));