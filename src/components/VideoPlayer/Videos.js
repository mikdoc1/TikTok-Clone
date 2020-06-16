import React from 'react';
import { history } from '../../index';

const Videos = (props) => {

    let styles = {
        display: 'grid',
        gridTemplateRows: "repeat(auto-fit, 400px)",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gridGap: "20px",
        gridAutoRows: "400px"
    };

    if(history.location.pathname.includes('profile')) {
        styles = {
            display: 'grid',
            gridTemplateRows: "repeat(auto-fit, 260px)",
            gridTemplateColumns: "repeat(auto-fit, minmax(196px, 1fr))",
            gridGap: "2px",
            gridAutoRows: "260px"
        }
    }

    return (
        <div style={styles}>
            {props.content.map((item, index) => {
                return (
                    <div    className="video-wrapper" 
                            style={{backgroundImage: `url(${item.imgUrl})`, backgroundSize: 'cover', backgroundPosition: '0 -40px', cursor: 'pointer'}}
                            onMouseEnter={(e) => props.mouseEnterHandler(e, item.videoUrl)}  
                            onClick={(e) => props.openVideoPlayer(e, index, props.content)}  
                            key={index}>
                        {props.video === item.videoUrl && <video className="video" autoPlay muted loop src={item.videoUrl}/>}
                    </div>
                )
            })}
        </div>
    )

}

export default Videos;