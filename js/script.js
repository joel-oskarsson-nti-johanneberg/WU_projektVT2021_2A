const burger = document.querySelector('.mobile_button')
const nav = document.querySelector('.mobile_links')

function toggleMeny() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMeny)