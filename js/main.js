"use strict";

let btnNav = document.querySelector("#btn-nav");
let navbar = document.querySelector("nav");
btnNav.addEventListener("click", () => {
    navbar.classList.toggle("nav-mostrar");
    btnNav.classList.toggle("bi-x-circle");
});

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        navbar.classList.remove("desplazamiento");
    } else {
        navbar.classList.add("desplazamiento");
    }
    ubicacionPrincipal = desplazamientoActual;
};
