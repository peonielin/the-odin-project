const sumAll = function (a, b) {
  let sum = 0;

  if (
    a > 0 &&
    b > 0 &&
    a % 1 === 0 &&
    b % 1 === 0 &&
    typeof a == "number" &&
    typeof b == "number"
  ) {
    if (a >= b) {
      for (let i = b; i <= a; i++) {
        sum += i;
      }
    } else if (b > a) {
      for (let i = a; i <= b; i++) {
        sum += i;
      }
    }

    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
