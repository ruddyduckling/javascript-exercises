const sumAll = function(startNum, endNum) {
let sum = 0;
while (startNum <= endNum) {
  sum += startNum;
  startNum++;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
