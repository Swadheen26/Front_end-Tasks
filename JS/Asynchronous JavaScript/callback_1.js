// Defining calculate function
function Calculate(num1, num2){
    // defining the Operation function
    function Operation(num1, num2, callback){
        return callback(num1, num2);
    }

    // defining addition & multiplication callback
    const addition = (a, b) => a + b;
    const multiplication = (a, b) => a * b;

    const additionRes = Operation(num1, num2, addition);
    const multiplicationRes = Operation(num1, num2, multiplication);

    console.log(`Addition : ${additionRes}`);
    console.log(`Multiplication : ${multiplicationRes}`);
}

Calculate(5, 8);
