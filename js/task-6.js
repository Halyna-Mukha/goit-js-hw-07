function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
controlsEl.classList.add('container')

const box = document.querySelector("#boxes");
box.classList.add('boxes')

const input = document.querySelector("input");
input.classList.add('input-numbers')

function createBoxes(amount) {
  const stringDiv = "<div class=square></div>";
  if (amount > 0) {
    box.innerHTML = "";
  }
  let step = 30;
  for (let i = 1; i <= amount; i += 1) {
    box.insertAdjacentHTML("beforeend", stringDiv);
    const element = box.lastElementChild;
    element.style.width = `${step}px`;
    element.style.height = `${step}px`;
    element.style.backgroundColor = getRandomHexColor();
    step += 10;
  }
}

const btnCreate = document.querySelector("[data-create]");
btnCreate.classList.add('btn-create')
btnCreate.addEventListener("click", createBtn);

function createBtn() {
  let total = parseInt(controlsEl.firstElementChild.value);
  const max = parseInt(input.getAttribute("max"));
  total = total <= max ? total : "";
  if (isNaN(total) || total <= 0) {
    controlsEl.firstElementChild.value = "";
    return;
  }
  createBoxes(total);
  controlsEl.firstElementChild.value = "";
}
const btnDestroy = document.querySelector("[data-destroy]");
btnDestroy.classList.add('btn-destroy')
btnDestroy.addEventListener("click", destroyBtn);

function destroyBtn() {
  box.innerHTML = "";
}