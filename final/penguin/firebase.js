
  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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

  const auth = firebase.auth();

  var db = firebase.firestore();
  const feeds = db.collection('feeds'); 
  const messages = db.collection('messages') 
  const users = db.collection('users')

  auth.onAuthStateChanged((user) => {
    console.log(user)
    
    if (user) {
      console.log(' logged in: ', user.uid)
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user;
      // ...
    } else {
      // User is signed out
      console.log('user looged out')
      // ...
    }
  });

  // logout
  // logout() {
  //   auth.signOut().then(() => {
  //     console.log('Sign out successful!')
  //   });
  // };