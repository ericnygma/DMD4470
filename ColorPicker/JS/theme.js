var colorWell;
    var body = document.querySelector('body');
    var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
//test this line
window.addEventListener("load", remember, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  //colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateBody, false);
  colorWell.addEventListener("change", updateBody, false);
  colorWell.select();

  
}
// updates the body color
function updateBody(e){
    //var b = document.querySelector("body");

    if(body){
        body.style.backgroundColor = e.target.value;
    
    }
} 
//Local Storage
function remember(){
if(!localStorage.getItem('backgroundColor')){
    populateStorage();
} else {
    setStyles();
}
function populateStorage(){
    localStorage.setItem('backgroundColor', body.style.backgroundColor.value);
    setStyles();
}
function setStyles(){
    var currentColor = localStorage.getItem('backgroundColor');

    body.style.backgroundColor.value = currentColor;

    body.style.backgroundColor = '#' + currentColor;
}
}

