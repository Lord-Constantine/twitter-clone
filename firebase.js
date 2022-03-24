import { initializeApp, getApp, getApps } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY6C-dnaEY70zvjNIx4Ucy9nyEclmozU4",
    authDomain: "twitter-clone-yt-639c1.firebaseapp.com",
    projectId: "twitter-clone-yt-639c1",
    storageBucket: "twitter-clone-yt-639c1.appspot.com",
    messagingSenderId: "1031191037250",
    appId: "1:1031191037250:web:936502ec4338c6abb974db",
    measurementId: "G-RM9HMGSJZ0"
  };

const app= !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage }; 