import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js"
import { getFirestore,
        collection,
        doc,
        deleteDoc,
        addDoc,
        getDoc,
        getDocs, updateDoc,
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
// const q = query(docRef);
const q = query(docRef);

//   GETS TODAYS DATE
const d = new Date();
    var h2 = document.createElement('h2');
    h2.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h2);



    // DOM LINKS

    const hidden = document.querySelector('.hidden');
    


// SHOWS FULL CARD
const card = document.querySelector('#cardTop');
card.addEventListener('click', function(){
    if (hidden.style.display === "none") {
          hidden.style.display = "block";
    } else {
          hidden.style.display = "none";
    }
})
const saveBtn = document.querySelector('#saveBtn');
const addBtn = document.querySelector('#addBtn');
const addTitle = document.querySelector('#addTitle');
const addNote = document.querySelector('#addNote');
const title = document.querySelector('label');

const titleInput = document.querySelector('.titleInput');
const noteArea = document.querySelector('.noteArea');

//UPDATE THIS TASK AND SENDS TO FIREBASE
saveBtn.addEventListener('click', function(){})


// CREATE NEW TASK AND SEND TO FIREBASE
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


// CREATE CARD FOR TASK
function createCard(){
  var card = document.createElement('div');
      card.classList.add('card');
  var form = docment.createElement('div');
      form.classList.add('form-box');
  var title = document.createElement('input'); 
      title.classList.add('task-input'); 
      title.setAttribute('type', 'checkbox');  
  card.appendChild(form);    
}


// var card = document.createElement('div');
//       card.classList.add('card');
//   var form = docment.createElement('div');
//       form.classList.add('form-box');
//   var check = document.createElement('input'); 
//       check.classList.add('task-input'); 
//       check.setAttribute('type', 'checkbox'); 
//   const taskarea = document.querySelector('#taskarea');
//   taskarea.appendChild(card).appendChild(form).appendChild(check);
//   card.appendChild(form);




// CREATE TASK OBJECT
class Task {
  constructor(title, note, active){
    this.title = title;
    this.note = note;
    this.active = true
  }
}

// LISTEN TO MUP
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  // outputList.innerHTML = " ";
  const doditing = [];
  querySnapshot.forEach((doc) => {
    // doditing.push(doc.data());
    var taskObj = doc.data(); 
    var titletask = taskObj.title;
    var notetask = taskObj.note;
    var activetask = taskObj.active;
    console.log("Title: " + titletask);
    console.log("Note: " + notetask);
    console.log("Completed: " + activetask);
    

    // console.log("Here the Array ", doditing);
    
    // var listName = doc.id;
    // let newLi = document.createElement('li');
    // newLi.classList.add('item');
    // newLi.innerHTML = listName;
    // outputList.appendChild(newLi).innerHTML = doc.id;
    // outputList.appendChild(newLi);


  });


});