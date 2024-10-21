// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {
  // Character sets for password generation
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  // TODO: Create a variable for the character set based on selected options

  let passwordCharacterSet = "";
  if (options.includeUppercase) passwordCharacterSet += uppercase;
  if (options.includeLowercase) passwordCharacterSet += lowercase;
  if (options.includeNumbers) passwordCharacterSet += numbers;
  if (options.includeSpecialChars) passwordCharacterSet += specialChars;

  if (passwordCharacterSet === "") {
    alert("You must select atleast one option");
    return;
  }

  // TODO: Generate the password based on the selected criteria
  let password = "";
  for (let i = 0; i < length; i++) {
    const pwIndex = Math.floor(Math.random() * passwordCharacterSet.length);
    password += passwordCharacterSet[pwIndex];
  }
  return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById("generateBtn").addEventListener("click", function () {
  const length = parseInt(document.getElementById("length").value);
  const options = {
    includeUppercase: document.getElementById("includeUppercase").Checked,
    includeLowercase: document.getElementById("includeLowercase").checked,
    includeNumbers: document.getElementById("includeNumbers").checked,
    includeSpecialChars: document.getElementById("includeSpecialChars").checked,
  };
  const password = generatePassword(length, options);
  document.getElementById("passwordOutput").innerText = password;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById("copyBtn").addEventListener("click");
