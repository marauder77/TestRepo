//PART ONE
class vehicle {
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
    honk() {
        return "beep";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}
//PART TWO
class Car extends vehicle {
constructor(make, model, year){
    super(make, model, year)
    this.numWheels = 4;
}
}
//PART THREE
class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}
//PART FOUR
class Garage {
    constructor(capacity) {
        this.garage = []
        this.garage = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "sorry, we're full.";
        
        }
        this.vehicles.push(newVehicle);
        return "vehicle added!"
    }
}