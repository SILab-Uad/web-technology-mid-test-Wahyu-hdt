// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  let passwordCharacterSet = "";
  if (options.includeUppercase) passwordCharacterSet += uppercase;
  if (options.includeLowercase) passwordCharacterSet += lowercase;
  if (options.includeNumbers) passwordCharacterSet += numbers;
  if (options.includeSpecialChars) passwordCharacterSet += specialChars;

  if (passwordCharacterSet === "") {
    throw new Error("You must select atleast one option");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const pwIndex = Math.floor(Math.random() * passwordCharacterSet.length);
    password += passwordCharacterSet[pwIndex];
  }
  return password;
};

// Cek modul Node.js
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { generatePassword };
}
