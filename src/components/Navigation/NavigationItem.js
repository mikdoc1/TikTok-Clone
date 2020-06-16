import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <li className="nav-list__item ">
            <Link className="nav-link" to={props.link}
            onClick={() => props.sideDrawerToggle()}>{props.children}</Link>
        </li>
    )
};

export default NavigationItem