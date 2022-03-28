

  firebase.initializeApp({
    apiKey: "AIzaSyC3Ij4reGVts5e2D6HAYOhpCJgdd76teHM", 
    authDomain: "listapproot.firebaseapp.com",
    projectId: "listapproot",
    storageBucket: "listapproot.appspot.com",
    messagingSenderId: "398474013698",
    appId: "1:398474013698:web:a332fd275f59da2a2b8b1b"
  });


const db = firebase.firestore();
const dodi = db.collection('doditing');

// *  GETS TODAYS DATE * //
const d = new Date();
    // var h5 = document.createElement('h5');
    // h5.innerHTML = "Today " + d.toLocaleDateString();
    // document.querySelector('.greeting').appendChild(h5);

var app = new Vue({
  el: '#app',
  data: function(){
    return {
      app_title: 'DO DI TING',
      today: d.toLocaleDateString(),
      new_task: 
      {
        title: '',
        note: '',
        completed: false,
        due_date: ''
      },
     tasks: [],
     
    }
  },
  
  methods: {
   newTask(){
   // ADD TASK TO FIREBASE
      dodi.add({
        title: this.new_task.title,
        note: this.new_task.note,
        due_date: this.new_task.due_date,
        completed: this.new_task.completed
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});
      this.new_task.title = "";
      this.new_task.note = "";
      this.new_task.due_date = "";
},

getTaskFromFirestore(orderBy){
  // db.collection("doditing")
  dodi.onSnapshot((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
      this.tasks.push({
        title: doc.data().title,
        note: doc.data().note,
        due_date: doc.data().due_date,
        completed: doc.data().completed,
        id: doc.id
        })
    })
  })
},
  
  
    deleteTask(){
      db.collection("doditing").doc().delete()
      .then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
      
      },


    updateTask(){
      var taskRef = db.collection("doditing").doc();
        return taskRef.update({
            title: doc.data().title,
            note: doc.data().note
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  
   },
    cancelBtn(){
        console.log('cancel')
      },
    taskComplete(){
      console.log('cancel')
    },
    
    
},
mounted() {
  this.getTaskFromFirestore();
}, 
});



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
