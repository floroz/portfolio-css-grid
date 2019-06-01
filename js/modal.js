const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e => {
	event.preventDefault();
	const modalToggle = e.target.closest('.portfolio-link');
	if (!modalToggle) return;

	const modal = modalToggle.parentNode.nextElementSibling;
	//console.log(modal);

	if (!modal) return;

	modal.style.display = 'block';

	modal.addEventListener('click', () => {
		modal.style.display = 'none';
	});
});
