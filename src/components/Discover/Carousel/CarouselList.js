import React from 'react';
import CarouselListItem from './CarouselListItem';

const list = [
    {
        title: 'John Lock',
        subtitle: '@johny',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1654267174597637~c5_720x720.jpeg',
        followers: '245K'
    },
    {
        title: 'Kate Austin',
        subtitle: '@kitty',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/fa1b9299af7672ab58d0ad882f33dcd0~c5_720x720.jpeg',
        followers: '1.2M'
    },
    {
        title: 'Sayid Jarrah',
        subtitle: '@sayid',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1663647648185349~c5_720x720.jpeg',
        followers: '121K'
    },
    {
        title: 'Jack Shephard',
        subtitle: '@jacky',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1657356751594502~c5_720x720.jpeg',
        followers: '753K'
    },
    {
        title: 'Sawyer',
        subtitle: '@laFleur',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1660804562749445~c5_720x720.jpeg',
        followers: '843K'
    },
    {
        title: 'Hugo Reyes',
        subtitle: '@huge',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1649076556162054~c5_720x720.jpeg',
        followers: '125K'
    },
    {
        title: 'Charlie',
        subtitle: '@charlie',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1664968692211717~c5_720x720.jpeg',
        followers: '535K'
    },
    {
        title: 'Julia',
        subtitle: '@julia',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665309829781510~c5_720x720.jpeg',
        followers: '115K'
    },
    {
        title: 'Clare',
        subtitle: '@clare',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1655585060743173~c5_720x720.jpeg',
        followers: '25K'
    },
    {
        title: 'Desmond Hume',
        subtitle: '@desmond',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/b072b20f9622538b774ef1b91f3a923b~c5_720x720.jpeg',
        followers: '344K'
    },
    {
        title: 'Shanon',
        subtitle: '@shanon',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665305410619397~c5_720x720.jpeg',
        followers: '225K'
    },
    {
        title: 'Ben Linus',
        subtitle: '@ben',
        img: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1664700915772421~c5_720x720.jpeg',
        followers: '43K'
    }
];

const CarouselList = (props) => {
    return (
        <ul id="carousel-list" style={props.styles} className="carousel-list">
            {list.map(({title, subtitle, img, followers}) => {
                return <CarouselListItem    title={title}
                                            subtitle={subtitle}
                                            img={img}
                                            followers={followers}
                                            key={title}/>
            })}
        </ul>
    )
};

export default CarouselList