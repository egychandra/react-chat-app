import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyAJJCy94ueB6uJfWtj4kOTbukzG1dOBxyw",
  authDomain: "react-chat-app-2bf76.firebaseapp.com",
  databaseURL: "https://react-chat-app-2bf76.firebaseio.com",
  projectId: "react-chat-app-2bf76",
  storageBucket: "react-chat-app-2bf76.appspot.com",
  messagingSenderId: "195346177260",
  appId: "1:195346177260:web:4a93ef601f7afa3f6259c9",
  measurementId: "G-F4NW87YCDF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
