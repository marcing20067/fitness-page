const menuBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const navItems = document.querySelectorAll(".nav__list-item");
const heroImg = document.querySelector(".header__hero-img");
const boxImg = document.querySelector(".box");
menuBtn.addEventListener("click", function () {
    this.classList.toggle("is-active");
    navList.classList.toggle("nav__list--active");
})

navItems.forEach(element => {
    element.addEventListener("click", () => {
        navList.classList.remove("nav__list--active");
        menuBtn.classList.toggle("is-active");
    })
});

const checkWidth = () => {
    window.innerWidth >= 992 ? window.addEventListener("load", event => boxImg.classList.add("hero-animation")) : null;
    window.innerWidth >= 768 ? heroImg.setAttribute("src", "./dist/images/boy.jpg") : heroImg.setAttribute("src", "./dist/images/boy-mobile.jpg");
}
checkWidth();

const checkWidth2 = () => {
    window.innerWidth >= 992 ? boxImg.classList.add("hero-animation") : null;
}

window.addEventListener("resize", () => {
    checkWidth();
    checkWidth2();
});
