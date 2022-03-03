 // Getting the DOM Elements; grab each Id on the document to be able to access and manipulate it
const resultDOM = document.getElementById("result");
const copybtnDOM = document.getElementById("copy");
const lengthDOM = document.getElementById("length");
const uppercaseDOM = document.getElementById("uppercase");
const numbersDOM = document.getElementById("numbers");
const symbolsDOM = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
//Grab the entire form to submit
const form = document.getElementById("passwordGeneratorForm");

// Create arrays using ASCII chart (see chart in README file)
//65=A 90=Z
//97=a 122=z
//48=0 57=9
//33=! 47=/
const UPPERCASE_CODES = rangeOfAsc(65, 90);
const LOWERCASE_CODES = rangeOfAsc(97, 122);
const NUMBER_CODES = rangeOfAsc(48, 57);
const SYMBOL_CODES = rangeOfAsc(33, 47)
  .concat(rangeOfAsc(58, 64))
  .concat(rangeOfAsc(91, 96))
  .concat(rangeOfAsc(123, 126));

// Create a function to loop through values within the arrays
function rangeOfAsc(low, high) {
    //Create an empty array
    const array = [];
    //Loop through and push each ASC number into array
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

    // The Password Generating Function
    // Create a large array that contains all options selected by user
    //Use .concat to join two or more strings
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    // By default, lowercase letters will be included in generated password
    let charCodes = LOWERCASE_CODES;
    // If user selects uppercase option, add uppercase letters to charCodes
    if (includeUppercase) {
      charCodes = charCodes.concat(UPPERCASE_CODES);
    }
    // If user selects symbols option, add symbols to charCodes
    if (includeSymbols) {
      charCodes = charCodes.concat(SYMBOL_CODES);
    }
    // If user selects numbers option, add numbers to charCodes
    if (includeNumbers) {
      charCodes = charCodes.concat(NUMBER_CODES);
    }
    // Create an empty array that will have randomly selected characters added to it
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      // Generate a random index position from the charCodes array
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      // We take the empty array and add the character (converted from the ASCII number)
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    // returns the array of randomly password characters as a string
    return passwordCharacters.join('');
  }

  // Create a function to submit the entire form
  //element.addEventListener(action, function)
  form.addEventListener('submit', submitForm);

function submitForm(event) {
  // Disables the default behavior of reloading the page when submitting a form using the function
  event.preventDefault();
  // Pull in the user's inputs and assign to variables
  //Take variables created for generatePassword function and connect it with the user's inputs
  const characterAmount = lengthDOM.value;
  const includeUppercase = uppercaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
}







 
