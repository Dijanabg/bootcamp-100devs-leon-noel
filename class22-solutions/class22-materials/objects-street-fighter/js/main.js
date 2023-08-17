//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(punch, kick, taunt, specialMove){
    this.punch = punch
    this.kick = kick
    this.taunt = taunt
    this.spec = specialMove
    this.leftLegKick = function(){
        console.log(`Kick with leg ${this.punch}`)
    }
    this.rightLegKick = function(){
        console.log(`Kick with right leg ${this.specialMove}`)
    }
    this.leftArmKick = function(){
        console.log(`Kick with left arm ${this.taunt}`)
    }
    this.rightArmKick = function(){
        console.log(`Kick with right arm ${this.kick}`)
    }
}
let fighterBob = new MakeFighter('high', 'high', 'get get', 'ohohoho')