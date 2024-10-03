
function iPhone1(ASIN, display, color, camera) {
    return {
        ASIN: ASIN,               // Unique product identifier
        display: display,         // Display size in inches
        color: color,             // Color of the iPhone
        camera: camera,           // Camera specifications
        
        // Method to dial a number
        dial: function() {
            return "tring.. tring...";
        },
        
        // Method to send a message
        sendMessage: function() {
            return "Sending message...";
        },
        
        // Method to simulate camera click
        cameraClick: function() {
            return "Camera clicked";
        }
    };
}

let i1 = iPhone1(
    "BO9IX67IBQV", 
    7.8,
    "Gray",        
    "2.0 MP"       
);

console.log(i1.ASIN);      
console.log(i1.display);   
console.log(i1.color);     
console.log(i1.camera);    

// Using methods
console.log(i1.dial());        
console.log(i1.sendMessage());
console.log(i1.cameraClick()); 