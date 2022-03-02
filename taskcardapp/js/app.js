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
const docRef = collection(db, "doditing");
const q = query(docRef);

//   GETS TODAYS DATE
const d = new Date();
    var h2 = document.createElement('h2');
    h2.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h2);



    // DOM LINKS

    const hidden = document.querySelector('.hidden');
    // const del = document.querySelector('.trash').innerHTML;


// SHOWS FULL CARD
const card = document.querySelector('#cardTop');
card.addEventListener('click', function(){
    if (hidden.style.display === "none") {
          hidden.style.display = "block";
    } else {
          hidden.style.display = "none";
    }
})

const addBtn = document.querySelector('#addBtn');
const addTitle = document.querySelector('#addTitle');
const addNote = document.querySelector('#addNote');
const title = document.querySelector('label');

const titleInput = document.querySelector('.titleInput');
const noteArea = document.querySelector('.noteArea');

// function addToFirebase(title,note){
//   db.collection('todolist').add({
//     title: title,
//     note: note,
//     active: true
//   })
//   .then((docRef)=>{
//     console.log('docRef.id');
//   })
//   .catch((error)=>{
//     console.log('try again', console.error);
//   })
// }


// ADD TASK TO FIREBASE
addBtn.addEventListener('click', function(){
  var title = addTitle.value;
  var note = addNote.value;
  setDoc(doc(docRef, title), {
    title: title,
    note: note,
    active: true
  })
  console.log('sent to firebase ');
  // title.innerText = addTitle.value;
  // titleInput.value = addTitle.value;
  // noteArea.innerText = addNote.value;
  //  addToFirebase(title, note);
})

function createCard(){
  var card = document.createElement('div');
      card.classList.add('card');
  var form = docment.createElement('div');
      form.classList.add('form-box');
  var title = document.createElement('input'); 
      title.classList.add('task-input');   
  card.appendChild(form);    
}