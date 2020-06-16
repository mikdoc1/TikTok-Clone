import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/auth';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

export const SignUpContext = React.createContext(null);
export const LoginContext = React.createContext(null);

const Form = (props) => {
    const [hasAccount, setAccount] = useState(false);
    const [loginWithPhone, setloginWithPhone] = useState(false);

    const loginSignUpToggler  = () => {
        setAccount(hasAccount => !hasAccount);
        setloginWithPhone(false)
    }

    const secondPageHandler = () => {
        setloginWithPhone(loginWithPhone => !loginWithPhone);
    }

    let bodyStyle = null;
    if(loginWithPhone) bodyStyle = {width: '45rem'};

    return (
        <div className="login-form">
            <div className="login-form__header">
                {loginWithPhone && <div className="back-modal" onClick={() => secondPageHandler()}></div>}
                <div className="login-form__close-modal" onClick={() => props.closeButtonHandler()}></div>
            </div>
            {!hasAccount ?  <LoginContext.Provider  value={{
                                                    loginSignUpToggler,
                                                    secondPageHandler,
                                                    bodyStyle,
                                                    loginWithPhone }}>
                                <Login />
                            </LoginContext.Provider>

                         :  <SignUpContext.Provider value={{
                                                    loginSignUpToggler,
                                                    secondPageHandler,
                                                    bodyStyle,
                                                    loginWithPhone }}>
                                <SignUp />
                            </SignUpContext.Provider>
                    }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        age: state.auth.userInfo.age,
        nickName: state.auth.userInfo.nickName,
        askUserBirthday: state.auth.askUserBirthday
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteAccount: () => dispatch(deleteAccount())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Form)