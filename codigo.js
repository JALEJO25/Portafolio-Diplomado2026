/*CODIGO PARA CAMBIAR AL TEMA DARK O LIGTH*/

const btnTheme = document.getElementById('nav-btns-tema');
const body = document.body;
// Selecciona el icono dentro del botón
const icon = btnTheme.querySelector('i'); 
// Función para actualizar el icono
const updateIcon = (isLight) => {
  if (isLight) {
    icon.classList.replace('ri-sun-line', 'ri-moon-line');
  } else {
    icon.classList.replace('ri-moon-line', 'ri-sun-line');
  }
};

// Comprobar si ya había una preferencia guardada
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  updateIcon(true);
}


btnTheme.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  const isLight = body.classList.contains('light-theme');
  
  // Guardar preferencia
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  
  // Cambiar icono
  updateIcon(isLight);
});










































/*
function cepillarDientes() {
    console.log("1. Cepillando los dientes .... (entra y sale de la pila rapido)");
}
 
function bañarse() {
    cepillarDientes(); //se apila encima de bañarse
    console.log("2. cuerpo limpio (bañarse termina ahora)");
}
 
function empezarDia(){
    bañarse(); //se apila encima de empezarDia
    console.log("3. listo para trabajar (pila vacia )");
}
 
empezarDia(); //se apila empezarDia

const btnCV=document.querySelector("#btn-cv")
btnCV.addEventListener(alert("hiciste click"))



// ejemplo de carga de portafolio  con fetch() y async/await
 
async function cargarProyectos() {
    try {
        const response = await fetch("https://api.github.com/users/loquendo2309/repos");
        if (!response.ok) {
            throw new Error("Error al cargar los proyectos");
        }
        const proyectos = await response.json();
        const contenedorProyectos = document.getElementById("contenedor-proyectos");
        contenedorProyectos.innerHTML = ""; //limpiar el contenedor antes de agregar nuevos proyectos
        proyectos.forEach(proyecto => {
            contenedorProyectos.innerHTML += `
                <div class="proyecto-card">
                    <h3>${proyecto.name}</h3>  
                    <p>${proyecto.description || "Sin descripción"}</p>
                    <a href="${proyecto.html_url}" target="_blank">Ver en GitHub</a>
                </div>
                    `;
        });
    } catch (error) {
        console.error("Error:", error);
    }
}
 
cargarProyectos();
*/
/*
/// modularidad
// controlador de interfaz
 const botonTema = document.getElementById("nav-btns-tema");
const UI = {
        cuerpo: document.body,
 
    alternarColor: function() {
        const esOscuro = this.cuerpo.style.backgroundColor === "black";
        this.cuerpo.style.backgroundColor = esOscuro ? "white" : "black";
        this.cuerpo.style.color = esOscuro ? "black" : "white";
    },
    irAseccion: function(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" }); }
 
};
botonTema.addEventListener("click", () => UI.alternarColor());

*/
/*
// delegacion  de  eventos: un solo listener para todo el contenedor de proyectos
const contenedor = document.getElementsByClassName("tarjeta"); 
contenedor.addEventListener("click", function(evento){
 // .target el elemento que fue clikeado .closest busca el padre mas cercano que coincida con el selector dado
    const tarjeta = evento.target.closest(".tarjeta-content");
    if(tarjeta){
        alert ("Haz hecho clic en un proyecto: " + tarjeta.querySelector("h4").innerText);
    }
 
});*/
     
// 1. Usamos la clase de la sección padre: "proyectos"
const contenedorProyectos = document.querySelector(".proyectos"); 

if (contenedorProyectos) {
    contenedorProyectos.addEventListener("click", function(evento) {        
        // 2. Buscamos el div que contiene el texto (usando tu clase 'tajeta-content')
        const tarjeta = evento.target.closest(".tajeta-content");
        
        // 3. Verificamos si existe la tarjeta y el h4
        if (tarjeta) {
            const titulo = tarjeta.querySelector("h4");
            
            if (titulo) {
                alert("Has hecho clic en un proyecto: " + titulo.innerText);
            }
        }
    });
} else {
    console.error("No se encontró el contenedor con la clase .proyectos");
}