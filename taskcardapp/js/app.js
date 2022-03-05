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
const q = query(docRef);

// const saveBtn = document.querySelector('.saveBtn');
const addBtn = document.querySelector('#addBtn');
const addTitle = document.querySelector('#addTitle');
const addNote = document.querySelector('#addNote');
const taskarea = document.querySelector('#taskarea');



//   GETS TODAYS DATE
const d = new Date();
    var h5 = document.createElement('h5');
    h5.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h5);


    // * GET ALL DOC IN COLLECTION *//
const querySnapshot = await getDocs(docRef)
querySnapshot.forEach((doc) => {
  console.log(doc.id, "=> ", doc.data());
})

// GET LIVE UPDATES FROM FIREBASE
const listening = onSnapshot(q, (querySnapshot) => {
  taskarea.innerHTML = " ";
  querySnapshot.forEach((doc) => {
    var listen = doc.data();
    var title = doc.data().title;
    var note = doc.data().note;
    var active = doc.data().active;
    console.log(title);
    createTaskCard(title, note, active);
  })
  
  
})

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
})




// CREATE TASK OBJECT
// class Task {
//   constructor(title, note, active){
//     this.title = title;
//     this.note = note;
//     this.active = true
//   }
// }





function createTaskCard(title, note, active){
  var card = document.createElement('div');
      card.classList.add("card");

  var form = document.createElement('div');
      form.classList.add("form-box");

  var checkbox = document.createElement('input');
      checkbox.classList.add("checkbox");
      checkbox.setAttribute("type", "checkbox");

        //* ADD CLICK EVENT LISTENER TO CHECKBOX TO CHANGE ACTIVE STATUS TRUE OR FALSE *//

  var label = document.createElement('label');
      label.classList.add("topCard");
      label.innerText = title;

      //* ADD CLICK EVENT LISTENER TO LABEL TO SHOW HIDDEN *//
      label.addEventListener('click', function(){
        if (hidden.style.display === "none") {
              hidden.style.display = "block";
        } else {
              hidden.style.display = "none";
        }
    });

  var trash = document.createElement('i');
      trash.classList.add("bi", "bi-trash");

      //* CREATE CLICK EVENT LISTENER ON TRASH TO DELETE TASK *// 

      trash.addEventListener('click', function(){
        deleteDoc(doc(docRef));
        console.log(doc.id);
      })
      
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


