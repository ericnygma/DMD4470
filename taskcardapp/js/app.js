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
const completedarea = document.querySelector('#completedArea')
const active = document.querySelector('.checkbox')
// const deleteBtn = document.querySelector('.bi-trash');

// *  GETS TODAYS DATE * //
const d = new Date();
    var h5 = document.createElement('h5');
    h5.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h5);


    // * GET ALL DOC IN COLLECTION *//
const querySnapshot = await getDocs(docRef)
querySnapshot.forEach((doc) => {
  console.log(doc.id, "=> ", doc.data());
})




// * GET LIVE UPDATES FROM FIREBASE * //
const listening = onSnapshot(q, (querySnapshot) => {
  taskarea.innerHTML = " ";
  completedarea.innerHTML =" ";
  querySnapshot.forEach((doc) => {
    var listen = doc.data();
    var id = doc.id;
    var title = doc.data().title;
    var note = doc.data().note;
    var active = doc.data().active;
    createTaskCard(title, note, active, id);
    console.log('this is? ' + doc.id);
  })
})


// * CREATE NEW TASK AND SEND TO FIREBASE * //
addBtn.addEventListener('click', function(){
  var title = addTitle.value;
  var note = addNote.value;
  setDoc(doc(docRef), {
    title: title,
    note: note,
    active: false
  })
  addTitle.value = "";
  addNote.value = "";
})




// * THIS FUNCTION CREATE A CARD TO HOLD THE TASK * //
function createTaskCard(title, note, active, id){
  var card = document.createElement('div');
      card.setAttribute("draggable", "true");
      card.classList.add("card");
      card.setAttribute('id', id);

  var form = document.createElement('div');
      form.classList.add("form-box");

  var checkbox = document.createElement('input');
      checkbox.classList.add("checkbox");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = active;
        


  var label = document.createElement('label');
      label.classList.add("topCard");
      label.innerText = title;

   

  var trash = document.createElement('i');
      trash.classList.add("bi", "bi-trash");
      trash.setAttribute('id', id);

var trbt = document.createElement('button');
      trbt.classList.add("trbt");   
      trbt.appendChild(trash);



  var pencil = document.createElement('i');
      pencil.classList.add("bi", "bi-pencil-square");
      
  var hidden = document.createElement('div');
      hidden.classList.add("hidden");

  var changeTitle = document.createElement('input');
      changeTitle.classList.add("control", "titleArea");
      changeTitle.setAttribute("type", "text");
      changeTitle.value = title;

  var changeNote = document.createElement('textarea');
      changeNote.classList.add("noteArea");    
      changeNote.setAttribute("placeholder", "Notes: ");
      changeNote.value = note;

  var saveBtn = document.createElement('button');
      saveBtn.classList.add("saveBtn"); 
      saveBtn.setAttribute('id', id);   
      saveBtn.innerText = "Save";    

      


if(active == false){
  taskarea.appendChild(card);
}else {
  completedarea.appendChild(card);
}

card.appendChild(form); 
card.appendChild(hidden);
     
form.appendChild(checkbox);
form.appendChild(label);
form.appendChild(trbt);
form.appendChild(pencil);

hidden.appendChild(changeTitle);
hidden.appendChild(changeNote);
hidden.appendChild(saveBtn); 

 //* ADD CLICK EVENT LISTENER TO LABEL TO SHOW HIDDEN *//
label.addEventListener('click', (e) => {
  e.stopPropagation();
  if (hidden.style.display === "none") {
        hidden.style.display = "block";
  } else {
        hidden.style.display = "none";
  }
});

//* DELETES TAS FROM FIRESBASE *//
trash.addEventListener('click', (e) => {
  e.stopPropagation();
  deleteDoc(doc(docRef, id));    
});


saveBtn.addEventListener('click', function(e){
  e.stopPropagation();
  // var newtitle = changeTitle.value;
  // var newnote = changeNote.value;
  updateDoc(doc(docRef), {
    title: changeTitle.value,
    note: changeNote.value,
    
 })
  
})


};


