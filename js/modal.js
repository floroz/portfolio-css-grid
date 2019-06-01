const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e => {
	event.preventDefault();
	const modalToggle = e.target.closest('.portfolio-link');
	if (!modalToggle) return;

	const modal = modalToggle.parentNode.nextElementSibling;
	//console.log(modal);

	if (!modal) return;

	modal.classList.remove('modal-is-closed');
	modal.classList.add('modal-is-open');

	const closeButton = modal.querySelector('.modal-close');

	closeButton.addEventListener('click', () => {
		modal.classList.remove('modal-is-open');
		modal.classList.add('modal-is-closed');
	});

	document.addEventListener('keydown', e => {
		if (e.keyCode === 27) {
			modal.classList.remove('modal-is-open');
			modal.classList.add('modal-is-closed');
		} else return;
	});
});
