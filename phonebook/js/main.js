const url = 'https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json';
var phonebook = [];
const ul = document.getElementById('allContacts');


async function myContacts(){
    const response = await fetch(url);
    const object = await response.json();
    const contact = await object.contacts;
    contact.forEach(obj => {
        // console.log(obj.firstname);
        document.createElement('p')
        document.getElementById('contactInfo').innerHTML = obj.firstname;
    })
    
    // console.log(contact[1].firstname);
    // console.log(contact.length);
}
myContacts();


class Person {
    constructor(firstname, lastname, title, phone, email, birthday){
        this.firstname = firstname;
        this.lastname = lastname;
        this.title = title;
        this.phonenum = phone;
        this.email = email;
        this.birthday = birthday;

        phonebook.push(this)
    }
}
var contact = new Person();