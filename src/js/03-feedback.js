import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

window.addEventListener('DOMContentLoaded', setFormValue);

const KEY = 'feedback-form-state';

const state = localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : {};

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
  localStorage.removeItem(KEY);
});

email.addEventListener('input', throttle(handleTextInput, 500));

message.addEventListener('input', throttle(handleTextInput, 500));

function handleTextInput(evt) {
  state[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY, JSON.stringify(state));
}

function setFormValue() {
  if (!localStorage.getItem(KEY)) {
    return;
  }
  const savedFormData = JSON.parse(localStorage.getItem(KEY));
  if (savedFormData.email) {
    email.value = savedFormData.email;
  }
  if (savedFormData.message) {
    message.value = savedFormData.message;
  }
}
