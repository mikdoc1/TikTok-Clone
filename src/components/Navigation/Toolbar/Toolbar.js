import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Logo from '../../Logo/Logo';
import Toggler from '../../UI/SidebarToggler';
import { NavLink, useLocation } from 'react-router-dom';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';




const Toolbar = (props) => {
    const linkRef1 = useRef(null);
    const linkRef2 = useRef(null);
    const {pathname} = useLocation();
    
    const mouseEnter = (e) => {
       if(e.target.pathname === '/trending') {
            linkRef1.current.classList.add('menu-list__link_active');
            linkRef2.current.classList.remove('menu-list__link_active');
       } else {
            linkRef1.current.classList.remove('menu-list__link_active');
            linkRef2.current.classList.add('menu-list__link_active');
       }
    }
    const mouseLeave = (e) => {
        if(pathname === '/trending') {
            linkRef1.current.classList.add('menu-list__link_active');
            linkRef2.current.classList.remove('menu-list__link_active');
       } else {
            linkRef1.current.classList.remove('menu-list__link_active');
            linkRef2.current.classList.add('menu-list__link_active');
       }
    }
    
    let menu = (
        <div className="menu-wrapper">
            <ul className="menu-list">
                <li className="menu-list__item">
                    <NavLink    ref={linkRef1} 
                                className="menu-list__link" 
                                activeClassName='menu-list__link_active' 
                                onMouseEnter={(e) => mouseEnter(e)} 
                                onMouseLeave={(e) => mouseLeave(e)}
                                to="/trending">Trending</NavLink>
                </li>
                <li className="menu-list__item">
                    <NavLink    ref={linkRef2} 
                                className="menu-list__link" 
                                activeClassName='menu-list__link_active' 
                                onMouseEnter={(e) => mouseEnter(e)} 
                                onMouseLeave={(e) => mouseLeave(e)}
                                to="/discover">Discover</NavLink>
                </li>
            </ul>
        </div> 
    );

    menu = pathname === '/' ? null : menu;
    let headerStyle = null;


    return (
        <>
            {(!props.isUserPlayerOpen || !props.isTrendingPlayerOpen)  
                                &&  <div className="header"> 
                                        <header className="header__content"> 
                                            <div className="hamburger-wrapper">
                                                <div className="hamburger-menu-wrapper">
                                                    <Toggler    isOpen={props.isOpen} 
                                                                openSidebar={props.openSidebar} 
                                                                closeSidebar={props.closeSidebar}/>
                                                </div>
                                                <div className="logo-container">
                                                    <Logo   pathname={pathname} 
                                                            closeSidebar={props.closeSidebar}/> 
                                                </div>
                                            </div>
                                            {menu}
                                            <Button pathname={pathname}/>
                                        </header>
                                        <SideDrawer isOpen={props.isOpen} 
                                                    openSidebar={props.openSidebar}
                                                    closeSidebar={props.closeSidebar}/>
                                    </div>

            }
            <div className="spacer"></div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isUserPlayerOpen: state.profile.isPlayerOpen,
        isTrendingPlayerOpen: state.trending.isPlayerOpen,
    }
}

export default connect(mapStateToProps)(Toolbar);