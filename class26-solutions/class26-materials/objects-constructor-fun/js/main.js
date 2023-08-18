//Create a constructor with 4 properties and 3 methods

//es6 version js
class MakeCar{
    constructor(carMake, carModel, carColor, numDoors){
    this.make=carMake
    this.model=carModel
    this.color=carColor
    this.doors=numDoors
    }
    beep(){
        alert('Beepbeep fucker..')
    }
    lock(){
        alert(`Locked ${this.doors} doors!`)
    }
}
let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let renoMegan = new MakeCar('Renault', 'Megan', 'Blue', 4)

renoMegan.lock()