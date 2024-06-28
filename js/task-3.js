const inputElement = document.querySelector("input#name-input");

const outputValue = document.querySelector("span#name-output");

inputElement.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  outputValue.textContent = inputValue || "Anonymous";
});
