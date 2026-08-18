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

sr.reveal(`.home__img, .carousel,
            .footer__content, footer__information`)
sr.reveal(`.home__data`, { origin: 'bottom' })
sr.reveal(`.about__data, .skills__content`, { origin: 'left' })
sr.reveal(`.about__img`, { origin: 'right' })

/*========= OTHER PROJECTS CAROUSEL =========*/
const carouselTrack = document.getElementById('carousel-track')

if (carouselTrack) {
    const slides = Array.from(carouselTrack.querySelectorAll('.carousel__slide'))
    const prevBtn = document.getElementById('carousel-prev')
    const nextBtn = document.getElementById('carousel-next')
    const dotsContainer = document.getElementById('carousel-dots')

    slides.forEach((slide, index) => {
        const dot = document.createElement('button')
        dot.classList.add('carousel__dot')
        dot.setAttribute('type', 'button')
        dot.setAttribute('aria-label', `Go to project ${index + 1}`)
        dot.addEventListener('click', () => {
            slide.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
        })
        dotsContainer.appendChild(dot)
    })

    const dots = Array.from(dotsContainer.querySelectorAll('.carousel__dot'))

    const updateCarouselState = () => {
        const maxScrollLeft = carouselTrack.scrollWidth - carouselTrack.clientWidth
        let closestIndex

        if (carouselTrack.scrollLeft >= maxScrollLeft - 4) {
            closestIndex = slides.length - 1
        } else if (carouselTrack.scrollLeft <= 4) {
            closestIndex = 0
        } else {
            const trackLeft = carouselTrack.getBoundingClientRect().left
            let closestDistance = Infinity
            closestIndex = 0

            slides.forEach((slide, index) => {
                const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft)
                if (distance < closestDistance) {
                    closestDistance = distance
                    closestIndex = index
                }
            })
        }

        dots.forEach((dot, index) => {
            dot.classList.toggle('carousel__dot--active', index === closestIndex)
        })

        prevBtn.disabled = carouselTrack.scrollLeft <= 4
        nextBtn.disabled = carouselTrack.scrollLeft >= maxScrollLeft - 4
    }

    const scrollByDirection = (direction) => {
        const slideWidth = slides[0].getBoundingClientRect().width
        const gap = parseFloat(getComputedStyle(carouselTrack).columnGap) || 0
        carouselTrack.scrollBy({ left: direction * (slideWidth + gap), behavior: 'smooth' })
    }

    prevBtn.addEventListener('click', () => scrollByDirection(-1))
    nextBtn.addEventListener('click', () => scrollByDirection(1))

    let scrollTicking = false
    carouselTrack.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                updateCarouselState()
                scrollTicking = false
            })
            scrollTicking = true
        }
    })

    window.addEventListener('resize', updateCarouselState)
    updateCarouselState()
}
