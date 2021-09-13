const hamburgerMenu = document.querySelector('#hamburgerMenu');
const siteNavList = document.querySelector('#siteNavList');
const heroIcon = document.querySelector('#heroIcon');

hamburgerMenu.addEventListener('click', () => {
   siteNavList.classList.toggle('active');
   heroIcon.classList.toggle('hide');
});