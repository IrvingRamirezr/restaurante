$(document).ready(function(){
    //Efecto menú
    var menu = $('.menu a');
    menu.each(function(index, elemento){
        var esta = $(this);
		esta.css({
			'top': '-200px'
		});

		esta.animate({
			top: '0'
		}, 2000 + (index * 500));
    });
    //Efecto Header
    var pantalla = $(window);
    if( pantalla.width() > 800 ){
        var textos = $('header .textos');
		textos.css({
			opacity: 0,
			marginTop: 0
		});

		textos.animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
    }
    //Scroll menú
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe - 100
		}, 500);
    });
    
    $('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 500);
    });
    
    $('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 500);
    });
    
    $('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});

});