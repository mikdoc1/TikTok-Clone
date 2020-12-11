import React from 'react';
import { connect } from 'react-redux';
import { openSidebar, closeSidebar } from '../actions/sidebar';

import Toolbar from './Navigation/Toolbar/Toolbar';
import Modal from './Modal/Modal';

const Layout = (props) => {

    return (
    <> 
        <Modal /> 
        <Toolbar    isOpen={props.isOpen} 
                    openSidebar={props.onOpenSidebar}
                    closeSidebar={props.onCloseSidebar}/>
        <main className="content">
            {props.children}
        </main>
    </>
    )
};

const mapStateToProps = state => {
    return {
        isOpen: state.sidebar.isOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenSidebar: () => dispatch(openSidebar()),
        onCloseSidebar: () => dispatch(closeSidebar()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

