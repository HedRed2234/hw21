let contacts=[];

if(localStorage.getItem("contacts")){
  contacts=JSON.parse(
    localStorage.getItem("contacts")
  );

  renderContacts();
}

document.getElementById("addBtn")
.addEventListener("click",function(){

  let name=document.getElementById("name").value;

  let phone=document.getElementById("phone").value;

  let id=document.getElementById("id").value;

  let duplicate = contacts.find(function(contact){
    return contact.id===id;
  });

  if(duplicate){
    alert("Такий ID вже існує");
    return;
  }

  let contact={
    name:name,
    phone:phone,
    id:id
  };

  contacts.push(contact);

  localStorage.setItem(
    "contacts",
    JSON.stringify(contacts)
  );

  renderContacts();
});


function renderContacts(){

  let contactsDiv=
    document.getElementById("contacts");

  contactsDiv.innerHTML="";

  contacts.forEach(function(contact,index){

    contactsDiv.innerHTML+=`
      <div class="contact">
        <p>Ім'я: ${contact.name}</p>
        <p>Телефон: ${contact.phone}</p>
        <p>ID: ${contact.id}</p>

        <button class="deleteBtn"
          onclick="deleteContact(${index})">

          Видалити

        </button>
      </div>
    `;
  });
}


function deleteContact(index){

  contacts.splice(index,1);

  localStorage.setItem(
    "contacts",
    JSON.stringify(contacts)
  );

  renderContacts();
}