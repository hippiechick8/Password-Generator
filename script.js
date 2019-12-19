




      // Assignment Code
      var generateBtn = document.querySelector("#generate");


/* functions to generate random special character, number, lowercase, 
  and uppercase characters using assigned character numbers
  https://www.ascii-code.com/ */

function specialCharacter() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 33);
}

function uppercaseCharacter() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function lowercaseCharacter() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function numericCharacter() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}





      // Write password to the #password input
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

        copyBtn.removeAttribute("disabled");
        copyBtn.focus();
      }

      function copyToClipboard() {
        // BONUS 
      }

      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);

      // BONUS EVENT LISTENER
