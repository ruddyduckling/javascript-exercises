const reverseString = function(string) {
  let reverse = "";
  for ( i = string.length ; i > 0 ; i--) {
    reverse = `${reverse}${string[i-1]}`;
  }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;


/* A different example showcasing another technique that could have been used
function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"
  
  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

reverseString("hello"); */