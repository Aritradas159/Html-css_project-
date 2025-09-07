// Tab switching logic
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
});

signupTab.addEventListener('click', () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

// Prevent form submission (no backend)
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('🚀 Login would launch you into the cosmos! (No backend)');
});

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('🪐 Signup would enroll you in the galactic crew! (No backend)');
});