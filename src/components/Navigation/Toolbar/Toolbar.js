import React, { useRef } from 'react';
import Button from '../../UI/Button';
import Logo from '../../Logo/Logo';
import Toggler from '../../UI/SidebarToggler';
import { NavLink, useLocation } from 'react-router-dom';




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

    return (
        <>
            <header className={props.isOpen ? "header header_fixed" : "header"}> 
                <div className="logo-toggler-wrapper">
                    <Toggler sideDrawerToggle={props.sideDrawerToggle} isOpen={props.isOpen}/>
                    <Logo />
                </div>
                {menu}
                <Button pathname={pathname}/>
            </header>
            {!props.isOpen && <div className="spacer"></div>}
        </>
    )
}



export default Toolbar;