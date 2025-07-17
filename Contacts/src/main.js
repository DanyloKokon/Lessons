 const form = document.getElementById('contactsForm');
 const contactsList = document.getElementById('contactsList');
const ulL = document.querySelector('#contacts-list');
gCFLS();
 form.addEventListener('submit', handleSubmit)
 function handleSubmit(evt) {
  
    evt.preventDefault();
    const newNum = {
      name: evt.currentTarget.elements.name.value,
      tel: evt.currentTarget.elements.tel.value
    }
    const contactBase = JSON.parse(localStorage.getItem('contacts')) || [];
     contactBase.push(newNum);
    contactsList.insertAdjacentHTML('beforeend', cCMU(newNum))
    console.log(contactBase);
   
    localStorage.setItem('contacts', JSON.stringify(contactBase));
    
 } ;
 // cCMU - create contact markup
 function cCMU(newConact){
    return `<li>
      <p>${newConact.name}</p>
      <p>${newConact.tel}</p>
       </li>`
   
 };
//  function renderContacts(contacts) {
//     contactsList.insertAdjacentHTML('beforeend', cCMU(newNum));
//  };

 // gCFLS - get contact from local storage
 function gCFLS(){
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.forEach(contact => {
        contactsList.insertAdjacentHTML('beforeend', cCMU(contact));
    });
 };

