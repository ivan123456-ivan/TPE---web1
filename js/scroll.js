"use strict";

let ubicacionPrincipal = window.pageYOffset;
let navbar = document.querySelector("nav");
window.onscroll = function () {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        navbar.classList.remove("desplazamiento");
    } else {
        navbar.classList.add("desplazamiento");
    }
    ubicacionPrincipal = desplazamientoActual;
};
