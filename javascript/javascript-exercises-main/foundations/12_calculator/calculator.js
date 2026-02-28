const add = function (num1, num2) {
  let sum = 0;
  sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  let result = 0;
  result = num1 - num2;
  return result;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function (num1, num2) {
  let result = 1;
  for (let i = 0; i < num2; i++) {
    result *= num1;
  }
  return result;
};
const factorial = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
