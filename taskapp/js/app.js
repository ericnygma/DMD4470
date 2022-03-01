//   Get today's date
const d = new Date();
    var h2 = document.createElement('h2');
    h2.innerHTML = "Today " + d.toLocaleDateString();
    document.querySelector('.greeting').appendChild(h2);



    // DOM LINKS
    const form = document.querySelector('.form-check');  
    const pencil = document.querySelector('.bi-pencil-square');
    const trash = document.getElementsByClassName('.bi-trash');
    const hidden = document.querySelector('.hidden');
    // const del = document.querySelector('.trash').innerHTML;

   
//    pencil.addEventListener('click',function(){
//        console.log('do you want to edit');
//        const hidden = document.querySelector('.hidden');
//       if (hidden.style.display === "none") {
//         hidden.style.display = "block";
//       } else {
//         hidden.style.display = "none";
   
//       }
//  })

// 

//   pencil.addEventListener('click', function(){
//        console.log("fire") });

  
const card = document.querySelector('#card'); 
card.addEventListener('click', function(){
    if (hidden.style.display === "none") {
                hidden.style.display = "block";
              } else {
                hidden.style.display = "none";
           
              }
})
  
  