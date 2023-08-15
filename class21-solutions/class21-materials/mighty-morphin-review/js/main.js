// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holi = 'Christmas'
holi = holi.toUpperCase()
console.log(holi)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let city = 'Belgrade'
let result = city.substring(city.length - 3)
//alert(city.slice(-3))
alert(result)
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function minusFiveAndAbs(a,s,d,f,g){
    let diff =100 - a -s - d -f - g
    alert(Math.abs(diff))
}
minusFiveAndAbs(1,2,3,4,5)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highAndLow(q,w,e){
    let min = Math.min(q,w,e)
    let max = Math.max(q,w,e)
    console.log(`The lowest num is ${min}, and the highest num id ${max}`)
}
highAndLow(15,21,3)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrtails(){
    let result = Math.random()
    console.log(result)
    if(result < .5){
        return 'heads'
    }else{
        return 'tails'
    }
}
console.log(headsOrtails())

// const headsOrtails = _ => Math.random() < .5 ? 'heads' : 'tails'


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function resultHaT(x){
    for( let i = 1; i<=x; i++){
        let result = headsOrtails()
        console.log(result)
    }
}
resultHaT(10)