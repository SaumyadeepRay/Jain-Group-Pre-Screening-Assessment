function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string and compare it with the original
  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}

// Example usage:
const inputString = "A man, a plan, a canal, Panama";
const result = isPalindrome(inputString);
console.log(`Is "${inputString}" a palindrome? ${result}`); // Output: Is "A man, a plan, a canal, Panama" a palindrome? true
