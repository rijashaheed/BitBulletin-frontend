import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp4AnF6lNrNSFdgLYJp94dLK6c1i_fcm8",
  authDomain: "bitbulletin-ab2a1.firebaseapp.com",
  projectId: "bitbulletin-ab2a1",
  storageBucket: "bitbulletin-ab2a1.appspot.com",
  messagingSenderId: "869787005198",
  appId: "1:869787005198:web:aa2eadfc2da263c5bf675f",
  measurementId: "G-MBC7TXR0SC"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);