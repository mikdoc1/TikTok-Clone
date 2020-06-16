import React from 'react';
import { Link } from 'react-router-dom';


const FooterContent = () => {

    return (
        <React.Fragment>
            <div className="white-logo-container">
                <img className="white-logo" src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg" alt="logo"/>
                <img className="white-logo-text" src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg" alt="text"/>
            </div>
            <div className="footer-content__column">
                <h2 className="title-smallest title-smallest_white">Company</h2>
                <h3><Link to="#" className="title-medium">About TikTok</Link></h3>
                <h3><Link to="#" className="title-medium">Newsroom</Link></h3>
                <h3><Link to="#" className="title-medium">Contact</Link></h3>
                <h3><Link to="#" className="title-medium">Careers</Link></h3>
                <h3><Link to="#" className="title-medium">ByteDance</Link></h3>
            </div>
            <div className="footer-content__column">
                <h2 className="title-smallest title-smallest_white">Programs</h2>
                <h3><Link to="#" className="title-medium">TikTok for Good</Link></h3>
                <h3><Link to="#" className="title-medium">TikTok for Developers</Link></h3>
                <h3><Link to="#" className="title-medium">Advertise on TikTok</Link></h3>
            </div>
            <div className="footer-content__column">
                <h2 className="title-smallest title-smallest_white">Support</h2>
                <h3><Link to="#" className="title-medium">Help Center</Link></h3>
                <h3><Link to="#" className="title-medium">Safety Center</Link></h3>
                <h3><Link to="#" className="title-medium">Community Guidelines</Link></h3>
            </div>
            <div className="footer-content__column">
                <h2 className="title-smallest title-smallest_white">Legal</h2>
                <h3><Link to="#" className="title-medium">Intellectual Property Policy</Link></h3>
                <h3><Link to="#" className="title-medium">Law Enforcement</Link></h3>
                <h3><Link to="#" className="title-medium">Privacy Policy</Link></h3>
                <h3><Link to="#" className="title-medium">Terms of Service</Link></h3>
            </div>


        </React.Fragment>
    )

};

export default FooterContent;