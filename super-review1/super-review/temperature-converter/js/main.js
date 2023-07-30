//Write your pseduo code first! 
document.querySelector('button').addEventListener('click', convert)
//value
function convert() { 
    let temp = Number(document.querySelector('input').value)
    temp = temp*1.8 + 32
    document.querySelector('p').innerHTML=temp
 }
//convert

//show
