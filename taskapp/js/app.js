//   Get today's date
const d = new Date();
    var h2 = document.createElement('h2');
    h2.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h2);


//    const pencil = document.querySelectorAll('.pencil');  

//    pencil.addEventListener('click',function(){
//        console.log('do you want to edit');
//        const hidden = document.querySelector('.hidden');
//       if (hidden.style.display === "none") {
//         hidden.style.display = "block";
//       } else {
//         hidden.style.display = "none";
   
//       }
//  })

//  let del = document.getElementsByClassName('delete'); 
//  del.addEventListener('click', function(){
//      console.log('you sure you want to delete');
//  })

//  const trash = document.getElementsByClassName('.bi-trash');
//     trash.addEventListener('click', function(){
//         console.log("trash");
//     })

  const pencil = document.querySelector('.pencil');
  pencil.forEach().addEventListener('click', function(){ console.log("fire") });
//   addEventListener('click', function(){ console.log("fire")})

//   document.getElementsByClassName('pencil').addEventListener('click', function(){ console.log("fire") });
  
  document.querySelector('.form-check').addEventListener('click', function(){
      const pencil = document.querySelector('.pencil');
      pencil.style.display = "none";
  })