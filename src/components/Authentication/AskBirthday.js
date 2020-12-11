import React, { useState, useEffect } from 'react';
import SelectDayMonthYear from '../UI/SelectDayMonthYear';
import { Link } from 'react-router-dom';
import withAuthWithPhoneNumber from '../../HOC/withAuthWithPhoneNumber';

const AskBirthday = (props) => {
    const [btnActive, setBtnActive] = useState('');
    const [birthday, setBirthday] = useState({
        day: null,
        month: null,
        year: null
    })

    useEffect(() => {
        if(birthday.year && birthday.month && birthday.day) {
            setBtnActive('login-form__button_active')
        }
    }, [birthday])

    const birthdayHandler = (e) => {
        let value = e.target.value;

        switch(e.target.name) {
            case('month'):
                setBirthday(date => ({
                    ...date,
                    month: value
                }))
                break;
            case('day'):
                setBirthday(date => ({
                    ...date,
                    day: value
                }))
                break;
            case('year'):
                setBirthday(date => ({
                    ...date,
                    year: value
                }))
                break;
            default:
                setBirthday({
                    year: null,
                    day: null,
                    month: null
                })
        }
    };

    const confirmDate = () => {
        if(birthday.year && birthday.month && birthday.day) {     
            props.onSetUserInfo(birthday)
        }
    }

    return (
        <div style={{width: '45rem'}}> 
            <div className="login-form__text" style={{width: '100%', marginBottom: '3rem'}}>
                <h1 className="title-large">Sign up</h1>
            </div>
            <div id="recaptcha"></div>
            <p className="title title_black_bold" style={{marginRight: 'auto', marginBottom: '2rem'}}>When's your birthday?</p>
            <div className="select-birthday">
                <SelectDayMonthYear  birthdayHandler={birthdayHandler}/>
            </div>
            <p className="login-form__body-top-login-text" style={{cursor: 'initial', fontSize: '1.2rem', marginRight: 'auto', marginBottom: '2rem', color: '#9F9FA4'}}>Your birthday won't be shown publicly.</p>
            <button onClick={() => confirmDate()} className={props.loginBtnClass.join(' ') + ' ' + btnActive} style={{width: '100%', margin: '3rem 0 1.5rem 0'}}>Next</button>
            <div className="login-form__body-bottom-wrapper">
                <Link to="#" className="help">
                    <span className="help__icon"></span>
                    <span className="help__text">Feedback and help</span>
                </Link>
            </div>
        </div>
    )
}

export default withAuthWithPhoneNumber(AskBirthday);