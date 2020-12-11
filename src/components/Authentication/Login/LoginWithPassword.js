import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Form';
import withAuthWithPhoneNumber from '../../../HOC/withAuthWithPhoneNumber';

let date = 0;

const LoginWithPassword = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef(null);
    const context = useContext(LoginContext);



    const inputHandler = (e) => {
        if(Date.now() - 0 > 100) {
            let value = e.target.value;
            if(e.target.type === 'email') {
                setEmail(value)
            } else {
                setPassword(value)
            }
        }
        date = Date.now();
    }

    const eyeToggler = () => {
        setShowPassword(showPassword => !showPassword);
        if(!showPassword) {
            inputRef.current.type = 'email'
        } else {
            inputRef.current.type = 'password'
        }
    }

    return (
        <div style={{width: '40.5rem'}}> 
            <div className="login-form__text" style={{width: '100%', marginBottom: '3rem'}}>
                <h1 className="title-large">Log in</h1>
            </div>
            <div id="recaptcha"></div>
            <form className="login-form__body-top" onChange={(e) => inputHandler(e)} style={{textAlign: 'left', width: '100%'}}>
                <div className="login-form__body-top-title" style={{margin: '1rem 0'}}>
                    <p className="title title_black_bold">Email or Username</p>
                    <button onClick={() => context.passwordPageHandler()} className="title-smallest login-form__body-top-login-text">Log in with phone</button>
                </div>
                <div className="email-password-input-wrapper">
                    <input type="email" onChange={(e) => props.codeInputHandler(e)} value={email} className="input form-trending__input" placeholder="Email or username" style={{ display: 'block', marginBottom: '1rem', width: '100%'}}/>
                    <input type="password" value={password} ref={inputRef} className="input form-trending__input password-input" placeholder="Password" style={{ display: 'block', marginBottom: '1rem', width: '100%'}}/>
                    <img    src={showPassword ? "http://s16.tiktokcdn.com/falcon/fe_tiktok_common/svgs/showPassword.6f254a34.svg"
                                            : "http://s16.tiktokcdn.com/falcon/fe_tiktok_common/svgs/hidePassword.316c9e71.svg"}
                            onClick={() => eyeToggler()}
                            className="password-eye-img" 
                            alt="show/hide-password"/>
                </div>
                <button  className="login-form__body-top-login-text" style={{fontSize: '1.2rem'}}>Forgot password?</button>
            </form>
            <button className={props.loginBtnClass.join(' ')} style={{width: '100%', marginTop: '3rem'}}>Login</button>

            <div className="login-form__body-bottom-wrapper">
                <div className="login-form__body-bottom-signup-text-wrapper">   
                    <div className="login-form__body-bottom">
                            <p>Don't have any account?</p>
                            &nbsp;
                            <button className="sign-up-button" onClick={() => context.loginSignUpToggler()}>Sign up</button>
                    </div>
                </div>

                <Link to="#" className="help">
                    <span className="help__icon"></span>
                    <span className="help__text">Feedback and help</span>
                </Link>
            </div>
        </div>
    )
}

export default withAuthWithPhoneNumber(LoginWithPassword);