//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(num1, num2){
    alert(num1-num2)
}
subTwo(10, 3)
//create a function that divides three numbers and console logs the quotient
function divThree(num3, num4, num5){
    console.log(num3/num4/num5)
}
divThree(99,3,3)
//create a function that multiplys three numbers and returns the product
function product(num6, num7, num8){
    console.log(num6*num7*num8)
}
product(5,2,3)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takeThree(a,s,d){
    console.log((a+s)/d)
}
takeThree(6,4,2)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeFourNumbers(j,k,l,m){
    let firstTwo = j*k
    //console.log(firstTwo)
    if(firstTwo>100){
        console.log(l*m)
    }else if(firstTwo<100){
        console.log(l-m)
    }else{
        alert(j*k*l%m)
    }
}
takeFourNumbers(5,20,5,5)