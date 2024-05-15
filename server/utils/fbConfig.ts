import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCwdfjqqlyN_c_HMg-UkAGzYGl7S2GTgCo',
  authDomain: 'thimas-c0a08.firebaseapp.com',
  projectId: 'thimas-c0a08',
  storageBucket: 'thimas-c0a08.appspot.com',
  messagingSenderId: '618573198674',
  appId: '1:618573198674:web:56892deae2fc2c8434b68b',
  measurementId: 'G-L8YEW646ZN',
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
