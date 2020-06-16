import React, { useState } from 'react';
import withHoverMenu from '../../HOC/withHoverMenu';

const UserHeader = props => {

    return (
        <div className="user__header">
            <div className="user__info-description">
                <div className="user__avatar">
                    <img className="user__avatar-img" src="https://mphw-suse1.muscdn.com/res/usericon/913/icon-68616495085350913-596.jpg" alt="Zach King TikTok"/>
                </div>
                <div className="user__text">
                    <h1 className="title-large user__text-title">zacking</h1>
                    <h2 className="title title_black_bold user__text-subtitle">Zack King</h2>
                    <button className="big-button big-button-wrapper user__follow-button">Follow</button>
                </div>
        
            </div>
            <h2 className="user__info-count">
                <strong>21</strong>
                <span>Following</span>
                <strong>43.9M</strong>
                <span>Followers</span>
                <strong>488.5M</strong>
                <span>Likes</span>
            </h2>
            <h2 className="user__welcome">
                <span role="img" aria-label="waving-hand">👋</span>
                <span role="img" aria-label="down-right-arrow">↘</span>
                Watch my BEST TRICKS here
                <span role="img" aria-label="down-left-arrow">↙️</span>
                <span role="img" aria-label="waving-hand">👋</span>
                
            </h2>
            <div className="more-actions" onMouseEnter={() => props.openAction()} onMouseLeave={() => props.closeAction()}>
                <div className="more-actions__icon"></div>
                {props.isPopupOpen && <div className="more-actions__popup">
                                        <p className="more-actions__popup-text">Report</p>
                                      </div>}
            </div>   
        </div>
    )

}

export default withHoverMenu(UserHeader);