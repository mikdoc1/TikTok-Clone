import React from 'react';
import NavigationItem from './NavigationItem';
import { v4 as uuidv4 } from 'uuid';

const navLists = [
    [
        {
            link: '/trending',
            name: 'Trending'
        },
        {
            link: '/discover',
            name: 'Discover'
        },
    ],

    'Company',

    [
        {  
            link: '/about',
            name: 'About TikTok'
        },
        {
            link: '/news',
            name: 'Newsroom'
        },
        {
            link: '/contact',
            name: 'Contact'
        }
    ]
]

const Navigation = props => {
    return ( 
        <div className="nav-list-wrapper">
            {navLists.map(list => {
                return (
                    <ul className="nav-list" key={uuidv4()}>
                        {list === 'Company' 
                        ? <h3 className="title-smallest" style={{marginBottom: '1rem'}}>{list}</h3> 
                        : list.map(item => {
                            return (
                                <NavigationItem     closeSidebar={props.closeSidebar} 
                                                    link={item.link}
                                                    key={uuidv4()}>
                                    {item.name}
                                </NavigationItem>
                            )
                        })}   
                    </ul>
                )
            })}
    </div>  
    )
}

export default Navigation;