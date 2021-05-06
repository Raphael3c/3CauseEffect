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
    birthday: "14/01"
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