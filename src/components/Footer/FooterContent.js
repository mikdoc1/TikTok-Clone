import React from 'react';
import { Link } from 'react-router-dom';

const footerMenuItems = [
    {
        title: 'Company',
        sections: [
            'About TikTok',
            'Newsroom',
            'Contact',
            'Careers',
            'ByteDance'
        ] 
    },
    {
        title: 'Programs',
        sections: [
            'TikTok for Good',
            'TikTok for Developers',
            'Advertise on TikTok'
        ] 
    },
    {
        title: 'Support',
        sections: [
            'Help Center',
            'Safety Center',
            'Community Guidelines'
        ] 
    },
    {
        title: 'Legal',
        sections: [
            'Intellectual Property Policy',
            'Law Enforcement',
            'Privacy Policy',
            'Terms of Service'
        ]
    }
]

const FooterContent = () => {
    return (
        <React.Fragment>
            <div className="white-logo-container">
                <img className="white-logo" src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg" alt="logo"/>
                <img className="white-logo-text" src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg" alt="text"/>
            </div>
            {footerMenuItems.map(item => {
                return (
                    <div className="footer-content__column" key={item.title}>
                        <h2 className="title-smallest title-smallest_white" style={{marginBottom: '.8rem'}}>{item.title}</h2>
                        {item.sections.map((section, index) => {
                            return (
                                <h3 key={index}>
                                    <Link to="#" className="title-medium">{section}</Link>
                                </h3>
                            )
                        })}
                    </div>
                )
            })}
        </React.Fragment>
    )

};

export default FooterContent;