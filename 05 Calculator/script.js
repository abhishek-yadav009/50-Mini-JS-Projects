const input = document.getElementById("main-input");
const buttons = document.querySelectorAll("button");

let expression = "";

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      expression = "";
      input.value = "0";
    } 
    else if (value === "DEL") {
      expression = expression.slice(0, -1);
      input.value = expression || "0";
    } 
    else if (value === "=") {
      try {
        expression = eval(expression.replace(/%/g, "/100"));
        input.value = expression;
      } catch {
        input.value = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      input.value = expression;
    }
  });
});
