const sumAll = function(...args) {
let sum = 0;
let startNum = Math.min(...args);
let endNum = Math.max(...args);

while (startNum <= endNum) {
  sum += startNum;
  startNum++;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
