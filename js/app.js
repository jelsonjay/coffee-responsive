const hamburger = document.querySelector('.hamburger');

const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(item =>
	item.addEventListener('click', () => {
		hamburger.classList.remove('active');
		menu.classList.remove('active');
	})
);
