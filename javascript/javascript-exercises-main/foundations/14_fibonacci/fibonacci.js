const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  } else if (num == 0) {
    return 0;
  }
  let firstTerm = 0;
  let secondTerm = 1;
  for (let i = 2; i <= num; i++) {
    let nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }

  return secondTerm;
};

// Do not edit below this line
module.exports = fibonacci;
