const fibonacci = function (num) {
  let output;
  if (num === 0) {
    output = [0];
  } else if (num === 1) {
    output = [1];
  } else if (num === 2) {
    output = [0, 1];
  } else {
    array = [];
    for (let i = 0; i < num.length; i++) {
      let firstTerm = 0;
      let secondTerm = 1;
      let nextTerm = firstTerm + secondTerm;
      array = nextTerm.push();
    }
    output = array[num - 1];
  }

  return output;
};

// Do not edit below this line
module.exports = fibonacci;
