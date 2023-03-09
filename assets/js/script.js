// Assignment code here
function generatePassword() {

    var password = '';
    var required = [];
    // asking the length of the new password
    var length = prompt("How many characters would you like your password to contain?");
    console.log(length);
  
    // ask if the password need special characters
    var specialCharacter = confirm("Click OK to confirm including special characters.");
    console.log(specialCharacter);
    required.push(specialCharacter);

    // ask if the password need numerical values
    var numericalCharacter = confirm("Click OK to confirm including numerical characters.");
    console.log(numericalCharacter);
    required.push(numericalCharacter);
  
    // ask if the password need lowercase characters
    var lowercase = confirm("Click OK to confirm including lowercase characters.");
    console.log(lowercase);
    required.push(lowercase);
  
    // ask if the password need uppercase characters
    var uppercase = confirm("Click OK to confirm including uppercase characters.");
    console.log(uppercase);
    required.push(uppercase);

    // for (let i = 0; i < required.length; i++) {
    //   console.log(required[i]);      
    // }

    var requirements = required.filter(checkTrue).length;
    console.log(required.filter(checkTrue).length);

    // check how many requirements are chosen
    // Special characters, Numerical characters, lowercase, uppercase
    function checkTrue(require) {
      return require == true;
    }

    // if only one of them were chosen True
    if (requirements == 1) {
      console.log("Going to generate password.")
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
}

// generate secure password with two requirement
function generateTwo(length, sc, nc, lc, uc) {
  
}

// generate secure password with three requirement
function generateThree(length, sc, nc, lc, uc) {
  
}

// generate secure password with four requirement
function generateFour(length, sc, nc, lc, uc) {
  
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
