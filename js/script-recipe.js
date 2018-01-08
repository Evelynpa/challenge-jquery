$(document).ready(function(){
	/*ETAPA UNO
	ocultar icono menu*/
	$('#iconMenu').hide();

	console.log('El HTML está listo!');
});

$('.js-show-recipe').on('click', function(){
	$('.page').removeClass('make');
	$('.js-show-recipe').addClass('active');
    $('.js-show-make').removeClass('active');
});

$('.js-show-make').on('click', function(){
	$('.page').addClass('make');
	$('.js-show-make').addClass('active');
    $('.js-show-recipe').removeClass('active');
});