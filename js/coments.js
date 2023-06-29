"use strict";
let inputs = document.querySelectorAll("input");
let textArea = document.querySelectorAll("textarea");
let btn = document.querySelector(".btn1");
let container = document.querySelector(".coments-container");
let advertencia = document.querySelector("#advertencia");
textArea[0].value = "";
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

mostrar_comentario(0);

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        inputs[0].value != "" &&
        inputs[1].value != "" &&
        textArea[0].value != ""
    ) {
        let fechaUser = new Date();
        let horaUser = fechaUser.getHours();
        let minutosUser = fechaUser.getMinutes();

        container.innerHTML = "";
        let nuevoComentario = {
            nombre: inputs[0].value,
            email: inputs[1].value,
            comentario: textArea[0].value,
            time: [horaUser, minutosUser],
        };
        coments.push(nuevoComentario);
        for (let j = 0; j < coments.length; j++) {
            mostrar_comentario(j);
        }
        inputs[0].value = "";
        inputs[1].value = "";
        textArea[0].value = "";
        advertencia.classList.add("ocultar");
    } else {
        advertencia.classList.remove("ocultar");
        setTimeout(() => {
            advertencia.classList.add("ocultar");
        }, 5000);
    }
});

function mostrar_comentario(sub) {
    let comentario = `
        <article class="coment">
            <div class="coment-header">
              <img src="../img/comentarioDefault.png">
              <p><span class="resaltado"> ${coments[sub].nombre}</span> - ${coments[sub].email}</p>
            </div>
            <div class="coment-info">
              <p>${coments[sub].comentario}</p>
            </div>
            <div class="coment-footer">
              <time>Comentó a las ${coments[sub].time[0]}:${coments[sub].time[1]}</time>
            </div>
          </article>
    `;
    container.innerHTML += comentario;
}
