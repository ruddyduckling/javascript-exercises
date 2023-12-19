const sumAll = function(...args) {
  for (let j=0; j<arguments.length; j++) {
    if (Math.sign(arguments[j]) !== 1 || !Number.isInteger(arguments[j])) {
      return "ERROR";
    }
  }

  const start = Math.min(...args);
  const end = Math.max(...args);
  let sum = 0;

  for (let i=start; i<=end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
