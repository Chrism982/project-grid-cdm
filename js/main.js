const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelectorAll('.nav__link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	if (navMobile.classList.contains('nav-mobile--active')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'auto';
	}

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
			navBtn.classList.remove('is-active');
			document.body.style.overflowY = 'auto';
		});
	});
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
