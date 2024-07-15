const menuIcon = document.querySelector(".menu-icon")
const mobileMenu = document.querySelector(".mobile-menu")
const html = document.querySelector("html")

function toggleMobileMenu(){
    mobileMenu.classList.toggle("active")

    if(mobileMenu.classList.contains("active")){
        html.style.overflow = "hidden"
    }else{
        html.style.overflow = "scroll"
    }
}

menuIcon.addEventListener("click", toggleMobileMenu)