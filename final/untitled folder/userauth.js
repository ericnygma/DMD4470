// import firebase from "firebase/app";
// import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDuAT2UWqLS-yfv_te2cwDvYt0q6d8xzH8",
    authDomain: "penguin-90c73.firebaseapp.com",
    projectId: "penguin-90c73",
    storageBucket: "penguin-90c73.appspot.com",
    messagingSenderId: "932014378832",
    appId: "1:932014378832:web:c648f929e424a0a10c6655"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

const db = firebase.firestore();

// db.setting({ timestampsInSnapshot:true });