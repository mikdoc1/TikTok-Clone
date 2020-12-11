import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal';
import { closeSidebar } from '../../../actions/sidebar';
import withHoverMenu from '../../../HOC/withHoverMenu';
import { logout } from '../../../actions/auth';
import { firebase, db, } from '../../../firebase/firebase';

const Button = (props) => {

    const [username, setUsername] = useState(null);
    const [userProfilePic, setUserPic] = useState("https://p16-tiktokcdn-com.akamaized.net/aweme/100x100/tiktok-obj/1668456445807617.jpeg");

    useEffect(() => {
        if(props.uid) {
            const userRef = db.collection('users').doc(props.uid);
            const user = firebase.auth().currentUser;
            setUserPic(user.photoURL);
            if(userRef) {
                userRef.get()
                    .then(user => {
                        if(user.data()) {
                            setUsername(user.data().personalData.username);

                        }
                    })
            }
        }
    }, [props.uid])

    let avatar = null;
    
    if(props.uid && props.pathname !== '/' && !props.isModalOpen) {
        avatar = (
            <div className="profile" onMouseEnter={() => props.openAction()} onMouseLeave={() => props.closeAction()}>
                <img className="profile__avatar" src={userProfilePic} alt="avatar"></img>
                {props.isPopupOpen &&   <div className="profile__popup">
                                            <Link to={`/profile/${username}`} className="profile__popup-text">View Profile</Link>
                                            <span className="profile__popup-border"></span>
                                            <Link to="#" onClick={() => props.onLogout()} className="profile__popup-text">Log out</Link>
                                        </div>}
                                              
                                            
            </div>

        )
    }

    let uploadIcon = null;
    let mainButton = (
        <div className="button-wrapper" onClick={() => props.onCloseSidebar()}>
            <img className="play-img" alt="play" src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/watch-now-25679bdafc5ff05f768f983242d48527.svg"/>
            <Link className="button" to='/trending'>Watch now</Link>
        </div>
    );

    if(props.pathname !== '/') {
        mainButton = (
            <div className="big-button-wrapper" onClick={() => props.onShowModal()}>
                <button className="big-button" >Login</button>
            </div>
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
                    : mainButton}

        </>
    )   
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.modal.isModalOpen,
        uid: state.auth.userInfo.uid,
        username: state.auth.userInfo.nickName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(openModal()),
        onLogout: () => dispatch(logout()),
        onCloseSidebar: () => dispatch(closeSidebar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withHoverMenu(Button))