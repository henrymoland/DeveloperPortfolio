import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "developer-blog-195d8.firebaseapp.com",
    databaseURL: "https://developer-blog-195d8.firebaseio.com",
    projectId: "developer-blog-195d8",
    storageBucket: "developer-blog-195d8.appspot.com",
    messagingSenderId: "352418477922",
    appId: "1:352418477922:web:91e60beb6aad1b5e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database().ref('/posts');
  export const storage = firebase.storage();