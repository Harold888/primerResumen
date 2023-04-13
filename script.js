//Crear un "oidor" de eventos
//1.Obtener una referencia al elemento
//enlazar el elemento del DOM a un objeto definido en js

let miEtiqueta;
miEtiqueta = document.getElementById("etiquetah");

//Definir el oidor eventos a eventLIstener

miEtiqueta.addEventListener('mouseleave', ()=>{
   alert("Hola Mundo") ;
})
