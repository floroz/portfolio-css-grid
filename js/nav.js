const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');
const contAllStyles = containerAll.styles;
const bodyClassList = document.body.classList;

navToggle.addEventListener('click', () => {
	contAllStyles.transition = 'all .25s ease-out';

	bodyClassList.toggle('nav-is-open');
});

nav.addEventListener('click', () => {
	contAllStyles.transition = '0ms';
	bodyClassList.remove('nav-is-open');
});
