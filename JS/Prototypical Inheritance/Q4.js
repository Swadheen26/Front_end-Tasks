// 1. Base Class for common product features
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to display product details 
    getProductDetails() {
        console.log(`Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }

    // Method to update quantity 
    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
        console.log(`${this.name} quantity updated to ${this.quantity}`);
    }
}

// 2. Electronics class inheriting from Product
class Electronics extends Product {
    constructor(name, price, quantity, brand, model) {
        super(name, price, quantity); // Call the parent class constructor (Product)
        this.brand = brand;
        this.model = model;
    }

    // Unique methods for Electronics
    powerOn() {
        console.log(`${this.brand} ${this.model} is now powered ON.`);
    }

    powerOff() {
        console.log(`${this.brand} ${this.model} is now powered OFF.`);
    }
}

// 3. Clothing class inheriting from Product
class Clothing extends Product {
    constructor(name, price, quantity, size, material) {
        super(name, price, quantity); // Call the parent class constructor (Product)
        this.size = size;
        this.material = material;
    }

    // Unique method for Clothing
    getSize() {
        console.log(`${this.name} is available in size ${this.size}.`);
    }
}

// 4. Books class inheriting from Product
class Book extends Product {
    constructor(name, price, quantity, author, genre) {
        super(name, price, quantity); // Call the parent class constructor (Product)
        this.author = author;
        this.genre = genre;
    }

    // Unique method for Book
    getAuthor() {
        console.log(`The author of "${this.name}" is ${this.author}.`);
    }
}

// Demonstration
// 5. Creating instances and demonstrating functionality

// Electronics
const laptop = new Electronics('Laptop', 1500, 10, 'Apple', 'MacBook Pro');
laptop.getProductDetails();   
laptop.powerOn(); 
laptop.powerOff();
laptop.updateQuantity(8);     

console.log('------------------------------------');

// Clothing
const tShirt = new Clothing('T-Shirt', 25, 50, 'L', 'Cotton');
tShirt.getProductDetails();   
tShirt.getSize();            
tShirt.updateQuantity(45);    
console.log('-----------------------------------');

// Books
const novel = new Book('Psychology of Money', 15, 100, 'Money Minded', 'Classic Fiction');
novel.getProductDetails();    
novel.getAuthor();            
novel.updateQuantity(98);     