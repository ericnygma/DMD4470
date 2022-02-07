//Declare array of classmate roster
var classRoster = [];

//Declare array of message objects
var classChat = [];
var chatDiv = document.getElementById('classChat');

function Classmate(firstname, lastname, gradyear, role) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gradyear = gradyear;
    this.role = role;
    this.fullname = this.firstname + " " + this.lastname;

    classRoster.push(this)

    /*this method, when invoked, should add the class Chatroom: "([timestamp]) [firstname] [lastname] says [message], with timestamp" */
    this.postChatMessage = function(message) {
        var timestamp = new Date().toLocaleTimeString();
        var msg = {
            time: timestamp,
            text: `${this.firstname} ${this.lastname} says ${message}`
        };
        //adds classChat arr and invoke displayAllMessages
        classChat.push(msg);
        displayAllMessages();
    }
    //
    this.addToRoster = function() {

    }
}
//List of classmates and roles
let joel = new Classmate("Joel", "Salisbury", 2015, "Professor");
let andy = new Classmate("Andy", "Gardner", 2023, "Student");
let tom = new Classmate("Tom", "Ahawk", 2020, "Graduate");
let steve = new Classmate("Steve", "Harper", 2015, "Advisor");
let eric = new Classmate("Eric", "Nygma", 2016, "Villain");

//add classmates to roster
andy.postChatMessage('Here I come world, here I come');
joel.postChatMessage('Sup, Super nerds');
steve.postChatMessage('Graduation will be in 2023.');
eric.postChatMessage('?');

//function to loop through classChat and display format
function displayAllMessages() {
    chatDiv.innerHTML = " ";
    classChat.forEach(function(message, index){
        chatDiv.innerHTML += `<p class="chatMsg"> (${message.time}) ${message.text}</p>`
    })
}

//loops through classRoster and format/display whatevers there
function displayClassRoster() {
    classList.innerHTML = " ";
    classRoster.forEach(function(classmate, index){
        classList.innerHTML += `<li> ${classmate.fullname} (${classmate.role}) - ${classmate.gradyear}</li>`
    })
}

displayClassRoster()