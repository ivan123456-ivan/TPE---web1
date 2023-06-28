"use strict";


let form = document.querySelector("#form-coments");
let container = document.querySelector(".coments-container");
let url = "https://649c87880480757192384e48.mockapi.io/commentsInformation";
mostrar();
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let nombre = formData.get("nombre");
    let email = formData.get("email");
    let comentarios = formData.get("comentarios");
    if (
        nombre != "" &&
        email != "" &&
        comentarios != ""
    ) {
        let fecha = new Date();
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();

        let nuevoComentario = {
            "nombre": nombre,
            "email": email,
            "comentario": comentarios,
            "time": [hora, minutos],
        };
        let config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(nuevoComentario)
        };
        try {
            let response = await fetch(url, config);
            if(response.status === 201){
                mostrar();
            }
        } catch (error) {
            console.log(error);
        }
    }
})

async function mostrar() {
    let response = await fetch(url);
    let data = await response.json();
    container.innerHTML = "";
    for (let j = 0; j < data.length; j++) {
        crearComentario(data, j);
    }
}



async function crearComentario(data, pos) {

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
    img.src = "../../img/comentarioDefault.png";
    divCommentHeader.appendChild(pHeader);
    span.textContent = `${data[pos].nombre}`;
    pHeader.insertAdjacentElement("beforebegin", span);
    pHeader.textContent += ` - ${data[pos].email}`;
    
    article.appendChild(divCommentInfo);
    divCommentInfo.appendChild(pCommentInfo);
    pCommentInfo.textContent =  `${data[pos].comentario} `;
    article.appendChild(divCommentFotter);
    divCommentFotter.appendChild(timeCommentFotter);
    timeCommentFotter.textContent =  `Comentó a las ${data[pos].time[0]}:${data[pos].time[1]}`;
}
