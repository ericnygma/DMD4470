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


const addBtn = document.querySelector('#addBtn');
const addTitle = document.querySelector('#addTitle');
const addNote = document.querySelector('#addNote');
const taskarea = document.querySelector('#taskarea');
const completedarea = document.querySelector('#completedArea')


// *  GETS TODAYS DATE * //
const d = new Date();
    var h5 = document.createElement('h5');
    h5.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h5);


    // * GET ALL DOC IN COLLECTION *//
const querySnapshot = await getDocs(docRef)
querySnapshot.forEach((doc) => {
  // console.log(doc.id, "=> ", doc.data()); confirm information in doc
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
    var completed = doc.data().completed;
    // createTaskCard(title, note, completed, id);
    // console.log('this is? ' + doc.id); confirm doc id
  })
})


// * CREATE NEW TASK AND SEND TO FIREBASE * //
// addBtn.addEventListener('click', function(){
//   var title = addTitle.value;
//   var note = addNote.value;
//   setDoc(doc(docRef), {
//     title: title, 
//     note: note,
//     completed: false
//   })
//   addTitle.value = "";
//   addNote.value = "";
// })

// * THIS FUNCTION CREATE A CARD TO HOLD THE TASK * //
// function createTaskCard(title, note, completed, id){
//   var card = document.createElement('div');
//       card.setAttribute("draggable", "true");
//       card.classList.add("card");
//       card.setAttribute('id', id);

//   var form = document.createElement('div');
//       form.classList.add("form-box");

//   var checkbox = document.createElement('input');
//       checkbox.classList.add("checkbox");
//       checkbox.setAttribute("type", "checkbox");
//       checkbox.checked = completed;
        
//   var label = document.createElement('label');
//       label.classList.add("topCard");
//       label.innerText = title;

//   var trash = document.createElement('i');
//       trash.classList.add("bi", "bi-trash");
//       trash.setAttribute('id', id);

//   var trashBtn = document.createElement('button');
//       trashBtn.classList.add("trashBtn");   
//       trashBtn.appendChild(trash);

//   var pencil = document.createElement('i');
//       pencil.classList.add("bi", "bi-pencil-square");
  
//   var pencilBtn = document.createElement('button');
//       pencilBtn.classList.add("pencilBtn");   
//       pencilBtn.appendChild(pencil);
      
//   var hidden = document.createElement('div');
//       hidden.classList.add("hidden");

//   var changeTitle = document.createElement('input');
//       changeTitle.classList.add("control", "titleArea");
//       changeTitle.setAttribute("type", "text");
//       changeTitle.value = title;

//   var changeNote = document.createElement('textarea');
//       changeNote.classList.add("noteArea");    
//       changeNote.setAttribute("placeholder", "Notes: ");
//       changeNote.value = note;

//   var saveBtn = document.createElement('button');
//       saveBtn.classList.add("saveBtn"); 
//       saveBtn.setAttribute('id', id);   
//       saveBtn.innerText = "Save";    

      

// * MOVES TASKS TO ACTIVE OR COMPLETED AREA * //
// if(completed === false && checkbox.checked === false){
//   taskarea.appendChild(card);
// }else {
//   completedarea.appendChild(card);
// }

// card.appendChild(form); 
// card.appendChild(hidden);
     
// form.appendChild(checkbox);
// form.appendChild(label);
// form.appendChild(trashBtn);
// form.appendChild(pencil);

// hidden.appendChild(changeTitle);
// hidden.appendChild(changeNote);
// hidden.appendChild(saveBtn); 

 //* ADD CLICK EVENT LISTENER TO LABEL TO SHOW HIDDEN *//
//  pencil.addEventListener('click', (e) => {
//   e.stopPropagation();
//   if (hidden.style.display === "none") {
//         hidden.style.display = "block";
//   } else {
//         hidden.style.display = "none";
//   }
// });

// * CHECKBOX UPDATES COMPLETED IN FIREBASE * //
// checkbox.addEventListener('click', () => {
//   const idObj = doc(docRef, id); // IMPORTANT HAS TO BE AN OBJECT
//   if (checkbox.checked === false){
//     updateDoc(idObj, {
//       completed: false
//     });
//   } else {
//     updateDoc(idObj, {
//       completed: true
//     });
//   }
// })


//* DELETES TAS FROM FIRESBASE *//
// trash.addEventListener('click', (e) => {
//   e.stopPropagation();
//   deleteDoc(doc(docRef, id));    
// });

//* CLICK UPDATE TITLE AND NOTES *//
// saveBtn.addEventListener('click', (e) => {
//   e.stopPropagation();
//   const idObj = doc(docRef, id); // IMPORTANT HAS TO BE AN OBJECT
//   updateDoc(idObj, {
//     title: changeTitle.value,
//     note: changeNote.value,
//  })
// })
// };

// PWA PURPOSE //

// PWA INSTALLATION
let deferredPrompt;
const pwaBtn = document.querySelector('.add-button');
// pwaBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  pwaBtn.style.display = 'block';

  pwaBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    pwaBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});



var app = new Vue({
  el: '#app',
  data: function(){
    return {
      app_title: 'DO DI TING',
      new_task: {
        title: '',
        note: '',
        completed: false,
        due_date: '2022-03-15'
      },
      tasks: [
        {
          title: "Task No 1",
          note: "Some note for task no 1",
          complete: false,
          due_date: "2022-03-21"
        },
        {
          title: "Task No 2",
          note: "Some note for task no 2",
          complete: false,
          due_date: "2022-03-24"
        },
        {
          title: "Task No 3",
          note: "Some note for task no 3",
          complete: true,
          due_date: "2022-03-30"
        },
        {
          title: "Task No 420",
          note: "Some note for about 420",
          complete: false,
          due_date: "2022-04-20"
        },
      ]
    }
  },
  methods: {
    newTask: function(){
     this.tasks.push(
        JSON.parse(JSON.stringify(this.new_task))
      );
      this.new_task.title = "";
      this.new_task.note = "";
    },
    deleteTask: function(){
        console.log('deleted')
      },
    updateTask: function(){
        console.log('updated')
      },
    cancelBtn: function(){
        console.log('cancel')
      },
  
    }
})


// if (checkbox.checked === false){
  //     updateDoc(idObj, {
  //       completed: false
  //     });
  //   } else {
  //     updateDoc(idObj, {
  //       completed: true



// var title = addTitle.value;
//   var note = addNote.value;
//   setDoc(doc(docRef), {
//     title: title, 
//     note: note,
//     completed: false
//   })
//   addTitle.value = "";
//   addNote.value = "";


// var title = this.new_task.title;
// var note = this.new_task.note;
// var completed = this.new_task.complete;
// var dueDate = this.new_task.due_date;
// setDoc(doc(docRef), {
//   title: title, 
//   note: note,
//   completed: completed,
//   dueDate: dueDate
// })
// 