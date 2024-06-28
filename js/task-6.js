function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxContainer = document.querySelector("#boxes");
destroyBtn.style.backgroundColor = "#ff4e4e";

function createBox(amount) {
  const boxFragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxFragment.appendChild(box);
  }
  boxContainer.innerHTML = "";
  boxContainer.appendChild(boxFragment);
}

function destroyBox() {
  boxContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBox(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBox();
});
