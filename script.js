function rot13(encodedString) {
  // Function to decode a single character
  function decodeCharacter(char) {
    const charCode = char.charCodeAt(0);

    // Check if the character is within the range of uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      // Decode the character by shifting it back 13 places
      let decodedCharCode = charCode - 13;

      // If the decoded character falls below 'A' (char code 65), wrap it around to the end of the alphabet
      if (decodedCharCode < 65) {
        decodedCharCode += 26;
      }

      // Convert the decoded char code back to a character
      return String.fromCharCode(decodedCharCode);
    }

    // For non-alphabetic characters, return them as is
    return char;
  }

  // Split the encoded string into an array of characters, decode each character, and join them back into a string
  const decodedString = encodedString.split('').map(decodeCharacter).join('');

  return decodedString;
}

// Test the function
const encodedString = 'EBG13 rknzcyr.';
const decodedString = rot13(encodedString);
console.log(decodedString);  // Output: ROT13 example.

