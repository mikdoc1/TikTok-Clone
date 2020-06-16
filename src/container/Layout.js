import React, { useState } from 'react';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Modal from '../components/Modal/Modal';

const Layout = (props) => {
    const [showSideDrawer, setState] = useState(false);

    const sideDrawerToggle = () => {
        setState(showSideDrawer => !showSideDrawer)
    };
 

    return (
    <>
        <Modal />
        <Toolbar isOpen={showSideDrawer} sideDrawerToggle={sideDrawerToggle}/>
        <SideDrawer isOpen={showSideDrawer}
                    sideDrawerToggle={sideDrawerToggle}/>
        <main className="content">
            {props.children}
        </main>
    </>
    )
};

export default Layout