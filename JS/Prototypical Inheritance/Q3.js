// 1. Define the base class 'Customer' using ES6 class
class Customer {
    constructor(name) {
        this.name = name;
        this.rentedCars = [];
    }

    // Method to rent a car
    rentCar(car) {
        if (car.isAvailable) {
            car.isAvailable = false;
            this.rentedCars.push(car);
            console.log(`${this.name} rented the car: ${car.make} ${car.model}`);
        } else {
            console.log(`Sorry, the car ${car.make} ${car.model} is already rented.`);
        }
    }

    // Method to return a car
    returnCar(car) {
        const carIndex = this.rentedCars.indexOf(car);
        if (carIndex !== -1) {
            this.rentedCars.splice(carIndex, 1);
            console.log(`${this.name} returned the car: ${car.make} ${car.model}`);
            
            setTimeout(() => {
                car.isAvailable = true;
                console.log(`Car ${car.make} ${car.model} is now available.`);
            }, 2000);
        } else {
            console.log(`${this.name} does not have this car.`);
        }
    }
}

// 2. Define the 'PremiumCustomer' class that extends 'Customer'
class PremiumCustomer extends Customer {
    constructor(name, discountRate) {
        super(name);  // Call the parent class's constructor
        this.discountRate = discountRate;
    }
}

// 3. Define the 'Car' class
class Car {
    constructor(make, model, year, type, basePrice) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = type;
        this.basePrice = basePrice;
        this.isAvailable = true; // Default is available
    }
}

// 4. Rental price calculation 
function calculateRentalPrice(car, days, customer) {
    let price = car.basePrice * days;
    if (car.type === 'SUV') price *= 1.2; // Increase price for SUV
    if (car.type === 'Sedan') price *= 1.1; // Increase price for Sedan
    
    if (customer instanceof PremiumCustomer) {
        price *= (1 - customer.discountRate); // Apply discount for PremiumCustomer
    }

    console.log(`Rental price for ${car.make} ${car.model} for ${days} day(s): ${price.toFixed(2)}`);
    return price;
}

// 5. Maintenance function with delay
function Maintenance(car, delay) {
    console.log(`Car ${car.make} ${car.model} is under maintenance...`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`Car ${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// 6. Demonstration
// Creating car objects
const nexon = new Car('TATA', 'Nexon', 2022, 'SUV', 1100);
const baleno = new Car('SUZUKI', 'Baleno', 2021, 'Sedan', 900);
const seltos = new Car('KIA', 'Seltos', 2023, 'SUV', 1500);

// Creating customers
const swadheen = new Customer('Swadheen');
const satya = new PremiumCustomer('Satya', 0.1); // Premium customer with 10% discount

// Show rentals
swadheen.rentCar(nexon);
calculateRentalPrice(nexon, 3, swadheen);

satya.rentCar(seltos);
calculateRentalPrice(seltos, 5, satya);

// Return cars
swadheen.returnCar(nexon);
satya.returnCar(seltos);

// Maintenance
Maintenance(baleno, 3000);
