//Edit form fields
const nameInp = document.getElementById('user__name-info');
const emailInp = document.getElementById('user__email.info');
const phoneInp = document.getElementById('user__phone-inp');
const addressInp = document.getElementById('user__address-inp');

const inputItem = document.querySelectorAll('.input__item');
const editItem = document.querySelectorAll('.edit__img');
const confItem = document.querySelectorAll('.conf__img');



const editName = () => {
	inputItem.forEach(el => {
		if (el.hasAttribute("readOnly")) {
			el.removeAttribute("readOnly");
			}	else if (!el.hasAttribute("readOnly")) {
				el.setAttribute('readOnly', 'readOnly');
				}

	});
}

const confEdit = () => {
inputItem.forEach(el => {
	if (!el.hasAttribute("readOnly")) {
		el.setAttribute('readOnly', 'readOnly');
		}
})
}

editItem.forEach(el => {
el.addEventListener('click', editName);
});

confItem.forEach(el => {
	el.addEventListener('click', confEdit);
});

//Add photo


const photoRow = document.querySelector('.photo__row');
const addImg = document.getElementById('add__btn');


const download = (input) => {
	
	let file = input.files[0];
	let reader = new FileReader();
	reader.readAsDataURL(file);

	reader.onload = function () {
		// let img = document.createElement('img');
		// addImg.before(img);
		// img.src = reader.result;
		// img.classList.add('.img__card');
		const cardTemplate = document.querySelector('[data-card_template]');
		console.log(cardTemplate);	
		const newCard = document.importNode(cardTemplate.content, true);
		// const fragment = document.createDocumentFragment();
		
		// fragment.append(newCard);
		addImg.before(newCard);
		newCard.querySelector('[data-image]').src = reader.result;
	return newCard;	
	}
}

//Notifications

const bellBtn = document.getElementById('bell__btn');
const notList = document.querySelector('.notifications__list');

const showNotSet = () => {
notList.classList.toggle('hidden');
}

bellBtn.addEventListener('click', showNotSet);
notList.addEventListener('mouseleave', showNotSet);