var TsDependency;
(function (TsDependency) {
    var Car = /** @class */ (function () {
        /**
         *
         */
        function Car(name) {
        }
        return Car;
    }());
    TsDependency.Car = Car;
})(TsDependency || (TsDependency = {}));
var TsExecution;
(function (TsExecution) {
    var HighWay = /** @class */ (function () {
        /**
         *
         */
        function HighWay(cars) {
            this.cars = cars;
        }
        HighWay.prototype.IsAllow = function (car) {
            return this.cars.find(function (c, i, e) { return c.name == car.name; }) != null;
        };
        HighWay.prototype.greeter = function (car) {
            return "Welcome " + car.name;
        };
        return HighWay;
    }());
    TsExecution.HighWay = HighWay;
})(TsExecution || (TsExecution = {}));
var allowCars = [
    new TsDependency.Car("Peugeot"),
    new TsDependency.Car("Renault"),
    new TsDependency.Car("Citroën")
];
var myHighWay = new TsExecution.HighWay(allowCars);
var car = new TsDependency.Car("BMW");
console.log(myHighWay.IsAllow(car));
document.getElementById("display").innerHTML = myHighWay.greeter(car);
