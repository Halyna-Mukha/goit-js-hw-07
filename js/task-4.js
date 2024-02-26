const loginForm = document.querySelector('.login-form');

const labelEl = document.querySelectorAll('label');
labelEl.forEach(element => element.classList.add('login-form-label'));

const inputEl = document.querySelectorAll('input');
inputEl.forEach(element => element.classList.add('login-form-input'));

const buttonEl = document.querySelector('button');
buttonEl.classList.add("btn")


loginForm.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === '' || password === '') {
     alert (`All form fields must be filled in`);
  }
  const formData = {
    email: email,
    password: password,
  }
  console.log(formData)
  event.currentTarget.reset()
}