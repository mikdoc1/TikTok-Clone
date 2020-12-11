import React from 'react';
import withHoverMenu from '../../HOC/withHoverMenu';

const UserHeader = ({ userData, openAction, closeAction, isPopupOpen }) => {

    return (
        <div className="user__header">
            <div className="user__info-description">
                <div className="user__avatar">
                    <img className="user__avatar-img" src={userData.avatar} alt="avatar"/>
                </div>
                <div className="user__text">
                    <h1 className="title-large user__text-title">{userData.username}</h1>
                    <h2 className="title title_black_bold user__text-subtitle">{userData.name}</h2>
                    <button className="big-button big-button-wrapper user__follow-button">Follow</button>
                </div>
            </div>
            <h2 className="user__info-count">
                <strong>{userData.following}</strong>
                <span>Following</span>
                <strong>{userData.followers}</strong>
                <span>Followers</span>
                <strong>{userData.likes}</strong>
                <span>Likes</span>
            </h2>
            <h2 className="user__welcome">
                {/* <span role="img" aria-label="waving-hand">👋</span>
                <span role="img" aria-label="down-right-arrow">↘</span>
                Watch my BEST TRICKS here
                <span role="img" aria-label="down-left-arrow">↙️</span>
                <span role="img" aria-label="waving-hand">👋</span> */}
                {userData.bio}
            </h2>
            <div className="more-actions" onMouseEnter={() => openAction()} onMouseLeave={() => closeAction()}>
                <div className="more-actions__icon"></div>
                {isPopupOpen && <div className="more-actions__popup">
                                    <p className="more-actions__popup-text">Report</p>
                                </div>}
            </div>   
        </div>
    )

}

export default withHoverMenu(UserHeader);