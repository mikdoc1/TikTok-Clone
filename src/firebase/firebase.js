import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDcU9TsDeOG85yUoipKVukRMmkXmqQOT9M",
  authDomain: "tiktok-3a2f0.firebaseapp.com",
  databaseURL: "https://tiktok-3a2f0.firebaseio.com",
  projectId: "tiktok-3a2f0",
  storageBucket: "tiktok-3a2f0.appspot.com",
  messagingSenderId: "1008991580966",
  appId: "1:1008991580966:web:5ae9cac202b9a4c37307e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export { firebase, db, googleAuthProvider, facebookAuthProvider} 

















        

 




 
