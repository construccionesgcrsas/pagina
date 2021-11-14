var menu;
var hamburguesa;
var imagenes;
var contenedor;
var imagen;
window.onload=start;
function start(){
	menu=document.querySelector(".menu-navegacion");
	hamburguesa=document.querySelector(".hamburguesa");
	hamburguesa.addEventListener("click",agregarClase,false);
	document.addEventListener("click",quitarMenu,false);
	imagenes=document.querySelectorAll(".img-galeria");
	contenedor=document.querySelector(".imagen-light");
	contenedor.addEventListener("click",quitarlightBox,false);
	imagen=document.querySelector(".agregar-imagen");
	imagenes.forEach(function(item){item.addEventListener("click",lightBox,false)});
}

function lightBox(e){
	imagen.src=e.target.getAttribute("src");
	contenedor.classList.toggle("show");
	imagen.classList.toggle("showImage");
	hamburguesa.style.opacity=0;
}

function quitarlightBox(e){
	if(e.target!=imagen){
		imagen.classList.toggle("showImage");
		contenedor.classList.toggle("show");
		hamburguesa.style.opacity=1;
	}
}

function agregarClase(){
	menu.className=menu.className+" spread";
}

function quitarMenu(e){
	if(menu.classList.contains("spread") && e.target!=hamburguesa && e.target!=menu){
		menu.className=menu.className.replace("spread","");
		menu.className=menu.className.replace(" ","");
	}
}
