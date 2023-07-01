"use strict";

let containerTable = document.querySelector("#tbody-tabla");
let btnGenerarItems = document.querySelector("#btn-generar-items-tabla");
let checkboxTable = document.querySelector("#checkbox-form");
let inputTitulo = document.querySelector("#inputTitulo");
let inputSubtitulo = document.querySelector("#inputSubtitulo");
let inputDescripcion = document.querySelector("#description-table");
let form = document.querySelector("#form");
let advertencia = document.querySelector("#advertencia");
const URL_API = "https://6488ed330e2469c038fe83a4.mockapi.io/news/noticias";
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

        let configuracion = metodos("POST", nuevaInformacion);

        try {
            let respuesta = await fetch(URL_API, configuracion);
            let mensaje = "Noticia generada correctamente!";
            let mensajeError = "No se pudo crear el nuevo elemento.";
            respuestasAdvertencias(respuesta, mensaje, mensajeError);
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

    let configuracion = metodos("POST", item);
    try {
        for (let i = 1; i <= 3; i++) {
            let respuesta = await fetch(URL_API, configuracion);
            let mensaje = "Items generados correctamente!";
            let mensajeError = "No se pudo crear el nuevo elemento.";
            respuestasAdvertencias(respuesta, mensaje, mensajeError);
        }
        mostrarInformacion();
    } catch (error) {
        console.log(error);
    }
});

function eliminarElementos() {
    let btnsBorrar = document.querySelectorAll(".btn-eliminar");
    btnsBorrar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            e.preventDefault();
            let id = btn.dataset.item;
            containerTable.innerHTML = " ";
            let configuracion = metodos("DELETE");
            try {
                let response = await fetch(`${URL_API}/${id}`, configuracion);
                let mensaje = "La noticia " + id + " se ha eliminado!";
                let mensajeError = "No se pudo eliminar la tabla.";
                respuestasAdvertencias(response, mensaje, mensajeError);
                mostrarInformacion();
            } catch (error) {
                console.log("Error al intentar borrar el registro: ", error);
            }
        });
    });
}

function editarElementos() {
    let btnsEditar = document.querySelectorAll(".btn-editar");
    btnsEditar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            e.preventDefault();
            let id = btn.dataset.item;
            btn.textContent = "Cargando...";
            try {
                let response = await fetch(`${URL_API}/${id}`);
                let data = await response.json();
                inputTitulo.value = data.titulo;
                inputSubtitulo.value = data.subtitulo;
                inputDescripcion.value = data.descripcion;
                btn.textContent = "✅ Confirmar";
            } catch (error) {
                console.log(error);
            }
            btn.addEventListener("click", async (e) => {
                e.preventDefault();
                let formData = new FormData(form);
                let titulo = formData.get("inputTitulo");
                let subtitulo = formData.get("inputSubtitulo");
                let descripcion = formData.get("description-table");
                let checkbox = checkboxTable.checked;

                let nuevaInformacion = {
                    titulo: titulo,
                    subtitulo: subtitulo,
                    descripcion: descripcion,
                    destacado: checkbox,
                };

                let configuracion = metodos("PUT", nuevaInformacion);
                try {
                    let response = await fetch(
                        `${URL_API}/${id}`,
                        configuracion
                    );
                    let mensaje = "La noticia " + id + " se ha editado!";
                    let mensajeError = "No se pudo editar la tabla.";
                    respuestasAdvertencias(response, mensaje, mensajeError);
                    mostrarInformacion();
                } catch (error) {
                    console.log(
                        "Error al intentar borrar el registro: " + error
                    );
                }
            });
        });
    });
}

