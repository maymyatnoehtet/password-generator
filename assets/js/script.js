// Assignment code here
var special = '!@#$%^&*()_+=<>?,./:;\'|{}[]';
var numerical = '1234567890';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// validating the input and return the validated
function validateLength(input) {
  var inputInt = parseInt(input);
  var valid = false;
  while(!valid) {

    // for debugging
    console.log(typeof(inputInt));
    // the input needs to be an integer and between 8 - 128.
    if((inputInt != (/^[0-9.,]*$/) && ((input < 8) || (input > 128)))) {
      console.log("Is input the number?: " + (inputInt != (/^[0-9.,]*$/)));
      input = prompt("Please enter the integer between 8-128: ");
      console.log("Is it valid?: " + valid);
    }
    else {
      valid = true;
    }
  }
  return input;
}

// generating secure password
function generatePassword() {

    var password = '';
    var length;
    var specialCharacter;
    var numericalCharacter;
    var lowercase;
    var uppercase;

    // asking the length of the new password
    length = prompt("How many characters would you like your password to contain?");
    console.log(length);

    length = validateLength(length);
    console.log("Validated Length: " + length);
  
    var required = [];
  
    required = selectPasswordCriterias();

    // number of "True" for password requirements
    var requirements = required.filter(checkTrues).length;
    console.log(required.filter(checkTrues).length);

    // when none of the criteria is selected
    // ask the user to reselect the criterias 
    while (requirements < 1) {
      alert("At least one criteria needs to be true.");
      required = selectPasswordCriterias();
      requirements = required.filter(checkTrues).length;
    }

    specialCharacter = required[0];
    numericalCharacter = required[1];
    lowercase = required[2];
    uppercase = required[3];

    // check how many requirements are chosen
    // Special characters, Numerical characters, lowercase, uppercase
    function checkTrues(require) {
      return require == true;
    }

    // if only one of them were chosen True
    if (requirements == 1) {
      password = generateOne(length, specialCharacter, numericalCharacter, lowercase, uppercase);
    }
    // if two of them were chosen True
    else if (requirements == 2) {
      password = generateTwo(length, specialCharacter, numericalCharacter, lowercase, uppercase);
    }
    // if three of them were chose True
    else if (requirements == 3) {
      password = generateThree(length, specialCharacter, numericalCharacter, lowercase, uppercase);
    }
    // if all of them were chosen True
    else {
      password = generateFour(length);
    }
    return password;
}

// ask user to select which characters to be included in the password
function selectPasswordCriterias() {
  var specialCharacter;
  var numericalCharacter;
  var lowercase;
  var uppercase;
  // ask if the password need special characters
  specialCharacter = confirm("Click OK to confirm including special characters.");    
  console.log(specialCharacter);

  // ask if the password need numerical values
  numericalCharacter = confirm("Click OK to confirm including numerical characters.");
  console.log(numericalCharacter);

  // ask if the password need lowercase characters
  lowercase = confirm("Click OK to confirm including lowercase characters.");
  console.log(lowercase);
  
  // ask if the password need uppercase characters
  uppercase = confirm("Click OK to confirm including uppercase characters.");
  console.log(uppercase);

  return [specialCharacter, numericalCharacter, lowercase, uppercase];
}

// generating random string
function generateRandomString(length, characters) {
   var charLength = characters.length;
   var result = '';
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charLength));
   }
   return result;
}

// generate secure password with one requirement
function generateOne(length, sc, nc, lc, uc) {

  var randomString = '';
  if(sc == true) {
    var characters = special;
    randomString = generateRandomString(length, characters);
    console.log(randomString);
  }
  else if(nc == true) {
    var characters = numerical;
    randomString = generateRandomString(length, characters);
    console.log(randomString);
  }
  else if(lc == true) {
    var characters = lowerCase;
    randomString = generateRandomString(length, characters);
    console.log(randomString);

  }
  else if(uc == true) {
    var characters = upperCase;
    randomString = generateRandomString(length, characters);
    console.log(randomString);
  }
  return randomString; 
}

// generate secure password with two requirements
function generateTwo(length, sc, nc, lc, uc) {
  var randomString = '';

  // generate random string of special characters
  // generate random string of numerical characters
  // from the two same length of special and numerical characters strings 
  // random generate another string with both characters
  if ((sc == true) && (nc == true)) {
    randomString = generateRandomString(length, special);
    randomString += generateRandomString(length, numerical);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);  
  }

  else if ((sc == true) && (lc == true)) {
    randomString = generateRandomString(length, special);
    randomString += generateRandomString(length, lowerCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);  
  }

  else if ((sc == true) && (uc == true)) {
    randomString = generateRandomString(length, special);
    randomString += generateRandomString(length, upperCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);  
  }

  else if ((nc == true) && (lc == true)) {
    randomString = generateRandomString(length, numerical);
    randomString += generateRandomString(length, lowerCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);  
  }

  else if ((nc == true) && (uc == true)) {
    randomString = generateRandomString(length, numerical);
    randomString += generateRandomString(length, upperCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);  
  }

  else if ((lc == true) && (uc == true)) {
    randomString = generateRandomString(length, lowerCase);
    randomString += generateRandomString(length, upperCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);    
  }

  return randomString;  
}

// generate secure password with three requirements
function generateThree(length, sc, nc, lc, uc) {
  var randomString = '';

  /* Special characters, Numerical Numbers, Lowercase */
  if ((sc == true) && (nc == true) && (lc == true)) {
    randomString = generateRandomString(length/2, special);
    randomString += generateRandomString(length/2, numerical);
    randomString += generateRandomString(length/2, lowerCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);  
  }

  /* Special characters, Numerical Numbers, Uppercase */
  else if ((sc == true) && (nc == true) && (uc == true)) {
    randomString = generateRandomString(length/2, special);
    randomString += generateRandomString(length/2, numerical);
    randomString += generateRandomString(length/2, upperCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);  
  }

  /* Special characters, Lowercase, Uppercase */
  else if ((sc == true) && (lc == true) && (uc == true)) {
    randomString = generateRandomString(lengt/2, special);
    randomString += generateRandomString(length/2, lowerCase);
    randomString += generateRandomString(length/2, upperCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);  
  }

  /* Numerical Numbers, Lowercase, Uppercase */
  else if ((nc == true) && (lc == true) && (uc == true)) {
    randomString = generateRandomString(length/2, numerical);
    randomString += generateRandomString(length/2, lowerCase);
    randomString += generateRandomString(length/2, upperCase);
    randomString = generateRandomString(length, randomString);
    console.log(randomString);   
  }
  return randomString;
}

// generate secure password with four requirements
function generateFour(length) {
  var randomString = '';
  randomString = generateRandomString(length/2, special);
  randomString += generateRandomString(length/2, numerical);
  randomString += generateRandomString(length/2, lowerCase);
  randomString += generateRandomString(length/2, upperCase);
  randomString = generateRandomString(length, randomString);
  console.log(randomString);    
  return randomString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
