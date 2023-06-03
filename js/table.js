"use strict";

let containerTable = document.querySelector("#tbody-tabla");
let btnEnviarTable = document.querySelector("#btn-enviar-tabla");
let btnGenerarItems = document.querySelector("#btn-generar-items-tabla");
let btnBorrarTable = document.querySelector("#btn-borrar-tabla");
let checkboxTable = document.querySelector("#checkbox-form");
let inputTitulo = document.querySelector("#inputTitulo");
let inputSubtitulo = document.querySelector("#inputSubtitulo");
let inputDescripcion = document.querySelector("#description-table");
let advertencia = document.querySelector("#advertencia");
inputDescripcion.value = "";

let informacionTable = [
    {
        titulo: "Este es un titulo",
        subtitulo: "Este es un subtitulo",
        descripcion: "Esta es una descripcion",
        destacado: checkboxTable.checked,
    },
];

mostrar_tabla(0);

btnEnviarTable.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        inputTitulo.value != "" &&
        inputSubtitulo.value != "" &&
        inputDescripcion.value != ""
    ) {
        containerTable.innerHTML = " ";
        let nuevaInformacion = {
            titulo: inputTitulo.value,
            subtitulo: inputSubtitulo.value,
            descripcion: inputDescripcion.value,
            destacado: checkboxTable.checked,
        };
        informacionTable.push(nuevaInformacion);
        mostrarInformacion();
        inputTitulo.value = "";
        inputSubtitulo.value = "";
        inputDescripcion.value = "";
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
    let elementos = `  
    <tr>
        <td>${informacionTable[sub].titulo}</td>
        <td>${informacionTable[sub].subtitulo}</td>
        <td>${informacionTable[sub].descripcion}</td>
    </tr>
    `;
    containerTable.innerHTML += elementos;
}

function mostrar_destacado(sub) {
    let elementosImportantes = `  
    <tr>
        <td class="es-importante">${informacionTable[sub].titulo}</td>
        <td class="es-importante">${informacionTable[sub].subtitulo}</td>
        <td class="es-importante">${informacionTable[sub].descripcion}</td>
    </tr>
    `;
    containerTable.innerHTML += elementosImportantes;
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
