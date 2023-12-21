var typed=new Typed(".text",{
    strings:["FrontEnd Developer","Backend Developer","Full Stack Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

var menu = document.querySelector('#menu-icons');
var navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}