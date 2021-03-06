import React, { useState, useEffect } from 'react';
import ShareGroup from './ShareGroup';
import RecommendListItem from './RecommendListItem';
import SelectCountryCode from '../UI/SelectCountryCode';
import { db } from '../../firebase/firebase';

const shareGroup = [
  {
    name: 'fb',
    icon: 'https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/facebook-e57973bad0d38696e66f7e406061c2d7.svg',
    link: 'https://www.facebook.com/login',
  },
  {
    name: 'pin',
    icon: 'https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/pinterest-111d7b07a418e41e4e3c3b9271eb739b.svg',
    link:
      'https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.tiktok.com%2Ftrending%3Flang%3Den&media=https%3A%2F%2Fp16.muscdn.com%2Fobj%2Fmusically-maliva-obj%2F65299d601fce6efe7a1dd7535de1503e&desc=https%3A%2F%2Fwww.tiktok.com%2Ftrending%3Flang%3Den',
  },
  {
    name: 'twitter',
    icon: 'https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/twitter-f974686c9caf32edc64461df46aa2383.svg',
    link:
      'https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2Ftrending%3Flang%3Den&text=https%3A%2F%2Fwww.tiktok.com%2Ftrending%3Flang%3Den',
  },
];

// const discoverList = [
//     {
//         avatar: "https://p16-sg.muscdn.com/aweme/200x200/tos-alisg-i-0000/7653996fc55a4aeb9d81f2680fa21fb0.jpeg",
//         title: "Hypnodancer",
//         subtitle: "1423 videos",
//     },
//     {
//         avatar: "https://p16-sg.muscdn.com/aweme/200x200/tos-alisg-i-0000/4150de8f2ebd494a8191887abcef867b.jpeg",
//         title: "Skechers",
//         subtitle: "2.7M videos",
//     },
//     {
//         avatar: "https://p16-sg.muscdn.com/aweme/200x200/tos-alisg-i-0000/7430b40854434b41acc0088c0b6d2e2e.jpeg",
//         title: "Savage",
//         subtitle: "23.2M videos",
//     },
//     {
//         avatar: "https://p16-sg.muscdn.com/aweme/200x200/tos-alisg-i-0000/2b87796565fc4abbaa5ac09a6988f4d8.jpeg",
//         title: "Astronomia",
//         subtitle: "1.2M videos",
//     }
// ];

const Aside = () => {
  const [users, setUsers] = useState([]);
  const [discover, setDiscvoer] = useState({
    music: [],
    tags: [],
  });

  useEffect(() => {
    db.collection('users')
      .get()
      .then((users) => {
        users.forEach((user) => {
          setUsers((users) => [
            ...users,
            {
              avatar: user.data().profileData.avatar,
              ...user.data().personalData,
            },
          ]);
        });
      });
    db.collection('discover')
      .doc('explore')
      .get()
      .then((musics) => {
        musics
          .data()
          .exploreInfos.slice(0, 3)
          .forEach((music) => {
            setDiscvoer((discover) => ({
              ...discover,
              music: [
                ...discover.music,
                {
                  title: music.title,
                  subtitle: music.subtitle,
                  avatar: music.logo,
                },
              ],
            }));
          });
      });
    db.collection('discover')
      .doc('exploreTags')
      .get()
      .then((tags) => {
        tags
          .data()
          .exploreInfos.slice(0, 3)
          .forEach((tag) => {
            setDiscvoer((discover) => ({
              ...discover,
              tags: [
                ...discover.tags,
                {
                  title: tag.title,
                  subtitle: tag.subtitle,
                  avatar: tag.logo,
                },
              ],
            }));
          });
      });
  }, []);

  return (
    <div className="aside__recommendation">
      <div className="share-group">
        {shareGroup.map((item) => {
          return <ShareGroup src={item.icon} link={item.link} alt={item.name} key={item.name} />;
        })}
      </div>
      <div className="recommend-card" style={{ margin: '4rem 0' }}>
        <h3 className="title-small_bold">Suggested accounts</h3>
        <ul className="recommend-list">
          {users.map((user) => {
            return (
              <RecommendListItem
                link={`/profile/${user.username}`}
                src={user.avatar}
                title={user.name}
                subtitle={user.username}
                key={user.username}
              >
                <button className="button-transparent">Follow</button>
              </RecommendListItem>
            );
          })}
        </ul>
      </div>
      <div className="recommend-card">
        <h3 className="title-small_bold">Discover</h3>

        <ul className="recommend-list">
          {discover.music.map((item) => {
            return (
              <RecommendListItem
                link={`/music/${item.title.replace(/\s/g, '-')}`}
                src={item.avatar}
                title={item.title}
                subtitle={item.subtitle}
                key={item.subtitle}
              >
                <img
                  width="15"
                  height="15"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_arrow-right.svg/32px-Antu_arrow-right.svg.png"
                  alt="arrow"
                />
              </RecommendListItem>
            );
          })}
          {discover.tags.map((tag) => {
            return (
              <RecommendListItem
                link={`/tag/${tag.title.substring(1)}`}
                src={tag.avatar}
                title={tag.title}
                subtitle={tag.subtitle}
                key={tag.subtitle}
              >
                <img
                  width="15"
                  height="15"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_arrow-right.svg/32px-Antu_arrow-right.svg.png"
                  alt="arrow"
                />
              </RecommendListItem>
            );
          })}
        </ul>
      </div>
      <form className="form form-trending">
        <h2 className="title-small form-trending__title">Text yourself a link to download TikTok</h2>
        <div className="form_content">
          <SelectCountryCode />
          <input className="input form-trending__input" placeholder="Phone number" />
          <button className="button button-wrapper button_footer button-wrapper_footer">Send</button>
        </div>
        <p className="form_text form-trending__text">
          By clicking the "send" button, you confirm that you agree to our <u>Terms of Use</u> and acknowledge you have
          read and understood our <u>Privacy Policy</u>
        </p>
      </form>
      <div className="download-wrapper" style={{ textAlign: 'left' }}>
        <div className="download-links">
          <a href="https://apps.apple.com/US/app/id835599320?mt=8" target="_blank" rel="noopener noreferrer">
            <img className="store-logo" width="148" height="44" src="/picture/apple.png" alt="apple store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="store-logo" width="148" height="44" src="/picture/google.png" alt="apple store" />
          </a>
          <a href="https://www.amazon.com/dp/B0117U0G3M/?af_adset=direct" target="_blank" rel="noopener noreferrer">
            <img className="store-logo" width="148" height="44" src="/picture/amazon.png" alt="apple store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
