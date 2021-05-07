const people = [
  {
    name: "Raphael", 
    street: "Rua 8", 
    city: "Maracanaú", 
    state: "Ceará", 
    country: "Brasil", 
    telephone: "85988495478", 
    birthday: "06/09"
  },
  {
    name: "Madalena", 
    street: "Rua 9", 
    city: "Beberibe", 
    state: "Ceará", 
    country: "Brasil", 
    telephone: "85999887711", 
    birthday: "05/05"
  },
  {
    name: "Adenizia", 
    street: "Rua 10", 
    city: "Rendenção", 
    state: "Ceará", 
    country: "Brasil", 
    telephone: "85986907087", 
    birthday: "14/01/1980"
  },
  {
    name: "Renato", 
    street: "Rua 11", 
    city: "Araturi", 
    state: "Ceará", 
    country: "Brasil", 
    telephone: "85996861003", 
    birthday: "05/07"
  } 
]

function show(id){
  document.getElementById(id).style.display = "block";
  document.getElementById(`${id}-i`).className += ' rotate'
}


function hide(id){
  document.getElementById(id).style.display = "none";
  document.getElementById(`${id}-i`).className = "arrow right"
}

function toogleDisplay(id){
  const stringClasses = document.getElementById(`${id}-i`).className;

  const arrayClasses = stringClasses.split(" ");

  const isElementDown = arrayClasses.includes("rotate");

  if(isElementDown){
    hide(id)
    return
  }

  show(id)
}

function putInformation(name){
  const onePeople = people.find(people => people.name == name)

  console.log(onePeople)

  document.getElementById("name").value = onePeople.name;
  document.getElementById("nascimento").value = onePeople.birthday;
  document.getElementById("Telefone").value = onePeople.telephone;
  document.getElementById("CEP").value = "61913-345";
  document.getElementById("Rua").value = onePeople.street;
  document.getElementById("Cidade").value = onePeople.city;
  document.getElementById("UF").value = onePeople.state;
}