import React from 'react';
import BigLogo from '../../Logo/BigLogo';
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
                        <div className="big-logo-container">
                            <BigLogo  closeSidebar={props.closeSidebar}/>    
                        </div>          
                        <Navigation  closeSidebar={props.closeSidebar}/>        
                    </div>
            </CSSTransition>
        </>
    )
};

export default SideDrawer
