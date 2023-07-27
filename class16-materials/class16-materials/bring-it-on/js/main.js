// *Variables*
// Create a variable and console log the value
let a = 5
console.log(a)
// Create a variable, add 10 to it, and alert the value
let q=5
q+=10
alert(q)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(h,j,k,l){
    alert(h-j-k-l)
}
sub(4,5,6,7)
// Create a function that divides one number by another and returns the remainder
function rem(d,f) { 
    return(d%f)
 }
 console.log(rem(88,55))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function greater(r,t){
    if(r+t>50){
        alert('Jumanji')
    }
}
greater(65,65)
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