async function mostrarInformacion() {
    // containerTable.innerHTML = `
    // <tr>
    //     <td></td>

    //     <td></td>

    //     <td>
    //         <div class="container-loader">
    //             <div class="loader">
    //         </div>
    //     </td

    //     <td></td>
    // </tr>`;
    let containerLoader = document.createElement("div");
    containerLoader.classList.add("container-loader");
    containerTable.appendChild(containerLoader);
    let loader = document.createElement("div");
    loader.classList.add("loader");
    containerLoader.appendChild(loader);
    try {
        let respuesta = await fetch(URL_API);
        if (respuesta.ok) {
            let data = await respuesta.json();
            containerTable.innerHTML = "";
            for (let renglon of data) {
                let tr = document.createElement("tr");
                let titulo = document.createElement("td");
                let subtitulo = document.createElement("td");
                let descripcion = document.createElement("td");
                let botonera = document.createElement("td");
                let btnEditar = document.createElement("button");
                let iconoEditar = document.createElement("i");
                let btnEliminar = document.createElement("button");
                let iconoEliminar = document.createElement("i");
                 // creacion de fila de noticia
                titulo.textContent = renglon.titulo;
                subtitulo.textContent = renglon.subtitulo;
                descripcion.textContent = renglon.descripcion;
                // botonera

                //boton editar
                btnEditar.classList.add("btn1", "btn-editar");
                btnEditar.setAttribute("data-item", `${renglon.id}`);
                btnEditar.textContent = "Editar ";
                iconoEditar.classList.add("bi", "bi-pencil-square");
                btnEditar.appendChild(iconoEditar);

                //boton eliminar
                btnEliminar.classList.add("btn1", "btn-eliminar");
                iconoEliminar.classList.add("bi", "bi-trash");
                btnEliminar.textContent = "Eliminar ";
            
                btnEliminar.appendChild(iconoEliminar);
                btnEliminar.setAttribute("data-item", `${renglon.id}`);
                botonera.append(btnEditar, btnEliminar);

                //creacion de la fila y sus elementos

                tr.append(titulo, subtitulo, descripcion, botonera);
                containerTable.appendChild(tr);

                esNoticiaDestacada(renglon, titulo, subtitulo, descripcion,  botonera);

                    // let elementosImportantes = `
                    // <tr>
                    //     <td class="es-importante">${renglon.titulo}</td>
                    //     <td class="es-importante">${renglon.subtitulo}</td>
                    //     <td class="es-importante">${renglon.descripcion}</td>
                    //     <td class="es-importante">
                    //         <button class="btn1 btn-editar" data-item="${renglon.id}"><i class="bi bi-pencil-square"></i> Editar</button>
                    //         <button class="btn1 btn-eliminar" data-item="${renglon.id}"><i class="bi bi-trash"></i>Eliminar</button>
                    //     </td>
                    // </tr>
                    // `;
                    // creacion de fila de noticia
                  

                


                    // let elementos = `
                    // <tr>
                    //     <td>${renglon.titulo}</td>
                    //     <td>${renglon.subtitulo}</td>
                    //     <td>${renglon.descripcion}</td>
                    //     <td>
                    //         <button class="btn1 btn-editar" data-item="${renglon.id}"><i class="bi bi-pencil-square"></i> Editar</button>
                    //         <button class="btn1 btn-eliminar" data-item="${renglon.id}"><i class="bi bi-trash"></i> Eliminar</button>
                    //     </td>
                    // </tr>
                    // `;
                    // creacion de fila de noticia

            }
            eliminarElementos();
            editarElementos();
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
}

function vaciarInputs() {
    inputTitulo.value = "";
    inputSubtitulo.value = "";
    inputDescripcion.value = "";
}

function esNoticiaDestacada(renglon, titulo, subtitulo, descripcion,  botonera) {
    if (renglon.destacado) {
        titulo.classList.add("es-importante");
        subtitulo.classList.add("es-importante");
        descripcion.classList.add("es-importante");
        botonera.classList.add("es-importante");
    }
}


function metodos(metodo, nuevaInformacion) {
    let configuracion;
    if (metodo === "POST" || "PUT") {
        configuracion = {
            method: metodo,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(nuevaInformacion),
        };
    }
    if (metodo === "DELETE") {
        configuracion = {
            method: metodo,
            headers: {
                "Content-type": "application/json",
            },
        };
    }
    return configuracion;
}

function respuestasAdvertencias(response, mensaje, mensajeError) {

    if (response.status === 200 || 201) {
        advertencia.classList.remove("ocultar");
        advertencia.textContent = mensaje;
        setTimeout(() => {
            advertencia.classList.add("ocultar");
        }, 8000);
        vaciarInputs();
        if (response.status === 201) {
            mostrarInformacion();
        }
    } else {
        advertencia.textContent = mensajeError;
    }

}