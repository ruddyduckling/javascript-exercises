const removeFromArray = function(userArray) {
  let filterList = [];
  for (let i = 1 ; i < arguments.length ; i++) {
    filterList[filterList.length] = arguments[i];
  }
  
  let newArray = [];
  for (let j = 0 ; j < filterList.length ; j++) {
    newArray = userArray.filter(function(value) {
      return value !== filterList[j]; });
  }

  return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
