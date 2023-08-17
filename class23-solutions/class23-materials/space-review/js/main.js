//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arrNum = [10,20,30,40]
alert(arrNum.reduce((a, b) => a + b, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = arrNum.map(num => num**2)
console.log(newArr)

//Create a function that takes string
//Print the reverse of that string to the console

let str = 'ankiLeon'
let reverse = str => console.log(str.split('').reverse().join(''))
console.log(reverse(str))
//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromCheck = str1 =>alert(str1 === str1.split('').reverse().join(''))
palindromCheck('anavolimilovana')