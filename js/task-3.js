const inputEl = document.querySelector('#name-input');
inputEl.classList.add('input-field');

const titleEl = document.querySelector('h1');
titleEl.classList.add('title-text');


const span = document.querySelector('#name-output');
const input = document.addEventListener("input", handlerInput)
function handlerInput(event) {
  console.log(event.target.value);
  span.textContent = event.target.value.trim() || 'Anonymous'
};