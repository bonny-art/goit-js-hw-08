import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handlerInput.bind(form), 500));
form.addEventListener('submit', handlerSubmit);

function handlerInput() {
  const { email, message } = this.elements;

  const data = {
    email: email.value,
    message: message.value,
  };

  console.log(JSON.stringify(data));
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function handlerSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (!(email.value && message.value)) {
    alert('Fill in all form fields!');
    return;
  }

  const formSubmit = {
    email: email.value,
    message: message.value,
  };

  localStorage.removeItem('feedback-form-state');

  console.log(formSubmit);

  email.value = '';
  message.value = '';
}

const feedback = JSON.parse(localStorage.getItem('feedback-form-state'));

if (feedback) {
  form.elements.email.value = feedback.email;
  form.elements.message.value = feedback.message;
}
