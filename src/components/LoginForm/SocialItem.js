import React from 'react';

const SocialItem = (props) => {

    return (
        <div className="login-form__social-item" onClick={() => props.login()} >
            <div className="login-form__social-icon" style={{backgroundImage: `url(${props.icon})`}}></div>
            <h3 className="login-form__social-text">{props.text}</h3>
        </div>
    )
}

export default SocialItem;