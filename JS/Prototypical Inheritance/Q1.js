function Animal() {
    this.type = "Animal";
}

Animal.prototype.sound = function() {
    console.log("Animal sound");
};

// 3. Constructor function Dog that inherits from Animal.
function Dog() {
    Animal.call(this);
}

// 4. Ensure that Dog.prototype inherits from Animal.prototype.
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Set the constructor back to Dog

// 5. Override the sound method in Dog.prototype to log "Bark".
Dog.prototype.sound = function() {
    console.log("Bark");
};

let myDog = new Dog();

myDog.sound();
