//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function arr(arrMulty){
    let product = 1
    arrMulty.forEach(element => product *= element)
    alert(product)
    
}
arr([10,2,3])