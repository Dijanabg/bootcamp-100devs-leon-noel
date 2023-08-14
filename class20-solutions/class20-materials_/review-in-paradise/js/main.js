// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'limon'
favFood = 'Sarma'
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let myString = 'Volim Srbiju'
alert(myString.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divMulty(x,y,z){
    alert(x/y*z)
}
divMulty(6,3,2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRoot(robot){
    console.log( Math.cbrt(robot).toFixed(4) )
}
cubeRoot(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month){
    let monthLowerCase = month.toLowerCase()
    if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert('Yay')
    }else{
        alert('Boo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip5s(n){
    for(let i = 1; i <= n; i++){
        if(i % 5 !== 0 ){
            console.log(i)
        }
    }
}
skip5s(15)