// Assignment code here
function generatePassword() {

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

    function checkTrue(require) {
      return require == true;
    }

    if (requirements == 1) {
      generateOne(length);      
    }
    else if (requirements == 2) {
      generateTwo(length);
    }
    else if (requirements == 3) {
      generateThree(length);
    }
    else {
      generateFour(length);
    }
}

// generate secure password with one requirement
function generateOne(length) {
  ...
}

// generate secure password with two requirement
function generateTwo(length) {
  ...
}

// generate secure password with three requirement
function generateThree(length) {
  ...
}

// generate secure password with four requirement
function generateFour(length) {
  ...
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
