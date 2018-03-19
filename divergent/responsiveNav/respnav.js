$(function() {
			var pull 		= $('#pull');
				menu 		= $('nav ul');
				menuHeight	= menu.height();
			
			var estado=1			

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
				if(estado==1){
					$("#pull").css("color","rgb(0,0,0)");
					estado =0
					}
				else{
					$("#pull").css("color","rgb(255,255,255)");
					estado=1
					}	
				
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
			
						

		});