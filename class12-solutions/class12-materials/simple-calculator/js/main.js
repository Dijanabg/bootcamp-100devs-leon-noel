let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', add3)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#omg').addEventListener('click',sub6)
function makeZero(){
  total=0
  document.querySelector('#placeToPutResult').innerHTML=total
}
function add3() { 
  total+=3
  document.querySelector('#placeToPutResult').innerText=total
}
function add9() { 
  total+=9
  document.querySelector('#placeToPutResult').innerHTML=total
}
function sub2(){
  total-=2
  document.querySelector('#placeToPutResult').innerHTML=total
}
function sub6(){
  total-=6
  document.querySelector('#placeToPutResult').innerHTML=total
}