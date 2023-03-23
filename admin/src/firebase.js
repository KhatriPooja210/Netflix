import firebase from 'firebase/app';
import 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyDNjeiiwQkT3sXbw3-gF4Bkm8rLHYRxZzQ",
    authDomain: "netflix-a8d29.firebaseapp.com",
    projectId: "netflix-a8d29",
    storageBucket: "netflix-a8d29.appspot.com",
    messagingSenderId: "424548589758",
    appId: "1:424548589758:web:3dbe44cca0c1ad3edc7eef",
    measurementId: "G-W7B3Z7KM7Q"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
