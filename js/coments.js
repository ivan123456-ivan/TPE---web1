"use strict";
let textArea = document.querySelector("textarea");
let container = document.querySelector(".coments-container");
let advertencia = document.querySelector("#advertencia");
let form = document.querySelector(".contact-form");
textArea.value = "";
let fecha = new Date();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();

let coments = [
    {
        nombre: "Rupert Smith",
        email: "email@gmail.com",
        comentario: "Comentario...",
        time: [hora, minutos],
    },
];

mostrar_comentario();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let nombre = formData.get("nombre");
    let email = formData.get("email");
    let comentario = formData.get("comentarios");
    if (
        nombre.trim() !== "" &&
        email.trim() !== "" &&
        comentario.trim() !== ""
    ) {
        let fechaUser = new Date();
        let horaUser = fechaUser.getHours();
        let minutosUser = fechaUser.getMinutes();

        container.textContent = "";
        let nuevoComentario = {
            nombre: nombre,
            email: email,
            comentario: comentario,
            time: [horaUser, minutosUser],
        };
        coments.push(nuevoComentario);
        advertencia.classList.remove("ocultar");
        advertencia.textContent = "Comentario registrado correctamente!";
        setTimeout(() => {
            advertencia.classList.add("ocultar");
        }, 8000);
        mostrar_comentario();
        advertencia.classList.add("ocultar");
    } else {
        advertencia.classList.remove("ocultar");
        setTimeout(() => {
            advertencia.classList.add("ocultar");
        }, 5000);
    }
});

function mostrar_comentario() {
    container.textContent = "";
    for (let comentario of coments) {
        let article = document.createElement("article");
        let divCommentHeader = document.createElement("div");
        let pHeader = document.createElement("p");
        let span = document.createElement("span");
        let divCommentInfo = document.createElement("div");
        let pCommentInfo = document.createElement("p");
        let divCommentFotter = document.createElement("div");
        let timeCommentFotter = document.createElement("time");
        let img = document.createElement("img");
        article.classList.add("coment");
        divCommentHeader.classList.add("coment-header");

        divCommentInfo.classList.add("coment-info");
        divCommentFotter.classList.add("coment-footer");
        span.classList.add("resaltado");
        container.appendChild(article);
        article.appendChild(divCommentHeader);
        divCommentHeader.appendChild(img);
        img.src = "../img/comentarioDefault.png";
        divCommentHeader.appendChild(pHeader);
        span.textContent = `${comentario.nombre}`;
        pHeader.insertAdjacentElement("beforebegin", span);
        pHeader.textContent += ` - ${comentario.email}`;

        article.appendChild(divCommentInfo);
        divCommentInfo.appendChild(pCommentInfo);
        pCommentInfo.textContent = comentario.comentario;
        article.appendChild(divCommentFotter);
        divCommentFotter.appendChild(timeCommentFotter);
        timeCommentFotter.textContent = `Comentó a las ${comentario.time[0]}:${comentario.time[1]}`;
    }
}
