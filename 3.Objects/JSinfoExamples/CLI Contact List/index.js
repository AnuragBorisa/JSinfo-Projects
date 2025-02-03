let contacts = [{
    name:"Abc",
    phone:91
},{
    name:"Abcd",
    phone:918
},
{
    name:"Abcde",
    phone:917
},
{
    name:"Abcdef",
    phone:916
}
]

function add(name,phone) {
      let newContact = {
        name:name,
        phone:phone
      }
      contacts.push(newContact);
}

function del (phone){
      const index = contacts.findIndex((obj)=> obj.phone === phone);
      if(index!==-1){
        contacts.splice(index,1);
      }
      else{
        console.log("Error : Contact not found");
      }
}

function edit (name,phone,oldPhone){
    const contact = contacts.find((obj)=>obj.phone === oldPhone);

    if(contact){
        contact.name = name;
        contact.phone = phone;
    }
}