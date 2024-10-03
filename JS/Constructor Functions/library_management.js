// Book class
class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
    
    // Method to return book information
    getBookInfo() {
        return `${this.title} by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
    }
}

// Factory function to create a new Book
function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
}

// Library class
class Library {
    constructor() {
        this.books = [];  // Initialize an empty array of books
    }
    
    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
    }
    
    // Method to filter books published after a given year
    filterBooksByYear(year) {
        return this.books.filter(book => book.year > year);
    }
    
    // Method to get an array of all book titles
    getBookTitles() {
        return this.books.map(book => book.title);
    }
    
    // Method to calculate the total number of books
    getTotalBooks() {
        return this.books.reduce((total, book) => total + 1, 0);
    }
    
    // Method to calculate the average publication year of all books
    getAveragePublicationYear() {
        const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
        return totalYears / this.books.length;
    }
}

const library = new Library();

// Add books using the factory function
const book1 = createBook("Do Epic Shit", "Ankoor Wariko", 2021, "Investing");
const book2 = createBook("Don't talk, Build", "Raj Shamani", 2022, "Motivation");
const book3 = createBook("2024", "Swadheen Prusty", 2024, "Life");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Get book titles
console.log(library.getBookTitles()); // ["Do Epic Shit", "Don't talk, Build", "2024"]

// Filter books published after 1950
console.log(library.filterBooksByYear(1950).map(book => book.getBookInfo())); 
// Output: "Don't talk, Build by Raj Shamani, published in 2022, Genre: Motivation"

// Get total number of books
console.log(library.getTotalBooks());

// Get the average publication year
console.log(library.getAveragePublicationYear()); 
