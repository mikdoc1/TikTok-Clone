import React from 'react';

import SelectCountryCode from '../UI/SelectCountryCode';

const FooterTop = () => {

    return (    
        <>
            <form className="form">
                <h2 className="title-small title-small_white">Text yourself a link to download TikTok</h2>
                <div className="form_content">
                    <SelectCountryCode />
                    <input type="text" className="input" placeholder="Phone number"/>
                    <button className="button button-wrapper button_footer button-wrapper_footer">Send</button>
                </div>
                <p className="form_text">By clicking the "send" button, you confirm that you agree to our <u>Terms of Use</u> and acknowledge you have read and understood our <u>Privacy Policy</u></p>
            </form>
            <div className="download-wrapper">
                <h2 className="title-small title-small_white">Download now</h2>s
                <div className="download-links">
                    <a href="https://apps.apple.com/US/app/id835599320?mt=8" target="_blank" rel="noopener noreferrer"><img className="store-logo" width="148" height="44" src="/picture/apple.png" alt="apple store"/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically" target="_blank" rel="noopener noreferrer"><img className="store-logo" width="148" height="44" src="/picture/google.png" alt="apple store"/></a>
                    <a href="https://www.amazon.com/dp/B0117U0G3M/?af_adset=direct" target="_blank" rel="noopener noreferrer"><img className="store-logo" width="148" height="44" src="/picture/amazon.png" alt="apple store"/></a>
                </div>
            </div>
        </>
    )
}

export default FooterTop;