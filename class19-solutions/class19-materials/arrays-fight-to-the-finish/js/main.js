//Create an array of movie titles. Loop through the array and each element to the h2.

let arr = ['movie1', 'movie2', 'movie3']
for(let i = 0; i < arr.length; i++){
    document.querySelector('h2').innerText += ' ' + arr[i]
}
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let arrNumbers = [10,20,30]
arrNumbers.forEach((x, i) => {
    arrNumbers[i] = x + 3
});
console.log(arrNumbers)

//Find the average of all the numbers from question two
let sum = 0
arrNumbers.forEach((x) => sum += x)
// for (let i = 0; i < arrNumbers.length; i++) {
//     sum += arrNumbers[i]
// }
console.log(sum/arrNumbers.length)