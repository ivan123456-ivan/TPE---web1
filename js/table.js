"use strict"

let containerTable = document.querySelector("#tbody-tabla");
let btnTable = document.querySelector("#btn-enviar-tabla");
let inputTitulo = document.querySelector("#inputTitulo");
let inputSubtitulo = document.querySelector("#inputSubtitulo");
let inputDescripcion = document.querySelector("#description-table");
let informacionTable = [{
    titulo: "Este es un titulo",
    subtitulo: "Este es un subtitulo",
    descripcion: "Esta es una descripcion"
},]
btnTable.addEventListener("click", (e)=>{
    e.preventDefault();
    containerTable.innerHTML = " ";
    let nuevaInformacion = {
        titulo: inputTitulo.value,
        subtitulo: inputSubtitulo.value,
        descripcion: inputDescripcion.value
    }
    informacionTable.push(nuevaInformacion);
    for(let i = 0; i < informacionTable.length; i++){
        containerTable.innerHTML +=  `  
        <tr>
            <td>${informacionTable[i].titulo}</td>
            <td>${informacionTable[i].subtitulo}</td>
            <td>${informacionTable[i].descripcion}</td>
        </tr>
        `;
        
    }

   
})

containerTable.innerHTML =  `  
    <tr>
        <td>${informacionTable[0].titulo}</td>
        <td>${informacionTable[0].subtitulo}</td>
        <td>${informacionTable[0].descripcion}</td>
    </tr>
    `;






