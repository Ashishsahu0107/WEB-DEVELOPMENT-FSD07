function Calculate(data) {
  const equation = document.getElementById("text")

  if (data === "AC") {
    equation.innerText = "0";
    return;
  }
  if (data === "C") {
    equation.innerText = equation.innerText.slice(0, -1);
    return;
  }


  if (data === "=") {
    const EQ = equation.innerText;
    const solution = eqal(EQ);
    equation.innerText = solution;
    return
  }

  if (equation.innerText === "0") {
    equation.innerText = data;
    
  }
  else {

    equation.innerText = equation.innerText + data;
    
  }

}

