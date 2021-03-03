const menuBtn = document.querySelector(".hamburger");
const navBox = document.querySelector(".nav__box");
const navItems = document.querySelectorAll(".nav__list-item");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    navBox.classList.toggle("nav__box--active");
})

navItems.forEach(element => {
    element.addEventListener("click", () => {
        navBox.classList.remove("nav__box--active");
        menuBtn.classList.toggle("is-active");
    })
});