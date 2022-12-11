/*================== SHOW MENU ==================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*============== REMOVE MENU MOBILE =============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=========== CHANGE BACKGROUND HEADER ==========*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*================ SHOW SCROLL UP ==============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*========= SCROLL SECTIONS ACTIVE LINK =========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=========== MENU BAR BG COLOR CHANGE ==========*/
var header = document.querySelector('header'),
    alturaHeader = parseFloat(getComputedStyle(header).height)

window.addEventListener('scroll', e => {
    var color, shadow
    if (window.scrollY < 100) {
        color = 'transparent'
        shadow = 'none'
    }
    else if (window.scrollY > 100) {
        color = 'var(--main-color)'
        shadow = '0 2px 8px var(--body-color)'
    }
    header.style.setProperty('background', color)
    header.style.setProperty('box-shadow', shadow)
})

/*=========== SCROLL REVEAL ANIMATION ===========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, //Animations repeat
})

sr.reveal(`.home__img, .portfolio__container,
            .footer__content, footer__information`)
sr.reveal(`.home__data`, { origin: 'bottom' })
sr.reveal(`.about__data, .skills__data`, { origin: 'left' })
sr.reveal(`.about__img`, { origin: 'right' })
sr.reveal(`.portfolio__card`, { interval: 100 })