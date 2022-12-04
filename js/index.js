let btnMenu = document.querySelector(".burger-menu")
let navMenu = document.querySelector(".wrap-top-right")

btnMenu.addEventListener("click", function() {
    navMenu.classList.toggle("active")
    btnMenu.classList.toggle("active")
})