// input password length area assignment
var selectLength = document.querySelector("#totalNumChar");

// checkbox assignments
var selectSpec = document.querySelector("#needSpecialChar");
var selectNum = document.querySelector("#needNumericChar");
var selectLower = document.querySelector("#needLowercaseChar");
var selectUpper = document.querySelector("#needUppercaseChar");

// button assignments
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");







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

