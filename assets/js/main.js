console.log("Bienvenido");

var target = 0;
var cargarPagina = function () {
  // Elementos
  var botones = document.querySelectorAll(".control");//$(".control")
  var anterior = document.querySelector(".prev");
  var siguiente = document.querySelector(".sig");

  // Eventos
  botones.forEach(function (boton) {
    // console.log(boton);
    boton.addEventListener("click", cambiarImg);
  });

	anterior.addEventListener("click", prevImg);
	siguiente.addEventListener("click", sigImg);


};

var cambiarImg = function () {
  target = parseInt(this.dataset.target);
  mostrarImg(target);
};

var mostrarImg = function (target) {
  var lastSlide = document.querySelector("div.active");
  var slide = document.querySelector("div[data-slide='" + target +"']");

  lastSlide.classList.remove("active");
  slide.classList.add("active");
};

var prevImg = function (e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 4 : target;
  mostrarImg(target);
};

var sigImg = function (e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 3) ? 0 : target;
  mostrarImg(target);
};

window.addEventListener("load", cargarPagina);
