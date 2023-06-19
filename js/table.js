"use strict";

let containerTable = document.querySelector("#tbody-tabla");
let btnEnviarTable = document.querySelector("#btn-enviar-tabla");
let btnGenerarItems = document.querySelector("#btn-generar-items-tabla");
let btnBorrarTable = document.querySelector("#btn-borrar-tabla");
let checkboxTable = document.querySelector("#checkbox-form");
let inputTitulo = document.querySelector("#inputTitulo");
let inputSubtitulo = document.querySelector("#inputSubtitulo");
let inputDescripcion = document.querySelector("#description-table");
let form = document.querySelector("#form");
let advertencia = document.querySelector("#advertencia");
const url = "https://6488ed330e2469c038fe83a4.mockapi.io/news/noticias";
inputDescripcion.value = "";
mostrarInformacion();

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let titulo = formData.get("inputTitulo");
    let subtitulo = formData.get("inputSubtitulo");
    let descripcion = formData.get("description-table");
    let checkbox = checkboxTable.checked;
    if (titulo !== "" && subtitulo !== "" && descripcion !== "") {
        let nuevaInformacion = {
            titulo: titulo,
            subtitulo: subtitulo,
            descripcion: descripcion,
            destacado: checkbox,
        };

        let configuracion = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(nuevaInformacion),
        };

        try {
            let respuesta = await fetch(url, configuracion);
            if (respuesta.status === 201) {
                advertencia.classList.remove("ocultar");
                advertencia.innerHTML = "Noticia generada correctamente!";
                setTimeout(() => {
                    advertencia.classList.add("ocultar");
                }, 8000);
                mostrarInformacion();
            } else {
                alert("No se pudo crear el nuevo elemento.");
            }
        } catch (error) {
            console.log(error);
        }
        advertencia.classList.add("ocultar");
    } else {
        advertencia.classList.remove("ocultar");
        setTimeout(() => {
            advertencia.classList.add("ocultar");
        }, 5000);
    }
});

btnGenerarItems.addEventListener("click", async (e) => {
    e.preventDefault();
    let item = {
        titulo: "Nuevo titulo generado",
        subtitulo: "Nuevo subtitulo generado",
        descripcion: "Nueva descripcion generada",
        destacado: checkboxTable.checked,
    };

    let configuracion = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(item),
    };

    try {
        for (let i = 1; i <= 3; i++) {
            let respuesta = await fetch(url, configuracion);
            if (respuesta.status == 201) {
                advertencia.classList.remove("ocultar");
                advertencia.innerHTML = "Items generados correctamente!";
                setTimeout(() => {
                    advertencia.classList.add("ocultar");
                }, 8000);
            } else {
                alert("No se pudo crear el nuevo elemento.");
            }
        }
        mostrarInformacion();
    } catch (error) {
        console.log(error);
    }
});

// btnBorrarTable.addEventListener("click", (e) => {
//     e.preventDefault();
//     containerTable.innerHTML = " ";
//     informacionTable = [
//         {
//             titulo: "Este es un titulo",
//             subtitulo: "Este es un subtitulo",
//             descripcion: "Esta es una descripcion",
//         },
//     ];
//     mostrar_tabla(0);
// });

async function mostrarInformacion() {
    containerTable.innerHTML = `
    <tr>
        <td></td>

        <td>
            <div class="container-loader">
                <div class="loader">
            </div>
        </td

        <td></td>
    </tr>
    </div>`;
    try {
        let respuesta = await fetch(url);
        if (respuesta.ok) {
            let data = await respuesta.json();
            containerTable.innerHTML = "";
            for (let renglon of data) {
                if (renglon.destacado === true) {
                    let elementosImportantes = `  
                    <tr>
                        <td class="es-importante">${renglon.titulo}</td>
                        <td class="es-importante">${renglon.subtitulo}</td>
                        <td class="es-importante">${renglon.descripcion}</td>
                    </tr>
                    `;
                    containerTable.innerHTML += elementosImportantes;
                } else {
                    let elementos = `  
                    <tr>
                        <td>${renglon.titulo}</td>
                        <td>${renglon.subtitulo}</td>
                        <td>${renglon.descripcion}</td>
                    </tr>
                    `;
                    containerTable.innerHTML += elementos;
                }
            }
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
}
