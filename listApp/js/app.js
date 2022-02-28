




const ftask = document.querySelector('#ftask');
const edit = document.querySelector('.edit');
edit.addEventListener('click', function(){
    const makeIt = document.querySelector('.makeIt');
    const addTask = document.querySelector('.addTask')
    console.log('you clicked on ');
    makeIt.style.display = 'block';
    addTask.style.display = 'block';
})

const checkBox = document.querySelector('.checkbox');

function isChecked() {
    
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        console.log('yes');
    //   text.style.display = "block";
    } else {
        console.log('no');
    //   text.style.display = "none";
    }
  } 


//   Creating Task Class/Object
  class Task {
      constructor(title, note, complete){
          this.title = title;
          this.note = note;
          this.complete = false;
      }
      updateTask(title, note, complete){
            this.title = title;
            this.note = note;
            this.complete= false;
      }
  }

  const task = new Task('eat shit', 'i dont eat shit, you eat shit', 'true');
  console.log(task.complete);


//   Get today's date
const d = new Date();
    var h2 = document.createElement('h2');
    h2.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h2);