// Assignment code here

// validating the input and return the validated
function validateLength(input) {
  var valid = false;
  while(!valid) {
    // the input needs to be an integer and between 8 - 128.
    if(!Number.isInteger(input) && ((input < 8) || (input > 128))) {
      console.log(input);
      input = prompt("Please enter the integer between 8-128: ");
    }
    else {
      valid = true;
    }
    return input;
  }
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
      password = generateFour(length, specialCharacter, numericalCharacter, lowercase, uppercase);
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
    var characters = '!@#$%^&*()_+=<>?,./:;\'|{}[]';
    randomString = generateRandomString(length, characters);
    console.log(randomString);
  }
  else if(nc == true) {
    var characters = '0123456789';
    randomString = generateRandomString(length, characters);
    console.log(randomString);
  }
  else if(lc == true) {
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    randomString = generateRandomString(length, characters);
    console.log(randomString);

  }
  else if(uc == true) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    randomString = generateRandomString(length, characters);
    console.log(randomString);
  }
  return randomString; 
}

// generate secure password with two requirements
function generateTwo(length, sc, nc, lc, uc) {
  var randomString = '';

  if ((sc == true) && (nc == true)) {
    var characters = '!@#$%^&*()_+=<>?,./:;\'|{}[]1234567890';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  else if ((sc == true) && (lc == true)) {
    var characters = '!@#$%^&*()_+=<>?,./:;\'|{}[]abcdefghijklmnopqrstuvwxyz';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  else if ((sc == true) && (uc == true)) {
    var characters = '!@#$%^&*()_+=<>?,./:;\'|{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  else if ((nc == true) && (lc == true)) {
    var characters = '1234567890abcdefghijklmnopqrstuvwxyz';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  else if ((nc == true) && (uc == true)) {
    var characters = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  else if ((lc == true) && (uc == true)) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  return randomString;  
}

// generate secure password with three requirements
function generateThree(length, sc, nc, lc, uc) {
  var randomString = '';

  /* Special characters, Numerical Numbers, Lowercase */
  if ((sc == true) && (nc == true) && (lc == true)) {
    var characters = '!@#$%^&*()_+=<>?,./:;\'|{}[]1234567890abcdefghijklmnopqrstuvwxyz';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  /* Special characters, Numerical Numbers, Uppercase */
  else if ((sc == true) && (nc == true) && (uc == true)) {
    var characters = '!@#$%^&*()_+=<>?,./:;\'|{}[]1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  /* Special characters, Lowercase, Uppercase */
  else if ((sc == true) && (lc == true) && (uc == true)) {
    var characters = '!@#$%^&*()_+=<>?,./:;\'|{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }

  /* Numerical Numbers, Lowercase, Uppercase */
  else if ((nc == true) && (lc == true) && (uc == true)) {
    var characters = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    randomString = generateRandomString(length, characters);
    console.log(randomString);  
  }
  return randomString;
}

// generate secure password with four requirements
function generateFour(length, sc, nc, lc, uc) {
  var randomString = '';
  var characters = '!@#$%^&*()_+=<>?,./:;\'|{}[]1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  randomString = generateRandomString(length, characters);
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
