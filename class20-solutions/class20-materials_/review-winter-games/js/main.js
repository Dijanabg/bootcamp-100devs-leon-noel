//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function onlyEven(arrNum){
    let evens = []

    arrNum.forEach(n => {
        if(n % 2 === 0){
            evens.push(n)
        }
    })
    return evens
    
}
console.log(onlyEven([1,2,3,4,5])) 