// input password length area assignment
var selectLength = document.querySelector("#totalNumChar");

// checkbox assignments
var selectSpec = document.querySelector("#needSpecialChar");
var selectNum = document.querySelector("#needNumericChar");
var selectLower = document.querySelector("#needLowercaseChar");
var selectUpper = document.querySelector("#needUppercaseChar");

// button assignments
var generateButton = document.querySelector("#generate");
var copyButton = document.querySelector("#copy");

// display area for final password assignment
var finalPassword = document.querySelector("#password");


// validate entered length is within range 8 - 128


// validate checkboxes - user selected at least one character type
function validate() {
  var validateCheckboxes = document.getElementsByClassName(".checkbox[]");
  
  if(checkbox[0].checked==false && checkbox[1].checked==false && checkbox[2].checked==false && checkbox[3].checked===false) {
      alert('Please check at least one of the character types.');
    return false;
  }
  return true;
}



// event listener to Generate Password button
generateButton.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordLength = +selectLength.value;
  var specialYes = selectSpec.checked;
  var numericYes = selectNum.checked;
  var lowerYes = selectLower.checked;
  var upperYes = selectUpper.checked;

  console.log(passwordLength, specialYes, numericYes, lowerYes, upperYes);
  
  finalPassword.innerText = createPassword(passwordLength, specialYes, numericYes, lowerYes, upperYes);
}

// associate random functions below to user checkbox selections


// functions to generate random special character, number, lowercase, 
// and uppercase characters using assigned character numbers
// https://www.ascii-code.com/
function randomSpecialCharacter() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 33);
}

function randomNumericCharacter() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function randomLowercaseCharacter() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function randomUppercaseCharacter() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

// concatenate all random characters to create password
// with .toString???

// display final generated password in box for user to view and copy


/*
// event listener to copy password button
copyBtn.addEventListener("click", copyPassword);

// Write password to the #copy input . . . fix below
function copyToClipboard() {
  

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

*/

