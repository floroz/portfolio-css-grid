const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');
const bodyClassList = document.body.classList;

navToggle.addEventListener('click', () => {
	containerAll.classList.add('container-all-open');

	document.body.classList.toggle('nav-is-open');
});

nav.addEventListener('click', () => {
	bodyClassList.remove('nav-is-open');
});
