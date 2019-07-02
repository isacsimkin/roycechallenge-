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
       
        var i = []; // array of arrays containing superpowers of the input superheroes. 
        var caller = this.powers; // array with the superpowers of the caller.

    //    var difference; //return object with least difference. 
    //    var firstCount;
    //    var secondCount;
       for (var x = 0; x < heroes.length; x++){
            i.push(heroes[x].powers);
       }
      
       for (var f = 0; f < caller.length; f++){
            // console.log(caller[f]);
            let count = 0;
            for(var j = 0; j < i.length; j++){
                var comp = i[j];
                // console.log(comp);
                
                for (var h = 0; h < comp.length; h++){
                     
                    if (this.powers[f] == comp[h]){
                        count++;
                        console.log(this.powers[f] + ", " + comp[h] + ". They are equal ");
                    }else{
                        console.log(this.powers[f] + ", " + comp[h]);
                    }
                    console.log(count);
                }
                console.log("-------");
                
            }

            
            // console.log(comp);
       }
       

        // return this.powers; 
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

    const perfectPartner = hulk.findPartner([mera, batman])
    // console.log(perfectPartner);
    

//2. ======================================================


function filter(heroes, superPower) {
    
}

//const canFly = filter([batman, superman, aquaman], Powers.FLIGHT) // -> [ Hero { name: 'superman', powers: [ 1, 2, 8, 6, 11 ] } ]
//console.log(canFly)