import React, {useEffect} from 'react';
import ModalPortal from '../Modal/ModalPortal';
import Form  from '../Authentication/Form';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { deleteAccount, setRandomUsername } from '../../actions/auth';


const Modal = (props) => {
    const closeButtonHandler = () => {
        props.onHideModal();
        if(props.username === '') {
            props.onSetRandomUsername();
        }
        if(props.askUserBirthday && !props.age) {
            console.log('delete')
            props.onDeleteAccount();
        }
    }

    useEffect(() => {
        if(props.isModalOpen) {
            document.body.style.overflow = 'hidden' 
        } else {
            document.body.style.overflow = 'scroll' 
        }
    }, [props.isModalOpen]);


    return (
        <>
            { props.isModalOpen  &&  <ModalPortal>
                                        <div className="modal-container">
                                            <div className="modal-backdrop"></div>
                                            <Form  closeButtonHandler={closeButtonHandler}/>
                                        </div>
                                    </ModalPortal>         
            }
        </>
    )

}

const mapStateToProps = state => {
    return {
        isModalOpen: state.modal.isModalOpen,
        askUserBirthday: state.auth.askUserBirthday,
        age: state.auth.userInfo.age,
        username: state.auth.userInfo.nickName,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHideModal: () => dispatch(closeModal()),
        onDeleteAccount: () => dispatch(deleteAccount()),
        onSetRandomUsername: () => dispatch(setRandomUsername())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);