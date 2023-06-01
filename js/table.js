"use strict";

let containerTable = document.querySelector("#tbody-tabla");
let btnEnviarTable = document.querySelector("#btn-enviar-tabla");
let btnGenerarItems = document.querySelector("#btn-generar-items-tabla");
let btnBorrarTable = document.querySelector("#btn-borrar-tabla");
let checkboxTable = document.querySelector("#checkbox-form");
let inputTitulo = document.querySelector("#inputTitulo");
let inputSubtitulo = document.querySelector("#inputSubtitulo");
let inputDescripcion = document.querySelector("#description-table");

let informacionTable = [
    {
        titulo: "Este es un titulo",
        subtitulo: "Este es un subtitulo",
        descripcion: "Esta es una descripcion",
    },
];

mostrar_tabla(0, 1);

btnEnviarTable.addEventListener("click", (e) => {
    e.preventDefault();
    containerTable.innerHTML = " ";
    let nuevaInformacion = {
        titulo: inputTitulo.value,
        subtitulo: inputSubtitulo.value,
        descripcion: inputDescripcion.value,
        destacado: checkboxTable,
    };
    informacionTable.push(nuevaInformacion);
    for (let i = 0; i < informacionTable.length; i++) {
        mostrar_tabla(i, 2);
    }
});

btnGenerarItems.addEventListener("click", (e) => {
    e.preventDefault();
    //let random = Math.floor(Math.random() * 3 + 1);
    let item1 = {
        titulo: "Nuevo titulo generado",
        subtitulo: "Nuevo subtitulo generado",
        descripcion: "Nueva descripcion generada",
    };

    for (let i = 1; i <= 3; i++) {
        informacionTable.push(item1);
        mostrar_tabla(i, 2);
    }
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
    mostrar_tabla(0, 1);
});

function mostrar_tabla(sub, signo) {
    let elementos = `  
    <tr>
        <td>${informacionTable[sub].titulo}</td>
        <td>${informacionTable[sub].subtitulo}</td>
        <td>${informacionTable[sub].descripcion}</td>
    </tr>
    `;

    let elementosImportantes = `  
    <tr>
        <td class="es-importante">${informacionTable[sub].titulo}</td>
        <td class="es-importante">${informacionTable[sub].subtitulo}</td>
        <td class="es-importante">${informacionTable[sub].descripcion}</td>
    </tr>
    `;
    switch (signo) {
        case 1:
            containerTable.innerHTML = elementos;
            break;
        case 2: //para concatenar
            containerTable.innerHTML += elementos;
            break;
        case 3:
            containerTable.innerHTML += elementosImportantes;
            break;
        default:
            break;
    }
}
