const factorial = function (num) {
  if (num > 0) {
    if ((num = 0)) {
      return 1;
    } else {
      let output = 1;
      for (let i = 1; i <= num; i++) {
        output *= i;
      }
    }
  } else return "undefined";
};

// Do not edit below this line
module.exports = factorial;
