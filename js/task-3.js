
const span = document.querySelector('#name-output');
const input = document.addEventListener("input", handlerInput)
function handlerInput(event) {
  console.log(event.target.value);
  span.textContent = event.target.value.trim() || 'Anonymous'
}