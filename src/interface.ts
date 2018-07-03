module Tsinterface{
    export interface IPerson{    
        firstName: string;
        lastName?: string;
    }
    
   export function greeter(person: IPerson){

        if(person.lastName)
            return "Hello " + person.firstName + " " + person.lastName + ".";

        return "Hello " + person.firstName + ".";
    }
    
    var myVar: IPerson =  { firstName:"Sylvain", lastName: "Sidambarom"};
    var invalidPerson =  { firstName:"Tintin"};
    
    greeter(myVar); //  Hello Sylvain Sidambarom.
    
    // greeter(invalidPerson);
    
}


var myVar: Tsinterface.IPerson =  { firstName:"Sylvain", lastName: "Sidambarom"};
var invalidPerson =  { firstName:"Tintin"};

document.getElementById("display").innerHTML = Tsinterface.greeter(myVar);