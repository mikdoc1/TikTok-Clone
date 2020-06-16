import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../Navigation';
import BackDrop from '../../UI/BackDrop';
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {
    return (
        <>
            <BackDrop isOpen={props.isOpen} />
            <CSSTransition   
                in={props.isOpen}
                timeout={600}
                classNames="sidedrawer"
                unmountOnExit>                   
                    <div className="sidedrawer">   
                        <div className="toggler-wrapper"></div>            
                        <Logo big/>           
                        <Navigation sideDrawerToggle={props.sideDrawerToggle} />        
                    </div>
            </CSSTransition>
        </>
    )
};

export default SideDrawer
