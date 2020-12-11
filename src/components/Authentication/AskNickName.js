import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserNickName, login } from '../../actions/auth';
import { closeModal } from '../../actions/modal';
import { db } from '../../firebase/firebase';

let date = 0;
const AskUserNickName = (props) => {
    const [nickName, setNickName] = useState('');
    const [btnActive, setBtnActive] = useState(['login-form__button']);
    const [validationText, setValidationText] = useState('You can always change this later.');
    const textRef = useRef(null);

    
    useEffect(() => {
        db.collection('users').where('personalData.username', '==', nickName).get()
            .then(docs =>  {
                if(docs.size) {
                    setBtnActive(['login-form__button']);
                    setValidationText('This username isn’t available.');
                    textRef.current.style.color = '#FE5342';
                }
                if(!docs.size && /^[._0-9a-zA-Z]+$/.test(nickName)) {
                    setBtnActive(['login-form__button', 'login-form__button_active']);
                    setValidationText('You can always change this later.');
                    textRef.current.style.color = '#161823'
                }
                if((!/^[._0-9a-zA-Z]+$/.test(nickName) && nickName !== '') || /^[0-9]+$/.test(nickName)) {
                    setBtnActive(['login-form__button']);
                    setValidationText('Only letters, numbers, underscores, or periods are allowed.');
                    textRef.current.style.color = '#FE5342';
                }
                if(nickName === '') {
                    setBtnActive(['login-form__button']);
                    setValidationText('You can always change this later.');
                    textRef.current.style.color = '#161823';
                }
                if(/^[._0-9a-zA-Z]+$/.test(nickName) && nickName.length < 2) {
                    setBtnActive(['login-form__button']);
                    setValidationText('Include at least 2 characters in your username.');
                    textRef.current.style.color = '#FE5342';
                }
            });

    }, [nickName]);

    
    const nickNameInputHandler = (e) => {
        if(Date.now() - date > 100) {
            setNickName(e.target.value);
        }
        date = Date.now();
    };

    const skipBtnHandler = () => {
        props.onLogin(props.uid);
    }

    const signUpBtnHandler = () => {
        props.onSetNickName(nickName);
    }

    return (
        <div style={{width: '45rem'}}>
            <div className="login-form__text" style={{width: '100%', marginBottom: '3rem'}}>
                <h1 className="title-large">Sign up</h1>
            </div>
            <form className="login-form__body-top" style={{textAlign: 'left', width: '100%'}}>
                <div className="login-form__body-top-title" style={{margin: '1rem 0 1.5rem 0'}}>
                    <p className="title title_black_bold" style={{fontSize: '1.9rem'}}>Create username</p>
                </div>
                <div className="login-form__input" >
                    <input onChange={(e) => nickNameInputHandler(e)}type="text" className="input form-trending__input" style={{flex: '1 1 auto', height: '5rem'}} placeholder="username"/>
                </div>
                <p className="login-form__body-top-login-text" ref={textRef} style={{fontSize: '1.3rem'}}>{validationText}</p>
            </form>

            <button onClick={() => signUpBtnHandler()} className={btnActive.join(' ')} style={{width: '100%', margin: '4rem 0 1rem 0'}}>Sign up</button>
            <button onClick={() => skipBtnHandler()} className={'login-form__button'} style={{width: '100%', margin: '0', background: 'transparent', color: 'black'}}>Skip</button>
            <div className="login-form__body-bottom-wrapper">
                <Link to="#" className="help">
                    <span className="help__icon"></span>
                    <span className="help__text">Feedback and help</span>
                </Link>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return ({
        uid: state.auth.userInfo.uid
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        onSetNickName: (nickName) => dispatch(setUserNickName(nickName)),
        onCloseModal: () => dispatch(closeModal()),
        onLogin: (uid) => dispatch(login(uid))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AskUserNickName);