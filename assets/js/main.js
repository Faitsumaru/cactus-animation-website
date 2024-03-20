/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*============== AUTOCLOSE MENU MOBILE ==============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAutoClose = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(el => el.addEventListener('click', linkAutoClose))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
        const header = document.getElementById('header')
        this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 
            ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(cur => {
        const secHeight = cur.offsetHeight,
              secTop = cur.offsetTop - 58,
              secId = cur.getAttribute('id'),
              secsClass = document.querySelector(`
                .nav__menu a[href*='${secId}']
              `)
        
        if (scrollDown > secTop && scrollDown <= secTop + secHeight)
            secsClass.classList.add('active-link')
        else
            secsClass.classList.remove('active-link')
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    // reset: true, //repeat animations
})

sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer__container`)
sr.reveal(`.home__data, .care__list, .contact__img`, {delay: 500})
sr.reveal(`.new__card`, {delay: 500, interval: 100})
sr.reveal(`.shop__card`, {interval: 100})
