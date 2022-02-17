


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyArkN3o_VY3AZJam-Irat65BJBTP1Nv_hg",
    authDomain: "shoppinglist-677c0.firebaseapp.com",
    databaseURL: "https://shoppinglist-677c0-default-rtdb.firebaseio.com",
    projectId: "shoppinglist-677c0",
    storageBucket: "shoppinglist-677c0.appspot.com",
    messagingSenderId: "97325349541",
    appId: "1:97325349541:web:835a45f01db61e59996b4c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();







// 1st get a live update listed of task from Firestore
// Write code in here ha

// Import the functions you need from the SDKs you need

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// // import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyArkN3o_VY3AZJam-Irat65BJBTP1Nv_hg",
//   authDomain: "shoppinglist-677c0.firebaseapp.com",
//   projectId: "shoppinglist-677c0",
//   storageBucket: "shoppinglist-677c0.appspot.com",
//   messagingSenderId: "97325349541",
//   appId: "1:97325349541:web:835a45f01db61e59996b4c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// var dbList = firebase.database().ref('shoppinglist');

// const dbShop = firestore.doc("list/shoplist");
// var newItem = document.querySelector('#newItem');
// const saveBtn = document.querySelector('#save-btn');
// const outputList = document.querySelector('#myList');

// saveBtn.addEventListener("click", function(){
//     const saveItem = newItem.value;
//     console.log("You just saved " + saveItem);
//     dbShop.set({
//         item: saveItem
//     }).then(function(){
//         console.log("Saved! ")
//     }).catch(function (error) {
//         console.log("Error", error)
//     })
//     newItem.value = " ";
// })



// on click of btn, 
// item in text field