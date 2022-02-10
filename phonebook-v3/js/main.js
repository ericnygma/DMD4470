// Declare variable
const url = 'https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json';
const contactList = document.getElementById('cl');


// fetch data from JSON file
async function myPhonebook(){
    const response = await fetch(url);
    const object = await response.json();
    const contact = await object.contacts;
    console.log(contact);
    // sort the contact in array by lastname
    contact.sort((a,b) => a.lastname.localeCompare(b.lastname));
    contact.forEach(obj => {
        let contact = new Person(obj.lastname, obj.firstname, obj.title, obj.phone, obj.email, obj.birthdate);
        contact.displayToCard()
    
   
})
}
myPhonebook();

// create Person class
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
    // display individual contacts to cards
    displayToCard() {
        contactList.innerHTML += `
            <div class="card">
                <li>Name:<strong> ${this.lastname}, ${this.firstname} </strong></li>
                <li>Title: ${this.title}</li>
                <li>Phone: ${this.phone}</li>
                <li>Email: <a href='#'> ${this.email} <a/></li>
                <li>Birthday: ${this.birthdate}</li>
            </div>`;
        
    }
}
