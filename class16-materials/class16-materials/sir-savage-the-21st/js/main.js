//Create a function that has a loop that prints '21' 21 times to the console and then call that function
// function twenyone(){
//     for(let i = 1; i<22; i++){
//         console.log('21')
//     }
// }
// twenyone()
//Bonus can you make it print '21' 21 times to the dom?
function twenyone(){
    for(let i = 1; i<22; i++){
        document.querySelector('#savageSays').innerHTML+=' 21'
    }
}
twenyone()