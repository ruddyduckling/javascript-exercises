const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(someArray) {
   return someArray.reduce((accumulator, item) => {
    return accumulator + item;
  }, 0);
};

const multiply = function(someArray) {
  return someArray.reduce((accumulator, item) => {
    return accumulator * item;
  }, 1);
};

const power = function(baseNum, exponent) {
	return baseNum ** exponent;
};

const factorial = function(integer) {
	if (integer == 0) return 1;
  let array = [];
  for (let i =1; i <= integer; i++){
    array.push(i);
  }
   const fact = array.reduce((accumulator, item) => {
  return accumulator * item;
});
return fact;
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
