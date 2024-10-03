class Car {
    constructor(name, accelerationPower, brakingPower, maxFuel) {
        this.name = name;
        this.accelerationPower = accelerationPower; // meters per second squared
        this.brakingPower = brakingPower;           // meters per second squared
        this.speed = 0;                             // Current speed starts at 0
        this.fuel = maxFuel;                        // Start with a full tank
        this.maxFuel = maxFuel;                     // Maximum fuel capacity
    }
    
    // Method to accelerate the car
    accelerate() {
        if (this.fuel > 0) {
            this.speed += this.accelerationPower;
            this.fuel -= 1; // Decrease fuel when accelerating
            console.log(`${this.name}: Accelerating. Current speed is ${this.speed} m/s. Fuel level: ${this.fuel}`);
        } else {
            console.log(`${this.name}: Out of fuel! Cannot accelerate.`);
        }
    }
    
    // Method to apply brakes
    brake() {
        this.speed -= this.brakingPower;
        if (this.speed < 0) this.speed = 0; // Ensure speed does not go below zero
        console.log(`${this.name}: Brakes applied. Current speed is ${this.speed} m/s.`);
    }
    
    // Method to check the current speed of the car
    checkSpeed() {
        console.log(`${this.name}: Current speed is ${this.speed} m/s.`);
        return this.speed;
    }
    
    // Method to refuel the car
    refuel() {
        this.fuel = this.maxFuel;
        console.log(`${this.name}: Refueled to maximum capacity. Fuel level: ${this.fuel}`);
    }
    
    // Method to simulate a driving session
    drive(durationInSeconds, accelerateInterval, brakeInterval) {
        console.log(`${this.name}: Starting a driving session...`);
        
        for (let i = 1; i <= durationInSeconds; i++) {
            // Simulate car behavior every second
            if (i % accelerateInterval === 0 && this.fuel > 0) {
                this.accelerate();
            } else if (i % brakeInterval === 0) {
                this.brake();
            }

            // If the car runs out of fuel, stop accelerating
            if (this.fuel <= 0) {
                console.log(`${this.name}: Ran out of fuel. Stopping the drive.`);
                break;
            }
        }
        
        console.log(`${this.name}: Driving session ended. Final speed: ${this.speed} m/s. Remaining fuel: ${this.fuel}`);
    }
}

// Example Usage

// Create a car instance
const myCar = new Car("Swadheenracer", 5, 3, 10);  // Acceleration of 5 m/s^2, Braking of 3 m/s^2, Max fuel = 10 units

// Check initial speed
myCar.checkSpeed();

// Refuel the car (since it starts with a full tank, this won't change anything here)
myCar.refuel();

// Simulate a driving session: Accelerate every 2 seconds, brake every 3 seconds, drive for 10 seconds
myCar.drive(10, 2, 3);

// Check the final speed after the drive
myCar.checkSpeed();

// Refuel the car and simulate another drive
myCar.refuel();
myCar.drive(8, 2, 4);
