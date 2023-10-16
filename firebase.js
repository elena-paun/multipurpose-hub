// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
// import { Firestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCEOml9X0XJA9hi-B9Tf95fIIB6S0-YHX8',
  authDomain: 'elenavalach-portfolio.firebaseapp.com',
  projectId: 'elenavalach-portfolio',
  storageBucket: 'elenavalach-portfolio.appspot.com',
  messagingSenderId: '619926832563',
  appId: '1:619926832563:web:a62d582d8d32de376ff7c6',
  measurementId: 'G-3QTWW57BB6',
};
export const app = initializeApp(firebaseConfig);

const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
initializeApp(firebaseConfig);
// export const db = new Firestore();

// export default db;
