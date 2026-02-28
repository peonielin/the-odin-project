const removeFromArray = function(array,...removeNum) {

const filteredArray = array.filter(element => {
  return !removeNum.includes(element);
});

return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
