import React, { useContext } from 'react';
import SocialItem from '../SocialItem';
import { Link } from 'react-router-dom';
import { SignUpContext } from '../Form';
import { googleAuthProvider, facebookAuthProvider } from '../../../firebase/firebase';


const SignUpWithSocial = (props) => {
    const context = useContext(SignUpContext);
    
    return (
        <div className="login-form__body">
            <div className="login-form__body-top">
                <div className="login-form__text">
                    <h1 className="title-large">Sign up for TikTok</h1>
                    <p  className="title-smallest">Create a profile, follow other accounts, make your own videos, and more.}</p>
                </div>
                <div className="login-form__social">
                        <SocialItem login={context.secondPageHandler} text={'Use phone or email'} icon={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAllBMVEUAAAAAAAAQECAAAAAQGCAYGCAAAAAQFSUVFSUAAAAUGCQAAAATFiMWFiMAAAAVGCMAAAAVGCMAAAAAAAAUFyIAAAAWGCIAAAAWGCIWGCQAAAAVFyIVFyMAAAAVGCMWGCMAAAAWGCMAAAAUFyMWFyMAAAAVGCMAAAAVFyQWFyIAAAAWGCIWGCMAAAAVFyMWFyMAAAAWGCPb0C0DAAAAMHRSTlMAEBAgICAwMDBAQFBQUF9fYGBvcHB/f4CAgJCQkJ+fn6Cgr6+vv7/Pz8/f39/v7+9eL9sUAAABTElEQVRIx+1UXXfCIAyl1dYW99HV6XTTbU7bDSqs/f9/biTWI7UU2N48Z3ki4V5uEgKE/NvfLLzZV03D9vee+FuFPtrBi7JoNFv8Eu/BeEDYihKSbHFJHQTI/5Ac1xE6HgLRyUvcEjuFeDu7L13XYF/dI6kzJ8hBv8IL30kgTkKl10zIRLnfVkKpEMtu00or4RGODE/eGATt8xRKBWEtI2TKkZH95pY4pdhZilO7cg1TiRMky1LigrlfT6UPK4s83tv6jF+HXk8u2mI68pX6P+uE0vE1f0ujfMNFXYvPj3zkAU+LWrPizgGPO3AwblXJRd232TB+3uaRxwEhQZq3cnM7vki1+t9tjCnsiawbzDDJqbGbHPBxrw3AEIGBgOqxoXEQ3xgEIP5kkp6ZTwIBbi4OmvXci0IFA9eaQhW9qBgUGNjL+GVH/fau0X4AWpREL7/zaPUAAAAASUVORK5CYII='}/>
                        <SocialItem text={'Continue with VK'} icon={'//s16.tiktokcdn.com/falcon/fe_tiktok_common/svgs/vk_circle.358885f9.svg'}/>
                        <SocialItem login={props.login.bind(null, googleAuthProvider)} text={'Continue with Google'}  icon={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABQVBMVEUAAAAwn1DPQDDPQEDvrzAwl1Awn1BQcKfPODDPODjXODjXQDjvtygwn1BQcKrUOjXUQDUwm1Awn0wwn1BQcKfTPDTTQDjvsygwn0zSPTPWPTbWQDYunk5QcanXPjYwnU0wnVBQcKfUPTXstSgwnVDttCkun05QcKnXPjYunU4wnVBQcKfTPjbtsygun05QcKjWPjUunk5QcKbTPjXUPjXUPjfVPTXvtShBg4RQcKfUPjbttCgvnU/VPTbvtSnutSkvnk9QcKjWPTXvtikvnk80llxQcKnVPjbvtCrvtSovnk9QcKjVPjbWPjbvtSkvnk9QcKjUPjXUPjbvtSovnk8xm1UzmFo7jHA7n00/h3tMdZ1Oc6NQcKhTokeDqD6bqzqnrTfVPjbWRTXXsi7YTTTgcjDjgS7jsyvliC7spivvtSm8IqN4AAAAVHRSTlMAEBAQECAgICAgICAgMDAwMEBAQEBAQEBQUFBQX19fYGBgYGBwcH9/f4CAgICAj4+PkJCQkJCfn6CgoKCvr6+wv7+/v8/Pz8/Pz9/f39/f7+/v7++eU5EDAAABfUlEQVRIx+2VaVeCQBSGoUXbi8rKNivbtZKyzayQLAuxdSozWtA2+f8/oGFnYCCwr76fOPc8z5l7ZzkQRDMNpWUuXSiJolhi0xM+8BFWtORmpyMIrsRTSYmY8OOuzbMiPtMufMGFL7TihaD8smVvtqP9nZFohvfiB8whI0YxeevKE7zOZ6xE95YbH/+pqnzS5304keofMn/ok++RYD7huF0+hbgsSF/VlN8beqQIUt1cIDxsSx8inKvChVnZF2w5Q4Q7VTj2EIqIoPLSmocg/E/QWtr1LVz+PTQ6w4Eq1EijksjpuVaFHCIsKPxbeQVzRpqwiRTbIP79CsBVu4Of1Vqasl++2guAYRxCURPCaHn0vQyULNr4JQE3AgwDtKyT1vKGgO+IIChdANykURw6rWA3VQkNTIUeGwz1xmgOfj9hJ0CbQvP4DPkE7k2QebzxULGdgWlk8cb9nuvDW8UK8x5PNeQchKG8XzeVDYQrq8zQjLyhXJ6Okc0/eEP5BUsb8O2DtBFUAAAAAElFTkSuQmCC'}/>
                        <SocialItem login={props.login.bind(null, facebookAuthProvider)} text={'Continue with Facebook'} icon={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAY1BMVEUAAAAQcO8Yd+8Vde8Yd+8Xe/IWdu8WdvIYdvQYefIYdfIYeO8YePIXd/MXdvEYdvMYdfEYd/EXd/EXd/EYd/IYdvEXd/IXd/AYd/IXdvEXdvMXd/EYd/EYd/IXd/EXd/IYd/LEp1aBAAAAIHRSTlMAECAwQE9QUF9fYGBgb3B/gICPkJ+gr7C/z8/P39/v75wc1OgAAAFDSURBVDjLldXbeoMgDABgsKzrukPtogwrCu//lPWENSYgy1WV/6MhgBECh1SgrfPetQbOUqRCmcFtQp8T1JPoLiwtGDrNXlB7cT4Sjkx+84m4/cPu9IFF+soM97qqjLHh8WOtQ0dopUI5wypDTWoyq3rVPrwzsSQ2+7ZiP09AkqgEhw1+DHFi8TQ1ydiu8Lssa/yHZJv/Flvtt10yWSwpv5MBJUryrpwxHQBhYpisZcjvkY87ur44dsLnY49xMcZyp+X0AHFMb5tGw10aP9ACdRpvR42AJD7hTbkmMToMb0Kiqo2xXJPz+BslOdwsk1vn8fT/5OLxgkuXhy17FiN4/nJIm4MtV58YXj8lcIzvr9qbI6y3badJ4xa1oq2muN23LYhjoIfx0/K4/2LbVc1hiHXOorYY9/dkk1XQLPi3AbUbfAIyn5QR2fZs/wAAAABJRU5ErkJggg=='}/>
                        <SocialItem text={'Continue with Twitter'} icon={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAjVBMVEUAAABQn+9Qr+9Qp+9Qr+9Yp+9VqupVqu9Vr+9Uq+tUq+9Uq+9Tqe9TrOxWrO9Wru9VquxVqu9VrexVrO9XrO9Uq+1Wre9Uq+1Wq+1Wre9TrOtTrO1VrO1VrO9Vre1Vre9UrO1UrO1WrO1WrO9Vq+5UrO5Vq+5VrO5UrO5Vq+5VrO5Vq+5Vre5VrO5VrO5tmENLAAAALnRSTlMAEBAgICAwMDBAQE9QUF9fYGBgb29wf4CPj5CQn5+fn6Cvr6+wv7+/z8/P39/vvN/GWQAAASZJREFUGBntwe1agjAABeDjgAwyMgimWWIfhjl37v/yMkWBbYDP41/fFzfXEnmpqcvUx2VeNCs59kT+hMp0Bod31j6jtKTyUNkwh2VOU4yKIJnDMKVJQsQ4iLg3Q9uGhjIt6eEg4r+dj4Z7OmQ4CniUo5bRJnGiebSLcSJp0gnOFjzZvfk4kDQVqIVs+H2djIGMpgINCxqUpqnAmYDYcpDEWVSmky2HZDgLeIkH1DQvMEZNcphGg9Ac9I2mhINitEgOGaEtUOxVwBJu2cODQSv2KWCS7OXBJBR7SNgCxU4KLsGKHZQHt8cPOoXoltCWoJOY06ITdBG5pkWN4eY/LzVtXyPYwh+l6KRCuE3XdFApugUrxRa9DDHgbrpYK01SbZZpiJtr/AGjfKt+blsT0gAAAABJRU5ErkJggg=='}/>
                </div>
            </div>
            <p className="term-text">By continuing, you agree to TikTok’s <strong>Terms of Use</strong> and confirm that you have read TikTok’s <strong>Privacy Policy</strong></p>
            <div className="login-form__body-bottom">
                    <p>Already have an account?</p>
                    &nbsp;
                    <button className="sign-up-button" onClick={() => context.loginSignUpToggler()}>Log in</button>
            </div>
            <Link to="#" className="help">
                <span className="help__icon"></span>
                <span className="help__text">Feedback and help</span>
            </Link>
            <div className="tiktok-bg-logo tiktok-bg-logo_1"></div>
            <div className="tiktok-bg-logo tiktok-bg-logo_2"></div>
        </div>
    )
}

export default SignUpWithSocial;