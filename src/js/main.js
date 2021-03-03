const menuBtn = document.querySelector('.hamburger')
const navBox = document.querySelector('.nav__box')
const navItems = document.querySelectorAll('.nav__list-item')
const heroImg = document.querySelector('.header__hero-img')
const boxImg = document.querySelector('.box')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active')
    navBox.classList.toggle('nav__box--active')
})

navItems.forEach((element) => {
    element.addEventListener('click', () => {
        navBox.classList.remove('nav__box--active')
        menuBtn.classList.toggle('is-active')
    })
})

const checkWidth = () => {
    window.innerWidth >= 992
        ? window.addEventListener('load', () =>
              boxImg.classList.add('hero-animation')
          )
        : null
    window.innerWidth >= 768
        ? heroImg.setAttribute('src', './dist/images/boy.jpg')
        : heroImg.setAttribute('src', './dist/images/boy-mobile.jpg')
}
checkWidth()

const checkWidth2 = () => {
    window.innerWidth >= 992 ? boxImg.classList.add('hero-animation') : null
}

window.addEventListener('resize', () => {
    checkWidth()
    checkWidth2()
})

// scrollAnimation
const targetAnimation = document.querySelectorAll('.scroll-animation')

if ('IntersectionObserver' in window) {
    const config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    }

    const observer = new IntersectionObserver(animation, config)
    targetAnimation.forEach(function (targetAnimation) {
        observer.observe(targetAnimation)
    })

    function animation(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting === true) {
                onAnimate(entry.target)
                observer.unobserve(entry.target)
            } else {
                styleAnimation(entry.target)
            }
        })
    }

    const styleAnimation = (targetAnimation) => {
        targetAnimation.classList.add('animation')
    }

    const onAnimate = (targetAnimation) => {
        targetAnimation.classList.contains('top')
            ? targetAnimation.classList.add('top-scroll-class')
            : null
        targetAnimation.classList.contains('right')
            ? targetAnimation.classList.add('right-scroll-class')
            : null
        targetAnimation.classList.contains('bottom')
            ? targetAnimation.classList.add('bottom-scroll-class')
            : null
        targetAnimation.classList.contains('scale')
            ? targetAnimation.classList.add('scale-scroll-class')
            : null
        targetAnimation.classList.contains('left')
            ? targetAnimation.classList.add('left-scroll-class')
            : null
    }
}

// slider
const nextBtn = document.querySelector('.slider__next-btn')
const backBtn = document.querySelector('.slider__back-btn')
const slider = document.querySelector('.slider__box')
let slideIndex = 0

const slideFunction = () => {
    const maxIndex = window.innerWidth >= 992 ? 2 : 3
    slideIndex > maxIndex ? (slideIndex = 0) : null
    slideIndex < 0 ? (slideIndex = maxIndex) : null
    switch (slideIndex) {
        case 0:
            slider.classList.add('slider__box--slide1')
            slider.classList.remove('slider__box--slide2')
            slider.classList.remove('slider__box--slide3')
            slider.classList.remove('slider__box--slide4')
            break

        case 1:
            slider.classList.add('slider__box--slide2')
            slider.classList.remove('slider__box--slide1')
            slider.classList.remove('slider__box--slide3')
            slider.classList.remove('slider__box--slide4')
            break

        case 2:
            slider.classList.add('slider__box--slide3')
            slider.classList.remove('slider__box--slide1')
            slider.classList.remove('slider__box--slide2')
            slider.classList.remove('slider__box--slide4')
            break

        case 3:
            slider.classList.add('slider__box--slide4')
            slider.classList.remove('slider__box--slide1')
            slider.classList.remove('slider__box--slide2')
            slider.classList.remove('slider__box--slide3')
            break
    }
}

const nextSlide = () => {
    slideIndex++
    slideFunction()
    clearInterval(slideLoop)
    slideLoop = window.setInterval(nextSlide, 4500)
}

const backSlide = () => {
    slideIndex = slideIndex - 1
    slideFunction()
    clearInterval(slideLoop)
    slideLoop = window.setInterval(nextSlide, 4500)
}

backBtn.addEventListener('click', backSlide)
nextBtn.addEventListener('click', nextSlide)

let slideLoop = window.setInterval(nextSlide, 4500)
