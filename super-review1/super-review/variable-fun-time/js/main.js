//--- Easy
//create a variable and assign it a number
let num1=5
//minus 10 from that number
num1-=10
//print that number to the console
console.log(num1)
//--- Medium
//create a variable that holds a value from the input
let inValue=Number(document.querySelector('#danceDanceRevolution').value)
//add 25 to that number
inValue+=25
//alert that number
alert(inValue)
//--- Hard
//create a variable that holds the h1
const varH1=document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', run)
function run() { 
    console.log(num1+inValue)
 }