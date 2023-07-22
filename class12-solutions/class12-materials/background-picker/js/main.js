document.getElementById('purple').onclick=purple
document.getElementById('green').onclick=green
document.getElementById('blue').onclick=blue
document.getElementById('red').onclick=red

function purple() { 
  document.querySelector('body').style.background='rgba(241,63,247,1)'
  document.querySelector('body').style.color='white'
}
function green(){
  document.querySelector('body').style.background='rgba(0,253,81,1)'
  document.querySelector('body').style.color='white'
}
function blue() { 
  document.querySelector('body').style.background='rgba(0,254,255)'
  document.querySelector('body').style.color='white'
}
function red(){
  document.querySelector('body').style.background='rgb(150, 9, 9)'
  document.querySelector('body').style.color='white'
}
