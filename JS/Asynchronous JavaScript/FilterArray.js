// Creating an Array
const numbers = [12,45,67,8,90,23,55,78,34,19];

// Creating filterArray function
function filterArray(arr, callback) {
    // creating a new array to store filtered elements
    const filteredArray = [];

    // itterating over each elements
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }

    // Consoling both arrays
    console.log(`Original Array :`, arr);
    console.log(`Filtered Array :`, filteredArray);

    return  filteredArray;   // returning the filtered array
}

// Defining the callback function
function isEven(number) {
    return number % 2 === 0;
}

filterArray(numbers, isEven); // invoking the function with number array & callback function