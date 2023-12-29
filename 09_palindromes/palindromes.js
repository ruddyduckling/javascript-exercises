const palindromes = function (string) {
  let newString = string.toLowerCase()
                          .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
  const reverseString = newString.split('')
                                  .reverse()
                                  .join('');
  
  return newString == reverseString ? true: false;
}

// Do not edit below this line
module.exports = palindromes;
