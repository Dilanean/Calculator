let calculation = document.getElementById("calculation");
let buttons = document.querySelectorAll("button");

let AC = document.getElementById("AC");
let equal = document.getElementById("equal");
let del = document.getElementById("delete");
let result = document.getElementById("result");
let percentage = document.getElementById("percentage");
let calcArray = [];

buttons.forEach((button) => {
  button.onclick = () => {
    if (button == AC) {
      clearScreen();
    } else if (button == equal) {
      calculation.textContent = result.textContent;
      result.textContent = calc();
      console.log(calcArray);
      calcArray = [calc()];
    } else if (button == del) {
      calcArray.pop();
      result.textContent = result.textContent.slice(0, -1);
    } else {
      result.textContent = result.textContent += button.textContent;
      calcArray.push(button.textContent);
    }
  };
});

function clearScreen() {
  calculation.textContent = " ";
  result.textContent = " ";
  calcArray.length = [];
}

function calc() {
  let expression = "";
  for (let i = 0; i < calcArray.length; i++) {
    if (calcArray[i] === "%") {
      calcArray[i] = "*0.01";
    }
    expression += calcArray[i];
  }

  let solution = eval(expression);

  if (Number.isInteger(solution)) {
    return solution;
  } else {
    return solution.toFixed(8);
  }
}
