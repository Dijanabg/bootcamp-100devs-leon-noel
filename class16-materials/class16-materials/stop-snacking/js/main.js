//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stop)

function stop(){
    let x = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerHTML =' '
    for (let i=1; i<=x; i++){
        document.querySelector('#stops').innerHTML+=' STOP'
    }
}