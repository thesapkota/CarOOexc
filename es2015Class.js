//Part One
class Vehicle {
    constructor(make, model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }

}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();


//Part Two
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);

//PArt Three
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

//Part Four

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(addVehicle){
        if(addVehicle instanceof Vehicle) {
            if(this.vehicles.length >= this.capacity){
                return "Sorry, we're full.";
            }
            this.vehicles.push(addVehicle);
            return "Vehicle added!";
        }
        else{
            return "Only vehicles are allowed here!";
        }
    }
}
