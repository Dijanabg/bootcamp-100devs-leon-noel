//--- Easy
//create a variable and assign it a number
let age = 46
//minus 10 from that number
age-= 10
//print that number to the console
console.log(age)
//--- Medium
//create a variable that holds a value from the input
let hold = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
hold = Number(hold) + 25
//alert that number
alert(hold)
//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sum)

function sum() { 
    console.log(age + Number(hold))
}