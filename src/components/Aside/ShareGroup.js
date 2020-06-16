import React from 'react';

const ShareGroup = (props) => {
    
    return (
        <>
            <a className="share" href={props.link}>
                <img src={props.src} alt={props.alt}/>
            </a>
        </>
    )
}

export default ShareGroup;