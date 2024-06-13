let btns = document.querySelectorAll("button");
let inputbox = document.querySelector("input");
let oprand_pressed = false;
presssedval1 = "";
presssedval2 = "";
operator_val = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value == "c") {
      presssedval1 = "";
      presssedval2 = "";
      operator_val = "";
      inputbox.value = ''
    }
    if (btn.classList.contains("op")) {
      operator_val = btn.value;
      oprand_pressed = true;
    } else if (btn.classList.contains("numberVal")) {
      // Missing closing parenthesis fixed here
      if (oprand_pressed == false) {
        presssedval1 += btn.value;
        console.log("val 1 entered");
        inputbox.value = presssedval1;
      } else if (oprand_pressed == true) {
        presssedval2 += btn.value;
        console.log("val 2 entered");
        inputbox.value = presssedval2;
      }
      console.log(presssedval1, presssedval2);
    }
    if (btn.value == "=") {
      let res = calculate(
        Number(presssedval1),
        Number(presssedval2),
        operator_val
      );
      console.log(res);
      inputbox.value = res;
      presssedval1 = res;
      presssedval2 = ''
    }
  });
});

function calculate(a, b, operator) {
    if (operator === "+") {
      return a + b;
    } else if (operator === "-") {
      return a - b;
    } else if (operator === "*") {
      return a * b;
    } else if (operator === "/") {
      return a / b;
    } else if (operator === "%") {
      return a % b;
    } else {
      throw new Error('Unsupported operator');
    }
  }
  
