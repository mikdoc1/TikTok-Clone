import React from 'react';
import Images from './UI/Images';
import Footer from './Footer/Footer';



const Main = () => {  
    return (
        <>
            <div className="content">
                <div className="main-text ">
                    <h1 className="title-largest">Make Your Day</h1>
                    <h1 className="title-small">Real People. Real Pictures.</h1>
                </div>       
                <div className="images-container">
                    <Images />
                </div>  
            </div>
            <div className="footer">
                <Footer />
            </div> 
        </>
    )
};

export default Main