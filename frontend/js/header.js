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