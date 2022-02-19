

var newItem = document.querySelector('#newItem');
const saveBtn = document.querySelector('#save-btn');
const outputList = document.querySelector('#myList');

saveBtn.addEventListener("click", function(){
    const saveItem = newItem.value;
    console.log("You just saved " + saveItem);
    
})


