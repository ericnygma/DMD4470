

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
    var h5 = document.createElement('h5');
    h5.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h5);

var app = new Vue({
  el: '#app',
  data: function(){
    return {
      app_title: 'DO DI TING',
      new_task: 
      {
        title: '',
        note: '',
        completed: false,
        due_date: '2022-03-15',
        doc: ''
      }
      ,
      
      tasks: [],
      
    }
  },
  
  methods: {
    newTask: function(){
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

      // UPDATE FROM FIREBASE
  //     dodi.onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //           // this.tasks.push(doc.id, doc.data());
  //       });
  //       console.log();
  //   });
  //     // ** GET MULTIPLE DOCUMENTS **
  //   dodi.get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       this.tasks.push(doc.id, doc.data())
  //       console.log("ID: " + doc.id, " Data: ", doc.data());
  //     });

  //   })
  //   .catch((error) => {
  //     console.log("Error getting docs: ", error );
  //   })
  //     //GET ALL DOCUMENTS IN COLLECTION 
  //   dodi.get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log("ID: ", doc.id, " => ", doc.data());
  //     });
  // });
dodi.onSnapshot((querySnapshot)=>{
  // var doditing = [];
  querySnapshot.forEach((doc)=>{
    this.tasks.push(doc.id,doc.data());
    console.log(doc.id, "=> ", doc.data())
    
    var ftask = doc.data();
    var id = doc.id;
    var title = doc.data().title;
    var note = doc.data().note;
    var completed = doc.data().completed;
    var due_date = doc.data().due_date;
    
    console.log("this is from firestore " + id)
  })
  
  
})      
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
