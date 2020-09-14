$(document).ready(function(){

    $(window).scroll(function(){
        var tVentana = $(window).width();

        if(tVentana > 800){
            var scroll  = $(window).scrollTop();
            var textos = $('header .textos');
            textos.css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });
            
            var acercaDe = $('.acerca-de article');
            acercaDe.css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
        }
    });
    
    $(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800) {
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

});