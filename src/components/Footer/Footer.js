import React from 'react';
import FooterTop from './FooterTop';
import FooterContent from './FooterContent';
import FooterBottom from './FooterBottom';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="download-container">
                <FooterTop />
            </div>
            <div className="footer-content-wrapper">
                <FooterContent />
            </div>
            <div className="footer-bottom-wrapper">
                <FooterBottom />
            </div>
        </div>
    )
}

export default Footer