import React from 'react';
import { Link } from 'react-router-dom';

const BigLogo = (props) => {
    return (
        <Link   to='/' 
                onClick={() => props.closeSidebar()} 
                className='big-logo'>
            <img className="big-logo-img" alt="logo" src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg"/>
            <img className="big-logo-text" alt="tiktok" src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg"/>
        </Link>
    )
}

export default BigLogo;