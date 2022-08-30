import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsTGMrGXDOD8Mi5zketBMgrUXYrnaA5w4",
    authDomain: "chat-app-ba2f9.firebaseapp.com",
    projectId: "chat-app-ba2f9",
    storageBucket: "chat-app-ba2f9.appspot.com",
    messagingSenderId: "269715322427",
    appId: "1:269715322427:web:e68a56361d002be2f08e1e",
    measurementId: "G-B1RPR2Y15C"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

export default firebase;