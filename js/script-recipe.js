$(document).ready(function(){
	/*ETAPA UNO
	ocultar icono menu*/
	$('#iconMenu').hide();

	console.log('El HTML está listo!');
});

$('.js-show-recipe').on('click', function(){
	$('.page').removeClass('make');
});

$('.js-show-make').on('click', function(){
	$('.page').addClass('make');
});