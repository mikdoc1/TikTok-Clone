import React, { useContext } from 'react';
import SelectCountryCode from '../../UI/SelectCountryCode';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Form';
import withAuthWithPhoneNumber from '../../../HOC/withAuthWithPhoneNumber';

const LoginWithPhone = (props) => {
    const context = useContext(LoginContext)
    return (
        <> 
            <div className="login-form__text" style={{width: '100%', marginBottom: '3rem'}}>
                <h1 className="title-large">Log in</h1>
            </div>
            <div id="recaptcha"></div>
            <form id="send-code" className="login-form__body-top" onSubmit={(e) => { e.preventDefault(); props.onLoginWithPhoneNumber(props.phoneNum)} } style={{textAlign: 'left', width: '100%'}}>
                <div className="login-form__body-top-title" style={{margin: '1rem 0'}}>
                    <p className="title title_black_bold">Phone</p>
                    <button onClick={() => context.passwordPageHandler()} className="title-smallest login-form__body-top-login-text">Log in with email or username</button>
                </div>
                <div className="login-form__input" >
                    <SelectCountryCode />
                    <input type="text" onChange={(e) => props.phoneInputHandler(e)} value={props.phoneNum} className="input form-trending__input" style={{flex: '1 1 auto'}} placeholder="Phone Number"/>
                </div>
                <div className="login-form__code">
                    <input type="text" onChange={(e) => props.codeInputHandler(e)} className="input form-trending__input" placeholder="Enter 6-digit code" style={{width: '60%'}}/>
                    <input id='send-code' type="submit" className={props.sendCodeBtnClass.join(' ')} value='Send Code'/>
                </div>
                <button  className="login-form__body-top-login-text" style={{fontSize: '1.2rem'}}>Log in with password</button>
            </form>
            <button onClick={(e) => props.confirmOpt(e)} className={props.loginBtnClass.join(' ')} style={{width: '100%', marginTop: '3rem'}}>Login</button>

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
        </>
    )
}

export default withAuthWithPhoneNumber(LoginWithPhone);