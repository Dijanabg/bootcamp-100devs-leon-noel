//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twoOne() { 
    let x = 22
    for(let i=1; i<x; i++){
        console.log(21)
    }
 }
 twoOne()
//Bonus can you make it print '21' 21 times to the dom?

function twoOne() { 
    let x = 22
    for(let i=1; i<x; i++){
        document.querySelector('#savageSays').innerText += " 21"
    }
 }
 twoOne()