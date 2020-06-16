import React from 'react';
import { CSSTransition } from 'react-transition-group';

const BackDrop = (props) =>  {
    if(props.isOpen) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "initial"
    }

    return (
        <CSSTransition
        in={props.isOpen}
        timeout={300}
        classNames="backdrop"
        unmountOnExit
        >
            <>
            <div className="backdrop"></div>
            {props.children}
            </>
            </CSSTransition>
        )
}


export default BackDrop