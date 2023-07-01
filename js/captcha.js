"use strict";

const min = 999;
const max = 9999;

let form = document.querySelector("#form-captcha");
let inputCaptcha = document.querySelector("#numero-usuario");
let textCaptcha = document.querySelector("#aleatorio");
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
    textCaptcha.textContent = ramdon;
}

function checking() {
    let formData = new FormData(form);
    let numeroUsuario = formData.get("numero-usuario");
    if (numeroUsuario.trim() === "") {
        icon.classList.add("bi-shield-lock-fill");
        icon.classList.remove("captcha-ok", "captcha-fail");
        btnContacto.classList.add("ocultar");
        warning.classList.remove("ocultar");
        crear_captcha();
    } else if (ramdon === parseInt(numeroUsuario)) {
        icon.classList.remove(
            "bi-shield-lock-fill",
            "bi-shield-fill-x",
            "captcha-fail"
        );
        icon.classList.add("bi-shield-fill-check", "captcha-ok", "efect-ok");
        btnContacto.classList.remove("ocultar");
        warning.classList.add("ocultar");
        inputCaptcha.classList.add("ocultar");
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
