const removeFromArray = function(userArray, ...args) {
  return userArray.filter(value => 
    !args.includes(value));
}
// Do not edit below this line
module.exports = removeFromArray;
