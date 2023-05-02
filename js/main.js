"use strict";

const min = 999;
const max = 9999;
let body = document.querySelector("#body");
let irCaptcha = document.querySelector("#captcha");
let captcha = document.querySelector("#container-captcha");
let btnBack = document.querySelector("#back");
let contact = document.querySelector("#contact");
let textCaptcha = document.querySelector("#aleatorio");
let input = document.querySelector("#numero-usuario");
let btnSubmit = document.querySelector("#submit");
let icon = document.querySelector("#icon-verif");
let ramdon = Math.floor((Math.random()* (max - min) + min)+1);


captcha.classList.add("ocultar");
crear_captcha();

irCaptcha.addEventListener("click", mostrar_captcha);
btnBack.addEventListener("click", mostrar_captcha);

function mostrar_captcha() {
    captcha.classList.toggle("ocultar");
    body.classList.toggle("division")
    contact.classList.toggle("ocultar");
}

function crear_captcha() {
    textCaptcha.innerHTML = ramdon;
    btnSubmit.addEventListener("click", checking);
}

function checking() {
    if (ramdon == input.value) {
        icon.classList.remove("bi-shield-lock-fill", "bi-shield-fill-x", "verif-fail");
        icon.classList.add("bi-shield-fill-check", "verif-ok");
    }else{
        icon.classList.remove("bi-shield-lock-fill", "bi-shield-fill-check", "verif-ok");
        icon.classList.add("bi-shield-fill-x", "verif-fail");
    }
}