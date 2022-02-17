import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';

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
// db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);


try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }