import React from 'react';
import NavigationItem from './NavigationItem'

const Navigation = props => {
    return (
        <div className="nav-list-wrapper">
        <ul className="nav-list">
            <NavigationItem sideDrawerToggle={props.sideDrawerToggle} link="/trending">Trending</NavigationItem>
            <NavigationItem sideDrawerToggle={props.sideDrawerToggle} link="/discover">Discover</NavigationItem>
        </ul>
        <ul className="nav-list">
            <h3 className="title-smallest">Company</h3>
            <NavigationItem sideDrawerToggle={props.sideDrawerToggle} link="/about">About TikTok</NavigationItem>
            <NavigationItem sideDrawerToggle={props.sideDrawerToggle} link="/news">Newsroom</NavigationItem>
            <NavigationItem sideDrawerToggle={props.sideDrawerToggle} link="/contanct">Contact</NavigationItem>
        </ul>
    </div>  
    )
}

export default Navigation