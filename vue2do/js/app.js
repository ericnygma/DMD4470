//  *** FIREBASE *** //
firebase.initializeApp ({
    apiKey: "AIzaSyC3Ij4reGVts5e2D6HAYOhpCJgdd76teHM",
    authDomain: "listapproot.firebaseapp.com",
    projectId: "listapproot",
    storageBucket: "listapproot.appspot.com",
    messagingSenderId: "398474013698",
    appId: "1:398474013698:web:a332fd275f59da2a2b8b1b"
  });
var db = firebase.firestore();

db.collection("doditing").add({
    task:"LONG KISS GOODNIGHT",
    note: "WHAT'S BEEF",
    completed: false,
    due_date:" 2022-04-01"
})
.then((docRef) =>{
    console.log("doc id: ", docRef.id);
})
.catch((error)=>{
    console.log("error adding document", error);
});

//  *** VUE TEMPLATES *** //

//  *** CARD TEMPLATE *** //
Vue.component('addtask', {
    
        
    
    
    
    template: `
    <div class="card">
              <input v-model="task.title" type="text" placeholder="Title">
              <input v-model="task.note" type="text" placeholder="Details">
              <label for="date">Pick a Date</label>
              <input v-model="task.due_date" type="date" name="date">
              <button @click="addTask()" class="glow-on-hover">Add Task</button>
          </div>
    `,

    data(){
        return{
            task: {
                title: '',
                note: '',
                completed: 'false',
                due_date: '2022-03-17'
            },
            tasks: [
                {
                    title: "eat cake",
                    notes: "teat goes great with cake",
                    completed: false,
                    due_date: " "
            },
            ]
          }
      
    },
    methods: {
        addTask: function(){
            this.tasks.push(
                JSON.parse(JSON.stringify(this.task))
                
            );console.log(this.tasks)
        },
    } 
})
// *** VUE APP *** //
var app = new Vue({
    props: ['title', 'note', 'due_date', 'completed'],
    el: '#app',
        data(){
            return{
                tasks: [
                    {
                        title: '',
                        notes: '',
                        completed: false,
                        due_date: ' '
                },
                ]              
            }

           
        }
})

