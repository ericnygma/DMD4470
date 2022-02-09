const url = 'https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json';
var phonebook = [];
const ul = document.getElementById('allContacts');


async function myContacts(){
    const response = await fetch(url);
    const object = await response.json();
    const contact = await object.contacts;

    contact.forEach(obj => {
        document.getElementById('allContacts').innerHTML = `
            <div>
                <li>Name:<strong> ${obj.lastname}, ${obj.firstname} </strong></li>
                <li>Email: ${obj.email}</li>
               
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
myContacts();






class Person {
    constructor(firstname, lastname, title, phone, email, birthday){
        this.firstname = firstname;
        this.lastname = lastname;
        this.title = title;
        this.phone = phone;
        this.email = email;
        this.birthday = birthday;
        this.fullname = this.lastname +", "+ this.firstname;

        phonebook.push(this)
    }
}
// var contact = new Person();