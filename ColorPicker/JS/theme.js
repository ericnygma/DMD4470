var colorWell;
var body = document.querySelector('body');
var defaultColor = "#f7feff";

window.addEventListener("load", startup, false);
window.addEventListener("load", remember, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  //tracking color change
  colorWell.addEventListener("input", bodyColor, false);
  colorWell.addEventListener("change", updateBody, false);
  //colorWell.select();
  localStorage.getItem('backgroundColor');
};

//load localStorage
function remember() {
    var storedColor = localStorage.getItem('backgroundColor');
    if(storedColor){
        body.style.backgroundColor = storedColor;
       }
}

// Preview color change on body
function bodyColor(e){
    if(body){
        body.style.backgroundColor = e.target.value;
        //localStorage.setItem('backgroundColor', colorWell.value);
    }
} 
// Changes body color and save value to localStorage
function updateBody(e) {
        body.style.backgroundColor = e.target.value;
        localStorage.setItem('backgroundColor', colorWell.value);
    }; 

    //Changes theme
const picker = document.getElementById('themePicker');
picker[1].addEventListener("click", batman);
picker[2].addEventListener("click", riddler);

//change theme to batman class and saves to localStorage
function batman() {
    body.classList.remove('riddler');
    body.style.backgroundColor = null;
    body.classList.add('batman');
    localStorage.setItem('theme', 1);
}
//change theme to riddler class and save to localStorage
function riddler() {
    body.classList.remove('batman');
    body.style.backgroundColor = null;
    body.classList.add('riddler');
    localStorage.setItem('theme', 2);
};





 


