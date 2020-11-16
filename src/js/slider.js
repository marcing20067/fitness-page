const nextBtn = document.querySelector(".slider__next-btn");
const backBtn = document.querySelector(".slider__back-btn");
const slider = document.querySelector(".slider__box");
let slideIndex = 0;

const slideFunction = () => {
    const maxIndex = window.innerWidth >= 992 ? 2 : 3;
    slideIndex > maxIndex ? slideIndex = 0 : null;
    slideIndex < 0 ? slideIndex = maxIndex : null;
    switch (slideIndex) {
        case 0:
            slider.classList.add("slider__box--slide1")
            slider.classList.remove("slider__box--slide2")
            slider.classList.remove("slider__box--slide3")
            slider.classList.remove("slider__box--slide4")
            break;

        case 1:
            slider.classList.add("slider__box--slide2")
            slider.classList.remove("slider__box--slide1")
            slider.classList.remove("slider__box--slide3")
            slider.classList.remove("slider__box--slide4")
            break;

        case 2:
            slider.classList.add("slider__box--slide3")
            slider.classList.remove("slider__box--slide1")
            slider.classList.remove("slider__box--slide2")
            slider.classList.remove("slider__box--slide4")
            break;

        case 3:
            slider.classList.add("slider__box--slide4")
            slider.classList.remove("slider__box--slide1")
            slider.classList.remove("slider__box--slide2")
            slider.classList.remove("slider__box--slide3")
            break;
    }
}

const nextSlide = () => {
    slideIndex++;
    slideFunction();
    clearInterval(slideLoop);
    slideLoop = window.setInterval(nextSlide, 2500);
}

const backSlide = () => {
    slideIndex = slideIndex - 1;
    slideFunction();
    clearInterval(slideLoop);
    slideLoop = window.setInterval(nextSlide, 2500);
}

backBtn.addEventListener("click", backSlide)
nextBtn.addEventListener("click", nextSlide)

let slideLoop = window.setInterval(nextSlide, 2000);
