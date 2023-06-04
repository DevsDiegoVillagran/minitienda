let menu = document.getElementById('menu-bar')
let navbar = document.getElementsByClassName('navbar')
let header2 = document.querySelector('.header-2')


menu.addEventListener('click', () => {
    navbar[0].classList.toggle('active')
    menu.classList.toggle('fa-times')
})

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar[0].classList.remove('active')
    if(window.scrollY > 100) {
        header2.classList.add('active')
    }
    else {
        header2.classList.remove('active')
    }
}