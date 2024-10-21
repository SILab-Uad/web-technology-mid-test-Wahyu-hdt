// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  let characterSet = "";
  if (options.includeUppercase) characterSet += uppercase;
  if (options.includeLowercase) characterSet += lowercase;
  if (options.includeNumbers) characterSet += numbers;
  if (options.includeSpecialChars) characterSet += specialChars;

  if (characterSet === "") {
    throw new Error("You must select atleast one option");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  return password;
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { generatePassword };
}

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

document.getElementById("copyBtn").addEventListener("click");
