import React from 'react';
import { Link } from 'react-router-dom';

const RecommendListItem = (props) => {
    return (
        <li style={{flex: "1 1 auto", listStyle: "none"}}>
            <div className="recommend-item">
                <Link to={props.link} className="recommend-link-avatar">
                    <div className="avatar-head">
                        <img className="avatar-img" src={props.src} alt="avatar"></img>
                    </div>
                </Link>
                <Link to={props.link} className="recommend-link-infos">
                    <h4 className="title-medium-big">{props.title}</h4>
                    <p className="title-smallest">{props.subtitle}</p>
                </Link>
                {props.children}
            </div>
        </li>
    )
} 

export default RecommendListItem;