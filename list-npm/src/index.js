import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js";



const firebaseApp = initializeApp({
    apiKey: "AIzaSyArkN3o_VY3AZJam-Irat65BJBTP1Nv_hg",
    authDomain: "shoppinglist-677c0.firebaseapp.com",
    databaseURL: "https://shoppinglist-677c0-default-rtdb.firebaseio.com",
    projectId: "shoppinglist-677c0",
    storageBucket: "shoppinglist-677c0.appspot.com",
    messagingSenderId: "97325349541",
    appId: "1:97325349541:web:835a45f01db61e59996b4c"
});
const db = getFirestore(firebaseApp);

