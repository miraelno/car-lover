//Switchers of form
const regSw = document.getElementById('registration');
const logSw = document.getElementById('login');

//Form Buttons
const regBtn = document.getElementById('registration__button');
const logBtn = document.getElementById('login__button');

//Form fields
const labelName = document.getElementById('label__name');
const labelLastName = document.getElementById('label__last-name');
const labelConfPass = document.getElementById('label__confirm-password');

const userName = document.getElementById('user__name');
const userLastName = document.getElementById('user_last-name');
const userEmail = document.getElementById('user__email');
const userPassword = document.getElementById('user__password');
const userConfirmPassword = document.getElementById('user__confirm-password');

//this function switches to registration form
const swToreg = () => {
labelName.classList.remove('hidden');
labelLastName.classList.remove('hidden');
labelConfPass.classList.remove('hidden');
regBtn.classList.remove('hidden');
logBtn.classList.add('hidden');
regSw.classList.add('selected__switch');
logSw.classList.remove('selected__switch');
}

//this function switches to login form
const swTolog = () => {
labelName.classList.add('hidden');
labelLastName.classList.add('hidden');
labelConfPass.classList.add('hidden');
regBtn.classList.add('hidden');
logBtn.classList.remove('hidden');
logSw.classList.add('selected__switch');
regSw.classList.remove('selected__switch');
}

regSw.addEventListener('click', swToreg);
logSw.addEventListener('click', swTolog);
