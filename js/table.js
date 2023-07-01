"use strict";

let containerTable = document.querySelector("#tbody-tabla");
let btnEnviarTable = document.querySelector("#btn-enviar-tabla");
let btnGenerarItems = document.querySelector("#btn-generar-items-tabla");
let btnBorrarTable = document.querySelector("#btn-borrar-tabla");
let checkboxTable = document.querySelector("#checkbox-form");
let inputDescripcion = document.querySelector("#description-table");
let advertencia = document.querySelector("#advertencia");
inputDescripcion.value = "";
let form = document.querySelector("#form-table");
let informacionTable = [
    {
        titulo: "Este es un titulo",
        subtitulo: "Este es un subtitulo",
        descripcion: "Esta es una descripcion",
        destacado: checkboxTable.checked,
    },
];

mostrar_tabla(0);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let titulo = formData.get("titulo");
    let subtitulo = formData.get("subtitulo");
    let descripcion = formData.get("description-table");
    if (
        titulo.trim() != "" &&
        subtitulo.trim() != "" &&
        descripcion.trim() != ""
    ) {
        containerTable.innerHTML = " ";
        let nuevaInformacion = {
            titulo: titulo,
            subtitulo: subtitulo,
            descripcion: descripcion,
            destacado: checkboxTable.checked,
        };
        informacionTable.push(nuevaInformacion);
        mostrarInformacion();
        titulo = "";
        subtitulo = "";
        descripcion = "";
        advertencia.classList.add("ocultar");
    } else {
        advertencia.classList.remove("ocultar");
        setTimeout(() => {
            advertencia.classList.add("ocultar");
        }, 5000);
    }
});

btnGenerarItems.addEventListener("click", (e) => {
    e.preventDefault();
    //let random = Math.floor(Math.random() * 3 + 1);
    let item1 = {
        titulo: "Nuevo titulo generado",
        subtitulo: "Nuevo subtitulo generado",
        descripcion: "Nueva descripcion generada",
        destacado: checkboxTable.checked,
    };

    for (let i = 1; i <= 3; i++) {
        informacionTable.push(item1);
    }

    containerTable.innerHTML = " ";

    mostrarInformacion();
});

btnBorrarTable.addEventListener("click", (e) => {
    e.preventDefault();
    containerTable.innerHTML = " ";
    informacionTable = [
        {
            titulo: "Este es un titulo",
            subtitulo: "Este es un subtitulo",
            descripcion: "Esta es una descripcion",
        },
    ];
    mostrar_tabla(0);
});

function mostrar_tabla(sub) {
    let tr = document.createElement("tr");
    let tdTitulo = document.createElement("td");
    let tdSubtitulo = document.createElement("td");
    let tdDescripcion = document.createElement("td");
    containerTable.appendChild(tr);
    tr.append(tdTitulo, tdSubtitulo, tdDescripcion);
    tdTitulo.textContent = `${informacionTable[sub].titulo}`;
    tdSubtitulo.textContent = `${informacionTable[sub].subtitulo}`;
    tdDescripcion.textContent = `${informacionTable[sub].descripcion}`;
}

function mostrar_destacado(sub) {
    let tr = document.createElement("tr");
    let tdTitulo = document.createElement("td");
    let tdSubtitulo = document.createElement("td");
    let tdDescripcion = document.createElement("td");
    containerTable.appendChild(tr);
    tr.append(tdTitulo, tdSubtitulo, tdDescripcion);
    tdTitulo.textContent = `${informacionTable[sub].titulo}`;
    tdSubtitulo.textContent = `${informacionTable[sub].subtitulo}`;
    tdDescripcion.textContent = `${informacionTable[sub].descripcion}`;
    tdTitulo.classList.add("es-importante");
    tdSubtitulo.classList.add("es-importante");
    tdDescripcion.classList.add("es-importante");
}
function mostrarInformacion() {
    for (let j = 0; j < informacionTable.length; j++) {
        if (informacionTable[j].destacado === true) {
            mostrar_destacado(j);
        } else {
            mostrar_tabla(j);
        }
    }
}
