import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal';
import withHoverMenu from '../../HOC/withHoverMenu';
import { logout } from '../../actions/auth';

const Button = (props) => {
    let wrapperClasses = "button-wrapper";
    let btnClasses = "button";
    let uploadIcon = null; 
    let avatar = null;
    
    if(props.uid && props.pathname !== '/' && !props.isModalOpen) {
        avatar = (
            <div className="profile" onMouseEnter={() => props.openAction()} onMouseLeave={() => props.closeAction()}>
                <img className="profile__avatar" src="https://p16-tiktokcdn-com.akamaized.net/aweme/100x100/tiktok-obj/1668456445807617.jpeg" alt="avatar"/>
                {props.isPopupOpen &&   <div className="profile__popup">
                                            <Link to="#" className="profile__popup-text">View Profile</Link>
                                            <span className="profile__popup-border"></span>
                                            <Link to="#" onClick={() => props.onLogout()} className="profile__popup-text">Log out</Link>
                                        </div>}
                                              
                                            
            </div>

        )
    }
    let mainButton = (
        <>
            <img className="play-img" alt="play" src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/watch-now-25679bdafc5ff05f768f983242d48527.svg"/>
            <Link className={btnClasses} to='/'>Watch now</Link>
        </>
    );

    if(props.pathname !== '/') {
        wrapperClasses = "big-button-wrapper"
        btnClasses = "big-button"
        mainButton = (
            <>
                <Link className="big-button" to='#'>Login</Link>
            </>
        )

        uploadIcon = (
            <div className="upload-wrapper" >
                <img src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/upload-c356005dd77937cdcc0f9bb9e7aee70d.svg" alt="upload"/>
                <div className="upload-menu">
                    <div className="upload-menu__item">
                        <span>Upload video</span>
                    </div>
                </div>
            </div>

        )
    };
    
    return (
        <>
            {uploadIcon}
            {avatar ? avatar 
                    : <div className={wrapperClasses} onClick={() => props.onShowModal()}>
                        {mainButton}
                      </div>}

        </>
    )   
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.modal.isModalOpen,
        uid: state.auth.userInfo.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(openModal()),
        onLogout: () => dispatch(logout())
        // onHideModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withHoverMenu(Button))