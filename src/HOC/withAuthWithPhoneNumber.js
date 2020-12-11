import React, { useEffect, useState } from 'react';

const withAuthPhoneNumber = (WrappedComponent) => {
    return (props) => {
        const [phoneNum, setPhoneNum] = useState('');
        const [opt, setOpt] = useState('');
        const [btnClasses, setStyle] = useState({
            sendCodeBtnClass: ['login-form__button'],
            loginBtnClass: ['login-form__button']
        });
    
        useEffect(() => {
            if(opt !== '' && Number(opt) && props.response) {
                setStyle(state => ({
                    ...state,
                    loginBtnClass: ['login-form__button', 'login-form__button_active']
                }));
            } else {
                setStyle(state => ({
                    ...state,
                    loginBtnClass: ['login-form__button']
                }));
            }
    
            if(Number(phoneNum) && !/\s/.test(phoneNum)) {
                setStyle(state => ({
                    ...state,
                    sendCodeBtnClass: ['login-form__button, login-form__button_active']
                }))
            } else {
                setStyle(state => ({
                    ...state,
                    sendCodeBtnClass: ['login-form__button']
                }))
            }
        }, [opt, props.response, phoneNum]);
    
        const phoneInputHandler = (e) => {
            setPhoneNum(e.target.value);
        }
    
        const codeInputHandler = (e) => {
            setOpt(e.target.value);
        }
    
        const confirmOpt = (e) => {
            e.preventDefault();
            if(opt == null) return;
            props.response.confirm(opt)
                .then((res) => {
                    if(res.additionalUserInfo.isNewUser) {
                        props.onSetNewUser();
                    }   
                })        
        };

        return (
            <WrappedComponent   phoneInputHandler={phoneInputHandler}
                                codeInputHandler={codeInputHandler}
                                confirmOpt={confirmOpt}
                                phoneNum={phoneNum}
                                sendCodeBtnClass={btnClasses.sendCodeBtnClass}
                                loginBtnClass={btnClasses.loginBtnClass}
                                {...props}/>
        )
    }
}

export default withAuthPhoneNumber;