const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const errorMessage = document.querySelector('.error-message');
const container = document.querySelector('.container');
const confirmedMessage = document.getElementById('confirmed-message');
const dismissBtn = document.getElementById('dismiss-message');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!emailRegex.test(emailValue)) {
    errorMessage.textContent = 'Valid email required';
    emailInput.classList.add('invalid');
  } else {
    errorMessage.textContent = '';
    emailInput.classList.remove('invalid');
    // Mostrar pantalla de confirmación
    container.style.display = 'active';
    confirmedMessage.classList.add('active');
    document.body.classList.add('show-confirmation');
  }
});

dismissBtn.addEventListener('click', function() {
  // Volver al formulario
  container.style.display = 'flex';
  confirmedMessage.classList.remove('active');
  document.body.classList.remove('show-confirmation');
  form.reset();
  emailInput.classList.remove('invalid');
});