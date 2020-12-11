// import React, { useState } from 'react';

// let prevAudio = null;
// let prevAudioUrl = null;
// // const audio = {};

// const withAudioPlayer = (WrappedComponent) => {

//     return props => {
//         const [speed, setSpeed] = useState(0);
//         // const [playInfo, setPlayInfo] = useState(() => {
//         //     audio[props.musicData.audioUrl] = {
//         //         isPaused: true,
//         //         isPlaying: false
//         //     }
//         //     return audio
//         // });



//         const playerHandler = (e, audioUrl, audioRef) => { 
    
//             const currentAudio = audioRef.current;
    
//             if(currentAudio.paused) {
//                 currentAudio.play();
//             } else {
//                 currentAudio.pause();
//             }
    
//             if(prevAudio !== currentAudio && prevAudio !== null){
//                 prevAudio.pause();
//             } 
    
//             prevAudio = currentAudio; 
//             prevAudioUrl = audioUrl;
//             setSpeed((currentAudio.duration * 10 / 3.45));
//         };
    
//         const musicEnd = (audioUrl) => {
//             setPlayInfo(playInfo => ({
//                 ...playInfo,
//                 [audioUrl]: {
//                     isPaused: true,
//                     isPlaying: false
//                 }
//             }))
//         };
    
//         const musicPaused = (e, audioUrl) => {
//             if(!e.target.ended) {
//                 setPlayInfo(playInfo => ({
//                     ...playInfo,
//                     [audioUrl]: {
//                         isPaused: true,
//                         isPlaying: true
//                     }
//                 }))
//             }
//         }
    
//         const musicStartPlay = (e, audioUrl) => {
//             setPlayInfo(playInfo => ({
//                 ...playInfo,
//                 [audioUrl]: {
//                     isPaused: false,
//                     isPlaying: true
//                 }
//             }));
//         }

//         return (
//         <>
//             {isMusicUpdated &&  
//             <WrappedComponent   musicStartPlay={musicStartPlay}
//                                 musicPaused={musicPaused}
//                                 musicEnd={musicEnd}
//                                 playerHandler={playerHandler}
//                                 playInfo={playInfo}
//                                 speed={speed}
//                                 setUpdateMusic={setUpdateMusic}
//                                 isMusicUpdated={isMusicUpdated}
//                                 audioRef
//                                 {...props}/>}
//         </>

//         )
//     }
// }

// export default withAudioPlayer;