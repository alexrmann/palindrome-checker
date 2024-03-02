// Declare the global variables

// read the value of user input and store it as a variable
let currentInput;

let alphaNumInput;
let reversedInput;

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result");

// when user clicks check button, run the palindrome check function
checkBtn.addEventListener("click", checkPalindrome);

/* function testFunction() {
  console.log("hello world");

} */

function checkPalindrome() {

  // console.log("begin check");
  // Step 1, store the input
  currentInput = document.getElementById("text-input").value;
  // console.log(currentInput);

  // THEN check for input 

  if (currentInput != "") { // if there is input...

    // Step 1, parse the input and store for use
    parseInput(currentInput);
    // Step 2, check the parsed input for palindrome
    evalPalindrome();
  } else { // if there is no input...
      // alert the user to provide input
    alert("Please input a value");
  }

// end of palindrome check function
}


function parseInput(input) {

// Step 1. remove all non-alphanumeric characters (punctuation, spaces and symbols)
  alphaNumInput = input.replace(/[^A-Za-z0-9]/g, '');
  // console.log(alphaNumInput);

// Step 2. make the entire string lower case
  alphaNumInput = alphaNumInput.toLowerCase();
  // console.log(alphaNumInput);

// Step 3. copy the alphanumeric only string to another variable in reverse
  reversedInput = Array.from(alphaNumInput).reverse().join('');
  // console.log(reversedInput);

}


function evalPalindrome() {

  // THEN, check if the alphanumeric (forward and backward strings) are the same

  if (alphaNumInput == reversedInput) {

  // if they are equal, display result box with the input as provided and confirm it is a palindrome
  
    // console.log("This is a palindrome")

    result.innerHTML = `${currentInput} is a palindrome.`

  // if parsed input is not a palindrome, display result box with the input as provided and deny that it is a palindrome
  } else {
    // console.log("Not a palindrome")

    result.innerHTML = `${currentInput} is not a palindrome.`
  }

}