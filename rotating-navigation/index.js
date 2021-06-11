let toggleMenu = document.querySelector('.toggle-menu');
let mainMenu = document.querySelector('.main');
toggleMenu.addEventListener("click",()=>{
    mainMenu.classList.toggle("menu-active");
    document.querySelector(".side-menu").classList.toggle("side-menu__active");
})