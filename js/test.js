function palindrome(str) {
  str = str.toLowerCase();
  str = str.trim();
  return str === str.split("").reverse().join("");
}

console.log(palindrome("_eye"));

palindrome("eye");
