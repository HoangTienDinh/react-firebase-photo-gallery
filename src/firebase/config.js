import * as firebase from "firebase/app";
// storage to store images
import "firebase/storage";
// firestore to store DB
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAVrVYO4aJD-KOMuINo30au2gquk-sSKww",
  authDomain: "react-firebase-photo-gal-44be6.firebaseapp.com",
  databaseURL: "https://react-firebase-photo-gal-44be6.firebaseio.com",
  projectId: "react-firebase-photo-gal-44be6",
  storageBucket: "react-firebase-photo-gal-44be6.appspot.com",
  messagingSenderId: "131480661580",
  appId: "1:131480661580:web:f4418b46adb70a9f524ee9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
