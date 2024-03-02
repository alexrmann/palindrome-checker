function palindrome(str) {

  // Declare the global variables

  let alphaNumInput;
  let reversedInput;

  // Step 1. remove all non-alphanumeric characters (punctuation, spaces and symbols) and covert to lower case
  alphaNumInput = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Step 2. copy the alphanumeric only string to another variable in reverse
  reversedInput = Array.from(alphaNumInput).reverse().join('');

  // Step 3. check if the alphanumeric (forward and backward strings) are the same

  if (alphaNumInput == reversedInput) {
    return true;
  } else {
    return false;
  }

}

palindrome("eye");