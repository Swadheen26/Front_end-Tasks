// UniqueString

function UniqueString(strings) {
    return strings.reduce((acc, string) => {
      acc[string] = (acc[string] || 0) + 1;
      return acc;
    }, {});
  }
  
  const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple"
  ];
  
  console.log(UniqueString(strings));
  
//   ProductOfMultipleOfThreeOrFive:

function ProductOfMultipleOfThreeOrFive(numbers) {
    return numbers.reduce(
      (acc, num) => (num % 3 === 0 || num % 5 === 0 ? acc + num : acc),
      0 
    );
  }
  
  const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
  console.log(ProductOfMultipleOfThreeOrFive(numbers)); 

// Filter Functions:
// palindromesString:

function palindromesString(words) {
    return words.filter((word) => word === word.split("").reverse().join(""));
  }
  
  const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript"
  ];
  
  console.log(palindromesString(words)); 
  
//   findlmage:
function findImage(filePaths) {
    return filePaths.filter(
      (filePath) => filePath.endsWith(".png") || filePath.endsWith(".jpg")
    );
  }
  
  const filePaths = [
    "/images/picl.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",  
    "/assets/img/logo.png",
    "/downloads/document.pdf",   
    "/downloads/image.png",
    "/downloads/image.jpg"
  ];
  
  console.log(findImage(filePaths));


//   Map Functions:

// swapStrings 
function swapStrings(strings) {
    return strings.map((string) =>
      string.length > 1
        ? string[string.length - 1] + string.slice(1, -1) + string[0]
        : string
    );
  }
  
  const stringsSwap = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings"
  ];
  
  console.log(swapStrings(stringsSwap)); 
  

//   ForEach Functions:
function countWords(sentences) {
    sentences.forEach((sentence, index) => {
      const words = sentence.split(" ").filter((word) => word !== ""); 
      console.log(`Sentence ${index + 1} contains ${words.length} words.`);
    });
  }
  
  // Example usage:
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth."
  ];
  
  countWords(sentences);
  

//   sumOfSquaresOfOddNumbers
function sumOfSquaresOfOddNumbers(numbers) {
    return numberss
      .filter((num) => num % 2 !== 0)       // Step 1: Filter odd numbers
      .map((oddNum) => oddNum ** 2)          // Step 2: Square each odd number
      .reduce((acc, square) => acc + square, 0); // Step 3: Sum the squares
  }
  
  const numberss = [1, 2, 3, 4, 5, 7];
  
  console.log(sumOfSquaresOfOddNumbers(numbers)); 
  