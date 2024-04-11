document
  .getElementById("calculator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    console.log(operation);

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerText = "";
      document.getElementById("error").innerText =
        "Please enter valid numbers.";
      return;
    }

    // Perform calculation based on operation
    let result;
    switch (operation) {
      case "addition":
        result = num1 + num2;
        break;
      case "subtraction":
        result = num1 - num2;
        break;
      case "multiplication":
        result = num1 * num2;
        break;
      case "division":
        if (num2 === 0) {
          document.getElementById("result").innerText = "";
          document.getElementById("error").innerText =
            "Division by zero is not allowed.";
          return;
        }
        result = num1 / num2;
        break;
      default:
        document.getElementById("result").innerText = "";
        document.getElementById("error").innerText =
          "Invalid operation selected.";
        return;
    }

    // Display result
    document.getElementById("result").innerText = result;
    document.getElementById("error").innerText = "";
  });
