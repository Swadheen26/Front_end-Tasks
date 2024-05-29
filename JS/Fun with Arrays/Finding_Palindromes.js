function findPalindromes(numStrings, stringList) {
    // Helper function to check if a string is a palindrome
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    // Array to store the palindromes found
    const palindromes = [];

    // Loop through the string list and check for palindromes
    for (let i = 0; i < numStrings; i++) {
        if (isPalindrome(stringList[i])) {
            palindromes.push(stringList[i]);
        }
    }

    // return palindromes;

    // Print the results
    if (palindromes.length > 0) {
        console.log("Palindromes found in the list are:");
        palindromes.forEach(palindrome => console.log(palindrome));
    } else {
        console.log("No palindromes found.");
    }
}

// Example Invocation
const numStrings = 5;
const stringList = ["radar", "hello", "madam", "world", "level"];
findPalindromes(numStrings, stringList);