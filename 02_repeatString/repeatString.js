const repeatString = function(string, num) {
  let longerString = "";
  for (let i = 0 ; i < num ; i++) {
     longerString += string;
  }
  return longerString;
};

// Do not edit below this line
module.exports = repeatString;
