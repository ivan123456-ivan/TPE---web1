"use strict";

const min = 999;
const max = 9999;
let body = document.querySelector("#body");
let irCaptcha = document.querySelector("#captcha");
let captcha = document.querySelector("#container-captcha");
let contact = document.querySelector("#contact");
let textCaptcha = document.querySelector("#aleatorio");
let input = document.querySelector("#numero-usuario");
let btnSubmit = document.querySelector("#submit");
let icon = document.querySelector("#icon-verif");
let ramdon = Math.floor((Math.random()* (max - min) + min)+1);

crear_captcha();

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