// Declare variables
const url = 'https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json';
const ul = document.getElementById('allContacts');


async function myPhonebook(){
    const response = await fetch(url);
    const object = await response.json();
    const contact = await object.contacts;
    console.log(contact);
    // sort the contact in array by lastname
    contact.sort((a,b) => a.lastname.localeCompare(b.lastname));
    contact.forEach(obj => {
        let contact = new Person(obj.lastname, obj.firstname, obj.title, obj.phone, obj.email, obj.birthdate);
        contact.displayToPage();
       
})
}
myPhonebook();

// creates a class for new contacts
class Person {
    constructor(lastname, firstname, title, phone, email, birthdate){
        this.firstname = firstname;
        this.lastname = lastname;
        this.title = title;
        this.phone = phone;
        this.email = email;
        this.birthdate = birthdate;
        this.fullname = this.lastname +", "+ this.firstname;
    }

    displayToPage(){
        ul.innerHTML += `
             <div>
                <li>Name:<strong> ${this.lastname}, ${this.firstname} </strong></li>
                <li>Title: ${this.title}</li>
                <li>Phone: ${this.phone}</li>
                <li>Email: ${this.email}</li>
                <li>Birthday: ${this.birthdate}</li>
             
            </div>`;
    }
}
