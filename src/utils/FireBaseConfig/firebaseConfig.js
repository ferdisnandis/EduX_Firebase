import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCNhLtNaM64EQ26jySZer1HrRIuB0-7LHU",
    authDomain: "edux-firebase.firebaseapp.com",
    projectId: "edux-firebase",
    storageBucket: "edux-firebase.appspot.com",
    messagingSenderId: "617907323241",
    appId: "1:617907323241:web:0c455342164f5f0fbf7df8"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const db = app.firestore();

  export default firebaseConfig;