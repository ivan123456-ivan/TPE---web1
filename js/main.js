"use strict";

const min = 999;
const max = 9999;

let body = document.querySelector("#body");
let irCaptcha = document.querySelector("#captcha");
let captcha = document.querySelector("#container-captcha");
let contact = document.querySelector("#contact");
let textCaptcha = document.querySelector("#aleatorio");
let input = document.querySelector("#numero-usuario");
let btnCaptcha = document.querySelector("#submit");
let icon = document.querySelector("#icon-verif");
let btnContacto = document.querySelector("#btn-contacto");
let warning = document.querySelector("#warning");

let ramdon;

btnCaptcha.addEventListener("click", checking);

crear_captcha();

function crear_captcha() {
    ramdon = Math.floor((Math.random()* (max - min) + min)+1);
    textCaptcha.innerHTML = ramdon;
}

function checking() {
    if (ramdon == input.value) {
        icon.classList.remove("bi-shield-lock-fill", "bi-shield-fill-x", "captcha-fail");
        icon.classList.add("bi-shield-fill-check", "captcha-ok");
        btnContacto.classList.remove("ocultar");
        warning.classList.add("ocultar");
    }else{
        icon.classList.remove("bi-shield-lock-fill", "bi-shield-fill-check", "captcha-ok");
        icon.classList.add("bi-shield-fill-x", "captcha-fail");
        btnContacto.classList.add("ocultar");
        warning.classList.remove("ocultar");
    }
}