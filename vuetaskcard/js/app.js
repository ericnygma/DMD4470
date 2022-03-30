

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
// ** LISTENS FOR CHANGES ** //
getTaskFromFirestore(){
  dodi//.where("completed", "!=", "true")
  .onSnapshot((querySnapshot)=>{
    this.tasks = [];
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
// ** DELETE TASK FROM FIREBASE ** //
  deleteTask(id){
      dodi.doc(id).delete()
      .then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  },
    
// ** UPDATE CHANGES TO TASK ** //
    updateTask(data){
      let taskID =data.id;
      var taskRef = db.collection("doditing").doc(taskID);
        return taskRef.update({
            note: data.note,
            // due_date:data.due_date (DATE NOT UPDATING FROM THIS FUNCTIONS)
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  
   },
    

      // taskCompleted(id){
      //   var tasksRef = db.collection("doditing").doc(id);
      //   if (completed != true) {
      //     return tasksRef.update({
      //       completed: true
      //     })
      //   } else {
      //     return tasksRef.update({
      //       completed: false
      //     })
      //   }}
        
      
    // taskCompleted(id){
    //   var tasksRef = db.collection("doditing").doc(id);
    //   return tasksRef.update({
    //       completed: true
    //    })
    //     .then(()=>{
    //       console.log("Document succesfully update");
    //     })
    //     .catch ((error)=>{
    //       console.error("Error updating: ", error);
    //     })
    //   }
    // },
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
