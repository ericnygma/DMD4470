// Declare
const url = 'https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json';
const ul = document.getElementById('allContacts');
var phonebook = [];


async function myPhonebook(){
    const response = await fetch(url);
    const object = await response.json();
    const contact = await object.contacts;
    console.log(contact);
    contact.forEach(obj => {
        ul.innerHTML += `
            <div>
                <li>Name:<strong> ${obj.lastname}, ${obj.firstname} </strong></li>
                <li>Title: ${obj.title}</li>
                <li>Phone: ${obj.phone}</li>
                <li>Email: ${obj.email}</li>
                <li>Birthday: ${obj.birthdate}</li>
                
               
            </div>`;
    
    // contact.forEach(obj => {
       
        
    //     console.log(obj);
    //     let p = document.createElement('p')
    //     document.getElementById('contactInfo').innerHTML = obj.firstname;
    //     document.getElementById('contactInfo').innerHTML = obj.phone;
    // })
    
    // console.log(contact[1].firstname);
    // console.log(contact.length);
})
}
myPhonebook();






class Person {
    constructor(firstname, lastname, title, phone, email, birthdate){
        this.firstname = firstname;
        this.lastname = lastname;
        this.title = title;
        this.phone = phone;
        this.email = email;
        this.birthdate = birthdate;
        this.fullname = this.lastname +", "+ this.firstname;

        phonebook.push(this)
    }
}
// let contact = new Person();