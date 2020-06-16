import React from 'react';
import { Link } from 'react-router-dom';

const CarouselListItem = (props) => (
    <>
        <li className="carousel-list__item">
            <Link to="#" className="carousel-list__link">
                <div className="user-carousel__avatar" style={{backgroundImage: `url(${props.img})`}}></div>         
                <h2 className="user-carousel__title">{props.title}</h2>
                <h3 className="user-carousel__subtitle title-smallest">{props.subtitle}</h3>
                <p className="user-carousel__followers">
                <strong className="user-carousel__followers-amount">{props.followers}</strong>
                <span className="user-carousel__followers-text">followers</span>
                </p>
            </Link>
        </li>
    </>
)

export default CarouselListItem;