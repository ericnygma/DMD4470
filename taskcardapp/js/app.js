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
    var h5 = document.createElement('h5');
    h5.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h5);



    // DOM LINKS

    // const hidden = document.querySelector('.hidden');
    


// CLICK EVENT LISTENER TO SHOWS FULL CARD
// const labelCard = document.querySelector('label');
// labelCard.addEventListener('click', function(){
//     if (hidden.style.display === "none") {
//           hidden.style.display = "block";
//     } else {
//           hidden.style.display = "none";
//     }
// })

const saveBtn = document.querySelector('.saveBtn');
const addBtn = document.querySelector('#addBtn');
const addTitle = document.querySelector('#addTitle');
const addNote = document.querySelector('#addNote');
const title = document.querySelector('label');

const titleInput = document.querySelector('.titleInput');
const noteArea = document.querySelector('.noteArea');

//UPDATE THIS TASK AND SENDS TO FIREBASE
// saveBtn.addEventListener('click', function(){
//   var title = addTitle.value;
//   var note = addNote.value;
//   setDoc(doc(docRef, title), {
//     title: title,
//     note: note,
//     active: true
//   })
//   console.log('sent to firebase ');
// })


// CREATE NEW TASK AND SEND TO FIREBASE
addBtn.addEventListener('click', function(){
  var title = addTitle.value;
  var note = addNote.value;
  setDoc(doc(docRef), {
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



// CREATE TASK OBJECT
class Task {
  constructor(title, note, active){
    this.title = title;
    this.note = note;
    this.active = true
  }
}

// GETTING LIVE UPADTES FROM FIRESTORE
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const taskarea = document.querySelector('#taskarea');
  // taskarea.innerHTML = " ";
  const doditing =[];
  querySnapshot.forEach((doc) => {
    doditing.push(doc.data().obj);
    var title = (doc.data().note);
    var taskObj = doc.id; 
    
    var title = taskObj.title;
    var note = taskObj.note;
    var activetask = taskObj.active;
    // console.log("Doc ID: " + taskObj);
    console.log("Array: " + doditing);
    // console.log("Title: " + title);
    // console.log("Note: " + note);
    // console.log("Completed: " + activetask);
    
    // createTaskCard(titletask, notetask, activetask);
    // console.log("Here the Array ", doditing);
    
    

  });


});

/* <div id="taskarea">
<div class="card" id="">
    <div class="form-box">
        <input class="task-input" type="checkbox">
        <label class="label"  id="cardTop">
          This is the title for your task
        </label>
       <i class="bi bi-trash"></i>
       <i class="bi bi-pencil-square"></i>
    </div>
<!-- DROPDOWN TO UPDATE TASK -->
            <div class="hidden">
                <input type="text" class="control titleInput" id="">
                <textarea class="noteArea" id="" placeholder="Notes:"></textarea>
                <button class="saveBtn" id="">Save</button>
            </div>
</div> */

const taskarea = document.querySelector('#taskarea');

function createTaskCard(title, note, active){
  var card = document.createElement('div');
      card.classList.add("card");

  var form = document.createElement('div');
      form.classList.add("form-box");

  var checkbox = document.createElement('input');
      checkbox.classList.add("checkbox");
      checkbox.setAttribute("type", "checkbox");

  var label = document.createElement('label');
      label.classList.add("topCard");
      label.innerText = title;

      // ADD CLICK EVENT LISTENER TO LABEL TO SHOW HIDDEN 
      label.addEventListener('click', function(){
        if (hidden.style.display === "none") {
              hidden.style.display = "block";
        } else {
              hidden.style.display = "none";
        }
    });

  var trash = document.createElement('i');
      trash.classList.add("bi", "bi-trash");
      
  var pencil = document.createElement('i');
      pencil.classList.add("bi", "bi-pencil-square");
      
  var hidden = document.createElement('div');
      hidden.classList.add("hidden");

  var changeTitle = document.createElement('input');
      changeTitle.classList.add("control");
      changeTitle.setAttribute("type", "text");
      changeTitle.value = title;

  var changeNote = document.createElement('textarea');
      changeNote.classList.add("noteArea");    
      changeNote.setAttribute("placeholder", "Notes: ");
      changeNote.value = note;

  var saveBtn = document.createElement('button');
      saveBtn.classList.add("saveBtn");    
      saveBtn.innerText = "Save";    

taskarea.appendChild(card);
card.appendChild(form); 
card.appendChild(hidden);
     
form.appendChild(checkbox);
form.appendChild(label);
form.appendChild(trash);
form.appendChild(pencil);

hidden.appendChild(changeTitle);
hidden.appendChild(changeNote);
hidden.appendChild(saveBtn); 


};

// createTaskCard("Love 4ever", "Die whenever", true);
// createTaskCard("Live 4love", "Die never", true);
// createTaskCard("Gangsta 4life", "Die 4thelife", true);
// createTaskCard("Never 4ever","" , true);