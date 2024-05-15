const burger = document.querySelector("#burger-menu");
const menu   = document.querySelector("#primary-nav");

burger.addEventListener("click", () => {
    if (burger.getAttribute("aria-expanded") === "true") {
        burger.setAttribute("aria-expanded", "false");
    } else {
        burger.setAttribute("aria-expanded", "true")
    }
    menu.classList.toggle("primary-nav--opened");
});
