let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.center_navBar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}