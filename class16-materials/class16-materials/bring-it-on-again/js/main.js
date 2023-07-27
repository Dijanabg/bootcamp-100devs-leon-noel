// *Variables*
// Declare a variable, assign it a value, and alert the value
let varijabla = 'vrednost'
alert(varijabla)
// Create a variable, divide it by 10, and console log the value
let drugaVarijabla =500
console.log(drugaVarijabla/10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplys(a,b,c) { 
    let product = a*b*c
    alert(product)
  }
  multiplys(3,5,2)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function four(s,d,f,g) { 
    console.log(s+d-f-g)
 }
 four(5,4,3,3)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winner(num1,num2,num3){
    let start= 100+num1-num2/num3
    if(start >25){
        console.log("WE HAVE A WINNNA")
    }
}
winner(54,2,3)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
document.querySelector('#check').addEventListener('click', triki)

function triki(){
    let input = document.querySelector('#input').value.toLowerCase()
    if(input=='sunday' || input=='saturday'){
        alert('WEEKEND')
    }else if(input=='monday' || input=='friday'){
        alert('WEEK DAY')
    }else{
        alert('Try again!!!')
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function count(number){
    
    for (let i=1; i<=number; i+=3){
        console.log(i)
    }
}
count(25)