/**
 * 1. Write a method on Hero that finds its best possible partner: the best possible partner is the one with the least amount of overlapping superpowers
 * 2. Bonus: Write a function that filters superheroes based on their superpowers.
 */

var Powers = {
    SUPER_TECH: "SUPER_TECH",
    SUPER_STRENGTH: "SUPER_STRENGTH",
    FLIGHT: "FLIGHT",
    INVISIBILITY: "INVISIBILITY",
    WEATHER_CONTROL: "WEATHER_CONTROL",
    SEALIFE_CONTROL: "SEALIFE_CONTROL",
    X_RAY_VISION: "X_RAY_VISION",
    SUPER_AGILITY: "SUPER_AGILITY",
    MIND_READING: "MIND_READING",
    SELF_HEALING: "SELF_HEALING",
    SWIMMING_PROWESS: "SWIMMING_PROWESS",
    UNDERWATER_BREATHING: "UNDERWATER_BREATHING",
    SUPER_WEALTH: "SUPER_WEALTH", 
    SUPER_SPEED: "SUPER_SPEED"
}

class Hero {

    constructor(name, powers){
        this.name = name
        this.powers = powers
    }

    findPartner(heroes) {
    
        var name;
        var max = Number.POSITIVE_INFINITY; 
        var callerPow = this.powers;

        for (var i = 0; i < heroes.length; i++){
            var arrName = heroes[i].name;
            var arr = heroes[i].powers;
            var intersection = callerPow.filter(value => arr.includes(value)); //finds common elements when comparing power lists

            // console.log(intersection.length + " " + arrName + " " + max);
            if (intersection.length < max){ //compares length to check for the least amount of overlap
                max = intersection.length;
                name = arrName;
            }

        }
        
        return (this.name + " is perfect partner with " + name);        
    }
}

const batman    = new Hero("batman",   [Powers.SUPER_WEALTH, Powers.SUPER_TECH])
const superman  = new Hero("superman", [Powers.SUPER_STRENGTH, Powers.FLIGHT, Powers.X_RAY_VISION, Powers.SUPER_SPEED, Powers.SELF_HEALING])
const aquaman   = new Hero("aquaman",  [Powers.SWIMMING_PROWESS, Powers.SEALIFE_CONTROL, Powers.UNDERWATER_BREATHING])
const storm     = new Hero("storm",    [Powers.WEATHER_CONTROL, Powers.FLIGHT])
const hulk      = new Hero("hulk",     [Powers.SUPER_STRENGTH, Powers.SELF_HEALING])
const ironman   = new Hero("ironman",  [Powers.SUPER_STRENGTH, Powers.SELF_HEALING, Powers.SUPER_WEALTH, Powers.FLIGHT, Powers.SUPER_TECH])
const mera      = new Hero("mera",     [Powers.SUPER_STRENGTH, Powers.UNDERWATER_BREATHING, Powers.SWIMMING_PROWESS])
const ultraboy  = new Hero("ultraboy", [Powers.X_RAY_VISION, Powers.SUPER_STRENGTH, Powers.SUPER_SPEED])

//1. ======================================================

    const perfectPartner = hulk.findPartner([ironman, batman, storm, mera])
    console.log(perfectPartner);
    
//2. ======================================================


function filter(heroes, superPower) {

    var resArr = [];
    for (var i = 0; i < heroes.length; i++){ 
        
        var arr = heroes[i].powers;
        if (arr.includes(superPower)){
            resArr.push(heroes[i]);
        }else{
            continue;
        }
    }
    return resArr;
}

const canFly = filter([batman, superman, aquaman], Powers.FLIGHT) // -> [ Hero { name: 'superman', powers: [ 1, 2, 8, 6, 11 ] } ]
console.log(canFly)