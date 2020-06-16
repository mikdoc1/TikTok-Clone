import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SelectCountryCode from '../../UI/SelectCountryCode';
import SelectDayMonthYear from '../../UI/SelectDayMonthYear';
import { SignUpContext } from '../Form';
import withAuthWithPhoneNumber from '../../../HOC/withAuthWithPhoneNumber';




const SignUpWithPhoneOrEmail = (props) => {
    const context = useContext(SignUpContext)
    return (
        <>
            <div className="login-form__text" style={{width: '100%', marginBottom: '3rem'}}>
                <h1 className="title-large">Sign up</h1>
            </div>
            <div id="recaptcha"></div>
            <p className="title title_black_bold" style={{marginRight: 'auto', marginBottom: '2rem'}}>When's your birthday?</p>
            <div className="select-birthday">
                <SelectDayMonthYear />
            </div>
            <p className="login-form__body-top-login-text" style={{cursor: 'initial', fontSize: '1.2rem', marginRight: 'auto', marginBottom: '2rem', color: '#9F9FA4'}}>Your birthday won't be shown publicly.</p>
            <form onSubmit={(e) => { e.preventDefault(); props.onSignUpWithPhoneNumber(props.phoneNum)} } className="login-form__body-top" style={{textAlign: 'left', width: '100%'}}>
                <div className="login-form__body-top-title" style={{margin: '1rem 0'}}>
                    <p className="title title_black_bold">Phone</p>
                    <button className="title-smallest login-form__body-top-login-text">Sign up with email</button>
                </div>
                <div className="login-form__input" >
                    <SelectCountryCode />
                    <input type="text" onChange={(e) => context.phoneInputHandler(e)} className="input form-trending__input" style={{flex: '1 1 auto'}} placeholder="Phone Number"/>
                </div>
                <div className="login-form__code">
                    <input type="text" onChange={(e) => context.codeInputHandler(e)} className="input form-trending__input" placeholder="Enter 6-digit code" style={{width: '60%'}}/>
                    <input type="submit" className={props.sendCodeBtnClass.join(' ')} value="Send Code"/>
                </div>
            
            </form>
            <button onClick={(e) => props.onLogin(e, context.response)} className={props.loginBtnClass.join(' ')} style={{width: '100%', margin: '3rem 0 1.5rem 0'}}>Next</button>
            <p className="term-text">By continuing, you agree to TikTok’s <strong>Terms of Use</strong> and confirm that you have read TikTok’s <strong>Privacy Policy</strong>. If you sign up with SMS, SMS fees may apply.</p>
            <div className="login-form__body-bottom-wrapper">
                <div className="login-form__body-bottom-signup-text-wrapper">   
                    <div className="login-form__body-bottom">
                            <p>Already have an account?</p>
                            &nbsp;
                            <button className="sign-up-button" onClick={() => context.loginSignUpToggler()}>Log in</button>
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

export default withAuthWithPhoneNumber(SignUpWithPhoneOrEmail);