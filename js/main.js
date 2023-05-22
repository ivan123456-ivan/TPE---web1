"use strict"

let btnNav = document.querySelector("#btn-nav");
let nav = document.querySelector("nav");
btnNav.addEventListener("click", ()=>{
    nav.classList.toggle("nav-mostrar");
})