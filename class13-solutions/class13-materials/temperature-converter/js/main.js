//Write your pseduo code first! 
////0-32 f
//value in selseeyus
//selseeyus * fairinheight convert
//show it
document.querySelector('#convert').addEventListener('click', convert)

function convert(){
    const c = document.querySelector('#c').value
    let f = c * 9/5 + 32
    document.querySelector('#placeToF').innerText=f
}
