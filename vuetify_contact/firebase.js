const firebaseConfig = {
    apiKey: "AIzaSyC3Ij4reGVts5e2D6HAYOhpCJgdd76teHM", 
    authDomain: "listapproot.firebaseapp.com",
    projectId: "listapproot",
    storageBucket: "listapproot.appspot.com",
    messagingSenderId: "398474013698",
    appId: "1:398474013698:web:a332fd275f59da2a2b8b1b"
};   
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// var contactRef = db.collection("contacts");