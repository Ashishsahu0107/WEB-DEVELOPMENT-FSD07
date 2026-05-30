let display = document.getElementById("text");

let expression = "";

function Calculate(value) {

  if (value === "AC") {
    expression = "";
    display.innerText = "0";
  }

  else if (value === "C") {
    expression = expression.slice(0, -1);

    if (expression === "") {
      display.innerText = "0";
    }
    else {
      display.innerText = expression;
    }
  }

  else if (value === "=") {

    try {
      expression = eval(expression).toString();
      display.innerText = expression;
    }

    catch (error) {
      display.innerText = "Error";
      expression = "";
    }
  }

  else {
    expression += value;
    display.innerText = expression;
  }
}


document.addEventListener("keydown", function (event) {

  let key = event.key;

  // Numbers
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "." ||
    key === "%"
  ) {
    Calculate(key);
  }

  else if (key === "Enter") {
    Calculate("=");
  }

  else if (key === "Backspace") {
    Calculate("C");
  }

  else if (key === "Escape") {
    Calculate("AC");
  }

});