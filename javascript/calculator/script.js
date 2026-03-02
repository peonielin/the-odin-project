let operator = "";
let firstNum = "";
let secondNum = "";
let buttonValue = 0;
let equalSign = "=";
let justEvaluated = false;

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  if (num2 == 0) {
    return "try again";
  }
  return (Number(num1) / Number(num2)).toFixed(6);
}

function operate(operator, firstNum, secondNum) {
  if (operator === "+") {
    return add(firstNum, secondNum);
  } else if (operator === "-") {
    return subtract(firstNum, secondNum);
  } else if (operator === "*") {
    return multiply(firstNum, secondNum);
  } else if (operator === "÷") {
    return divide(firstNum, secondNum);
  }
}

const numButtons = document.querySelectorAll("#numButton");
const opButtons = document.querySelectorAll("#opButton");
const display = document.querySelector(".display");
const answerButtons = document.querySelectorAll("#answerButton");
const clearButtons = document.querySelectorAll("#clearButton");
let operatorClicked = false;

const foundNum = numButtons.forEach(function (onNumButtonClick) {
  onNumButtonClick.addEventListener("click", function () {
    if (justEvaluated) {
      firstNum = onNumButtonClick.innerText;
      secondNum = "";
      operator = "";
      operatorClicked = false;
      justEvaluated = false;
      display.textContent = firstNum;
    } else if (operatorClicked === false) {
      firstNum += onNumButtonClick.innerText;
      display.textContent = firstNum;
    } else if (firstNum != "") {
      secondNum += onNumButtonClick.innerText;
      display.textContent = secondNum;
    }
  });
});

const foundOp = opButtons.forEach(function (onOpButtonClick) {
  onOpButtonClick.addEventListener("click", function () {
    if (secondNum != "") {
      firstNum = operate(operator, firstNum, secondNum);
      display.textContent = firstNum;
      secondNum = "";
    }
    operatorClicked = true;
    operator = onOpButtonClick.innerText;
  });
});

const findAnswer = answerButtons.forEach(function (onAnswerButtonClick) {
  onAnswerButtonClick.addEventListener("click", function () {
    if (
      firstNum !== "" &&
      secondNum !== "" &&
      operator !== "" &&
      onAnswerButtonClick.innerText == equalSign
    ) {
      const answer = operate(operator, firstNum, secondNum);
      display.textContent = answer;
      firstNum = answer;
      secondNum = "";
      operator = "";
      operatorClicked = false;
      justEvaluated = true;
    }
  });
});

const clear = clearButtons.forEach(function (onClearButtonClick) {
  onClearButtonClick.addEventListener("click", function () {
    display.textContent = 0;
    firstNum = "";
    secondNum = "";
    operator = "";
    operatorClicked = false;
  });
});
