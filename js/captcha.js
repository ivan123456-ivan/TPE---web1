"use strict";

const min = 999;
const max = 9999;

let textCaptcha = document.querySelector("#aleatorio");
let input = document.querySelector("#numero-usuario");
let btnCaptcha = document.querySelector("#submit");
let icon = document.querySelector("#icon-verif");
let btnContacto = document.querySelector("#btn-contacto");
let warning = document.querySelector("#warning");
let heading = document.querySelector("#heading");

let ramdon;

btnCaptcha.addEventListener("click", checking);

crear_captcha();
checking();

function crear_captcha() {
    ramdon = Math.floor(Math.random() * (max - min) + min + 1);
    textCaptcha.innerHTML = ramdon;
}

function checking() {
    if (input.value === "") {
        icon.classList.add("bi-shield-lock-fill");
        icon.classList.remove("captcha-ok", "captcha-fail");
        btnContacto.classList.add("ocultar");
        warning.classList.remove("ocultar");
        crear_captcha();
    } else if (ramdon == input.value) {
        icon.classList.remove(
            "bi-shield-lock-fill",
            "bi-shield-fill-x",
            "captcha-fail"
        );
        icon.classList.add("bi-shield-fill-check", "captcha-ok", "efect-ok");
        btnContacto.classList.remove("ocultar");
        warning.classList.add("ocultar");
        input.classList.add("ocultar");
        btnCaptcha.classList.add("ocultar");
        heading.classList.add("ocultar");
        textCaptcha.classList.add("ocultar");
    } else {
        icon.classList.remove(
            "bi-shield-lock-fill",
            "bi-shield-fill-check",
            "captcha-ok"
        );
        icon.classList.add("bi-shield-fill-x", "captcha-fail");
        btnContacto.classList.add("ocultar");
        warning.classList.remove("ocultar");
        crear_captcha();
    }
}
