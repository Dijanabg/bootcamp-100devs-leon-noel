document.querySelector('#check').addEventListener('click', check);

function check (){
  const day = document.querySelector('#day').value 

  if(day=='Ponedeljak' || day=='Petak'){
    document.querySelector('#placeToSee').innerHTML='Class';
  }else if(day=='Subota' || day=='Nedelja'){
    document.querySelector('#placeToSee').innerHTML='Weekend';
  }else{
    document.querySelector('#placeToSee').innerHTML='Boring day';
  }
}