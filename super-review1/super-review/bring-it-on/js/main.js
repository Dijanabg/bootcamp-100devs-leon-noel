// *Variables*
// Create a variable and console log the value
let g=22
// Create a variable, add 10 to it, and alert the value
let f = 12
f+=10
alert(f)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sss(a,s,d,c) { 
    alert(a-s-d-c)
 }
 sss(9,8,5,2)
// Create a function that divides one number by another and returns the remainder
function sssh(m,n) { 
    alert(m%n)
 }
 sssh(9,8)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(k,l){
    let sum = k+l
    if(sum > 50){
        alert('Jumanji')
    }
}
jumanji(25,35)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divis(c,v,n){
    let multi = c*v*n
    if(multi%3===0){
        alert('zebra')
    }
}
divis(3,3,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loop(word, num){
    for(let i = 1; i<=num; i++){
        console.log(word)
    }
}
loop('hellouuuuuu', 3)