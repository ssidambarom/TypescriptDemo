module TsDependency{
    export class Car{

        public name: string;
        /**
         *
         */
        constructor(name: string) {
        }
    }
}

module TsExecution{
    export class HighWay{

        private cars: Array<TsDependency.Car>;
        /**
         *
         */
        constructor(cars: Array<TsDependency.Car>) {      
            this.cars = cars;      
        }

        public IsAllow(car: TsDependency.Car): boolean{            
            return this.cars.find((c, i,e)=> c.name == car.name) != null;
        }

        public greeter(car: TsDependency.Car): string{
            return "Welcome " + car.name;
        }
    }
}

var allowCars : Array<TsDependency.Car> = [
    new TsDependency.Car("Peugeot"),
    new TsDependency.Car("Renault"),
    new TsDependency.Car("Citroën")
];

var myHighWay = new TsExecution.HighWay(allowCars);

var car  = new TsDependency.Car("BMW");

console.log(myHighWay.IsAllow(car));

document.getElementById("display").innerHTML = myHighWay.greeter(car);