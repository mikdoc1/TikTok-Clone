import React, { useContext } from 'react';
import { connect } from 'react-redux';
import SignUpWithSocial from './SignUpWithSocial';
import SignUpWithPhoneOrEmail from './SignUpWithPhoneOrEmail';
import { signUpWithPhoneNumber, loginWithSocial, setUserInfo, newUser } from '../../../actions/auth';
import { SignUpContext } from '../Form';
import AskBirthday from '../AskBirthday';
import AskNickName from '../AskNickName';




 
const SignUp = (props) => {
    const context = useContext(SignUpContext);
    let LoginSocial = null;
    let LoginPhoneOrEmail = null;
    let Birthday = null;
    let NickName =null;

    if(!context.loginWithPhone) {
        LoginSocial = <SignUpWithSocial login={props.onLoginWithSocial}/>
    } else {
        LoginPhoneOrEmail = <SignUpWithPhoneOrEmail     onLoginWithPhoneNumber={props.onLoginWithPhoneNumber} 
                                                        onSetNewUser={props.onSetNewUser}
                                                        response={props.resonse}/>
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
};

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
        onSetUserInfo: (birthday) => dispatch(setUserInfo(birthday)),
        onSetNewUser: () => dispatch(newUser()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);