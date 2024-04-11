//Burger menu
const burgerBtn = document.getElementById('burger__btn');
const headerMenu = document.querySelector('.header__menu');

const showMenu = () => {
headerMenu.classList.toggle('d__flex');
}

const hideMenu = () => {
	if (window.innerWidth > '997') {
		headerMenu.classList.remove('d__flex');
	}
}

window.addEventListener('resize', hideMenu);
burgerBtn.addEventListener('click', showMenu);

//Edit form fields
const reg1 = document.getElementById('reg1');
const reg1_1 = document.getElementById('reg1_1');
const reg2 = document.getElementById('reg2');
const reg2_1 = document.getElementById('reg2_1');
const reg3 = document.getElementById('reg3');
const reg3_1 = document.getElementById('reg3_1');
const reg4 = document.getElementById('reg4');
const reg4_1 = document.getElementById('reg4_1');
const nameInp = document.getElementById('user__name-info');
const emailInp = document.getElementById('user__email.info');
const phoneInp = document.getElementById('user__phone-inp');
const addressInp = document.getElementById('user__address-inp');

const editName = () => {
if (nameInp.hasAttribute("readOnly")) {
	nameInp.removeAttribute("readOnly");
} else if (!nameInp.hasAttribute("readOnly")) {
	nameInp.setAttribute('readOnly', 'readOnly');
}
}

reg1.addEventListener('click', editName);
reg1_1.addEventListener('click', editName);