const mainNavbarMenu = document.getElementById('main-navbar');
const sideMenu = document.getElementById('side-menu');
const btnClose = document.querySelector('.btn-close');
const main = document.getElementById('main');

function openSideBarMenu() {
    sideMenu.style.width = '250px';
    main.style.marginLeft = '250px';
}

function closeSideBarMenu() {
    sideMenu.style.width = '0';
    main.style.marginLeft = '0';
}

mainNavbarMenu.addEventListener('click', openSideBarMenu);
btnClose.addEventListener('click', closeSideBarMenu);