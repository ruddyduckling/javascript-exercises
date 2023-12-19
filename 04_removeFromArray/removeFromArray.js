const removeFromArray = function(userArray) {
  let removeList = [];
  for (let i = 1 ; i < arguments.length ; i++) {
    removeList[removeList.length] = arguments[i];
  }
  console.log(removeList);

  let newArray = userArray;
  for (let j = 0 ; j < removeList.length ; j++) {
    newArray = newArray.filter(function(value) {
      return value !== removeList[j]; });
      console.log(j);
  }
  return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
