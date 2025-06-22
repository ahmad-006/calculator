"strict mode";

const allBtnsElem = document.querySelectorAll(".btn");
console.log();
let mainInputElem = document.querySelector(".mainInput");
let value = "";
let isLastOperator = true;
let secondaryInputelem = document.querySelector(".secondaryInput");

const clearInputfield = () => {
  mainInputElem.value = "";
};

allBtnsElem.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(isLastOperator);

    if (btn.classList.contains("number")) {
      mainInputElem.value += btn.textContent;
      value += btn.textContent;
      isLastOperator = false;
    } else if (btn.classList.contains("operator")) {
      if (!isLastOperator && mainInputElem.value !== "") {
        isLastOperator = true;
        if (btn.textContent === "X") {
          value += "*";
          mainInputElem.value += `${btn.textContent}`;
        } else if (btn.textContent === "÷") {
          value += "/";
          mainInputElem.value += `${btn.textContent}`;
        } else if (btn.textContent === "=") {
          secondaryInputelem.value = mainInputElem.value;
          mainInputElem.value = eval(value);
          value = mainInputElem.value;
          isLastOperator = false;
        } else {
          mainInputElem.value += `${btn.textContent}`;
          console.log(mainInputElem.value);
          value += btn.textContent;
        }
      }
    } else if (btn.textContent === "AC") {
      value = mainInputElem.value = secondValue = secondaryInputelem.value = "";
      isLastOperator = true;
    } else if (btn.textContent === "⌫") {
      mainInputElem.value = mainInputElem.value.slice(0, -1);
      isLastOperator = false;
      value = value.slice(0, -1);
    } else if (btn.classList.contains("power")) {
      mainInputElem.value += "^";
      value += "**";
      isLastOperator = true;
    }
  });
});
