import React from 'react';
import withHoverMenu from '../../HOC/withHoverMenu';

const TagHeader = ({ tagData, openAction, closeAction, isPopupOpen }) => {
    const {
        title, 
        subtitle, 
        avatar, 
        smallText
    } = tagData;

    return (
        <div className="user__header">
            <div className="user__info-description">
                <div className="user__avatar">
                    <img className="user__avatar-img" src={avatar} alt="avatar" style={{borderRadius: '0'}}/>
                </div>
                <div className="user__text">
                    <h1 className="title-large user__text-title">{title}</h1>
                    <h2 className="title title_black_bold user__text-subtitle" style={{color: '#A4A4A4', fontSize: '1.7rem', fontWeight: '100'}}>{subtitle}</h2>
                </div>
            </div>
            <h2 className="user__welcome" style={{fontWeight: '100', fontSize: '1.8rem'}}>
                {smallText}
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

export default withHoverMenu(TagHeader);