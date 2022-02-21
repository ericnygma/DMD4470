import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js"
import { getFirestore, 
        collection, 
        doc,
        deleteDoc,
        addDoc,
        getDoc,
        getDocs,
        setDoc, query,
        orderBy, onSnapshot, where, serverTimestamp
        } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js"


const firebaseApp = initializeApp({
    apiKey: "AIzaSyC3Ij4reGVts5e2D6HAYOhpCJgdd76teHM",
    authDomain: "listapproot.firebaseapp.com",
    projectId: "listapproot",
    storageBucket: "listapproot.appspot.com",
    messagingSenderId: "398474013698",
    appId: "1:398474013698:web:a332fd275f59da2a2b8b1b"  
});

const db = getFirestore();
const listRef = collection(db, "todolist");
const q = query(listRef);

// await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     timestamp: serverTimestamp(),
//     regions: ["west_coast", "norcal"] }); 

var newItem = document.querySelector('#newItem');
const saveBtn = document.querySelector('#save-btn');
let outputList = document.querySelector('#myList');





saveBtn.addEventListener("click", function(){
    const saveItem = newItem.value;
    setDoc(doc(listRef, saveItem), {
        Qty: null,
        timestamp: serverTimestamp(),
    });
    console.log("Button press saved: " + saveItem);
    
})



// LISTEN TO MULTIPLE DOCUMENTS IN COLLECTION

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  outputList.innerHTML = " ";
  querySnapshot.forEach((doc) => {
    // listOfDoc.push(doc.id);
    // console.log("Here the 1st list ", doc.id);
    var listName = doc.id;
    let newLi = document.createElement('li');
    newLi.classList.add('item');
    newLi.innerHTML = listName;
    // outputList.appendChild(newLi).innerHTML = doc.id;
    outputList.appendChild(newLi);

    
  });

  
});



// var item = document.querySelector('.item').value



// delete a document in collection
// TODO: FUNCTION TO DELETE DOCUMENT WHEN ITEM IS CLICKED
await deleteDoc(doc(listRef, "bbq"));


 const item = document.querySelector(".item");
 item.addEventListener('click', function(doc){
     console.log(doc.id);
 })