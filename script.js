// Your Script here.
function rot13(str) {
  let decodedStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    decodedStr += String.fromCharCode(charCode);
  }
  return decodedStr;
}
