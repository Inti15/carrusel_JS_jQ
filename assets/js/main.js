// console.log("Bienvenido");

var target = 0;
var cargarPagina = function () {
  // Elementos
  var $botones = $(".control");//$(".control")
  var $anterior = $(".prev");
  var $siguiente = $(".sig");

  // Eventos
    // console.log(boton);
  $botones.click(cambiarImg);
	$anterior.click(prevImg);
	$siguiente.click(sigImg);

  $(".control").eq(target).focus();
};

var cambiarImg = function () {
  target = parseInt($(this).data("target"));
  mostrarImg(target);
};

var mostrarImg = function (target) {
  var $lastSlide = $("div.active");
  var $slide = $("div[data-slide='" + target +"']");

  $lastSlide.removeClass("active");
  $slide.addClass("active");

  $(".control").eq(target).focus();
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
  target = (target > 4) ? 0 : target;
  mostrarImg(target);
};

$(document).ready(cargarPagina);
// window.addEventListener("load", cargarPagina);
