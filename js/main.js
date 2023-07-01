"use strict";

let btnNav = document.querySelector("#btn-nav");
let navbar = document.querySelector("nav");
btnNav.addEventListener("click", () => {
    navbar.classList.toggle("nav-mostrar");
    btnNav.classList.toggle("bi-x-circle");
});
;