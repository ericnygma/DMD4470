var colorWell;
var body = document.querySelector('body');
var defaultColor = "#0000ff";
const picker = document.getElementById('themePicker');

window.addEventListener("load", startup, false);
window.addEventListener("load", remember, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateBody, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
  
  
}
// updates the body color
function updateBody(e){
    if(body){
        body.style.backgroundColor = e.target.value;
    
    }
} 
function updateAll(e) {
    body.forEach(function(){
        body.style.backgroundColor = e.target.value;
    });
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
//sets of from local storage

function setStyles(){
    var currentColor = localStorage.getItem('backgroundColor');

    body.style.backgroundColor.value = currentColor;

    body.style.backgroundColor = '#' + currentColor;
}
}

var selTheme = document.querySelector('.batman');
 


//Changes theme

picker[1].addEventListener("click", batman)
picker[2].addEventListener("click", riddler);

function batman() {
    body.classList.add('batman');
  console.log('im batman');
}

function riddler() {
    body.classList.add('riddler');
  console.log('im the riddler');
}