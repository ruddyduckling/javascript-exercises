const repeatString = function(string, num) {
  let longerString = "";
  if (num < 0) return "ERROR";
  for (let i = 0 ; i < num ; i++) {
     longerString += string;
  }
  return longerString;
};

// Do not edit below this line
module.exports = repeatString;
