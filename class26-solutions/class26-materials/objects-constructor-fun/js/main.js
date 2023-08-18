//Create a constructor with 4 properties and 3 methods
function MakeCar(carMake, carModel, carColor, numDoors){
    this.make=carMake
    this.model=carModel
    this.color=carColor
    this.doors=numDoors

    this.beep = function(){
        alert('Beepbeep fucker..')
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}
let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let renoMegan = new MakeCar('Renault', 'Megan', 'Blue', 4)

renoMegan.lock()