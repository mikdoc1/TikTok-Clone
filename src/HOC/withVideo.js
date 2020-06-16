import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase/firebase';



const withVideo = (WrappedComponent) => {
    return (props) => {
        const [isUpdate, setUpdate] = useState(true);
        const [video, setVideo ] = useState('');
        const [content, setContent ] = useState([]);
        // const videosURL = new Set();
        
        useEffect(() => {
            db.collection(props.collection).doc(props.doc).get()
                .then((doc) => {
                    setContent(content => [
                        ...content,
                        ...doc.data()[props.field].slice(content.length, content.length + 6) 
                    ])
                    // doc.data()[props.field].map(item => videosURL.add(item.videoUrl))
                }).then(() => {
                    setUpdate(false)
                })
        }, [isUpdate, props.collection, props.field, props.doc]);
    
        const scrollHandler = useCallback(() => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setUpdate(true)
            }
        }, []);
    
        useEffect(() => {
            window.addEventListener('scroll' , scrollHandler)
            return () => {
                window.removeEventListener('scroll', scrollHandler)
            }
        }, [scrollHandler])
    
        const mouseEnterHandler = (e, url) => {
            setVideo(url)
        }

        return (
            <WrappedComponent  content={content}
                               mouseEnterHandler={mouseEnterHandler}
                               video={video}
                               {...props}/>
        )
    }
}

export default withVideo 