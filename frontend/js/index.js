//forms
const loginForm = document.querySelector('.login__form');
const regForm = document.querySelector('.registration__form');
//Switchers of form
const regSw = document.getElementById('registration');
const logSw = document.getElementById('login');

const regSw2 = document.getElementById('registration2');
const logSw2 = document.getElementById('login2');

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
const aster = document.querySelectorAll('.aster');


const EMAIL_INPUT_ID = 'user__email';
const PASSWORD_INPUT_ID = 'user__password';
//Errors variables
const ERRORS_NAME_ID = 'name__error';
const ERRORS_SECOND_NAME_ID = 'last__name-error';
const ERRORS_EMAIL_ID = 'email__error';
const ERRORS_PASSWORD_ID = 'password__error';
const ERRORS_CONFIRM_PASSWORD_ID = 'confirm__password-error';
const ERRORS_CHECK_ID = 'check__error';

//Path to success validation page
const RESULT_PAGE_PATH = '/html/admin_page.html';

//this function switches to registration form
const swToreg2 = () => {
loginForm.classList.add('hidden');
regForm.classList.remove('hidden');
}

//this function switches to login form
const swTolog2 = () => {

	loginForm.classList.remove('hidden');
	regForm.classList.add('hidden');
}

//this function switches to registration form
const swToreg = () => {
loginForm.classList.add('hidden');
regForm.classList.remove('hidden');
	}
	
	//this function switches to login form
	const swTolog = () => {
		loginForm.classList.remove('hidden');
		regForm.classList.add('hidden');
	}

regSw.addEventListener('click', swToreg2);
logSw.addEventListener('click', swTolog2);
regSw2.addEventListener('click', swToreg2);
logSw2.addEventListener('click', swTolog2);


//Validation functional

function getValueById(elementId) {
	const element = document.getElementById(elementId);
	const type = element.getAttribute('type');
	return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(errorId, error) {
	const errorContainerElement = document.getElementById(errorId);
	const errorElement = document.createElement('p');
	errorElement.classList.add('error__row');
	errorElement.textContent = error;
	errorContainerElement.appendChild(errorElement);
}

function deleteErrors() {
	const errorsEmail = document.getElementById(ERRORS_EMAIL_ID);
	const errorsPass = document.getElementById(ERRORS_PASSWORD_ID);
	// const errorsCheck = document.getElementById(ERRORS_CHECK_ID);
	userEmail.classList.remove('error__input');
	userPassword.classList.remove('error__input');
	// check.classList.remove('error__input');
	errorsEmail.replaceChildren();
	errorsPass.replaceChildren();
	// errorsCheck.replaceChildren();
}

function navigateToResultPage() {
	window.location.href = RESULT_PAGE_PATH;
}

function delSpaces() {
	userEmail.value = userEmail.value.replace(/\s/g, '');
	return userEmail.value;
}

function isEmail(e) {
	delSpaces();
	return /\S+@\S+\.\S+/.test(e);
}

function LoginValidateForm() {
	const inputData = {};
	const emailInp = getValueById(EMAIL_INPUT_ID).trim();
	const passInp = getValueById(PASSWORD_INPUT_ID);
	// const checkInp = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

	deleteErrors();

	if (emailInp === '') {
		 inputData[EMAIL_INPUT_ID] = 'Input email';
		 setErrors(ERRORS_EMAIL_ID, inputData[EMAIL_INPUT_ID]);
		 userEmail.classList.add('error__input');
	} else

	if (!isEmail(emailInp)) {
		 inputData[EMAIL_INPUT_ID] = 'Input correct email';
		 setErrors(ERRORS_EMAIL_ID, inputData[EMAIL_INPUT_ID]);
		 userEmail.classList.add('error__input');
	}

	if (passInp.length === 0) {
		 inputData[PASSWORD_INPUT_ID] = 'Input password';
		 setErrors(ERRORS_PASSWORD_ID, inputData[PASSWORD_INPUT_ID]);
		 userPassword.classList.add('error__input');
	} else

	if (passInp.length < 8) {
		 inputData[PASSWORD_INPUT_ID] = 'The password must be longer than 8 and shorter than 12 characters';
		 setErrors(ERRORS_PASSWORD_ID, inputData[PASSWORD_INPUT_ID]);
		 userPassword.classList.add('error__input');
	}

	if (Object.keys(inputData).length === 0) {
		 navigateToResultPage();
	}
	console.info('LOG Підготовка успішна');
}

function RegValidateForm() {
	const inputData = {};
	const emailInp = getValueById(EMAIL_INPUT_ID).trim();
	const passInp = getValueById(PASSWORD_INPUT_ID);
	// const checkInp = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

	deleteErrors();

	if (emailInp === '') {
		 inputData[EMAIL_INPUT_ID] = 'Input email';
		 setErrors(ERRORS_EMAIL_ID, inputData[EMAIL_INPUT_ID]);
		 userEmail.classList.add('error__input');
	} else

	if (!isEmail(emailInp)) {
		 inputData[EMAIL_INPUT_ID] = 'Input correct email';
		 setErrors(ERRORS_EMAIL_ID, inputData[EMAIL_INPUT_ID]);
		 userEmail.classList.add('error__input');
	}

	if (passInp.length === 0) {
		 inputData[PASSWORD_INPUT_ID] = 'Input password';
		 setErrors(ERRORS_PASSWORD_ID, inputData[PASSWORD_INPUT_ID]);
		 userPassword.classList.add('error__input');
	} else

	if (passInp.length < 8) {
		 inputData[PASSWORD_INPUT_ID] = 'The password must be longer than 8 and shorter than 12 characters';
		 setErrors(ERRORS_PASSWORD_ID, inputData[PASSWORD_INPUT_ID]);
		 userPassword.classList.add('error__input');
	}

	if (Object.keys(inputData).length === 0) {
		 navigateToResultPage();
	}
	console.info('REG Підготовка успішна');
}

regBtn.onclick = RegValidateForm;
logBtn.onclick = LoginValidateForm;