const fibonacci = function(index) {
let array = [0, 1];

if (Math.sign(index) == -1) return 'OOPS';
else {
  for (let i = 2; i <=index; i++){
    array.push(array[i-2] + array[i-1]);
  }
  console.log(array);
  return array[index];
}


};

// Do not edit below this line
module.exports = fibonacci;
