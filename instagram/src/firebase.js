import "firebase/app";
//import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebase from 'firebase';

const firebaseConfig = {
  
    apiKey: "AIzaSyC2zouBFj6huq_BzgIc7Igvt55acCZGZys",
    authDomain: "instagram-86c6f.firebaseapp.com",
    projectId: "instagram-86c6f",
    storageBucket: "instagram-86c6f.appspot.com",
    messagingSenderId: "90680474886",
    appId: "1:90680474886:web:88b9ae8927ef24057eb287",
    measurementId: "G-CHNG26RS1T"
};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage };

