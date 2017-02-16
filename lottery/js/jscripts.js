var clock;
			
	$(document).ready(function() {
		clock = $('.clock').FlipClock({
			clockFace: 'TwentyFourHourClock'
		});


		 // Tabs
    $('.tab-container').easytabs();

    //hiden modal
    $( '.btn-modal, .modal_icon' ).click( function() {
    		if ($( '.hidden-modal' ).is(':hidden') ){
    			$( '.hidden-modal' ).show();
    		} else {
    			$ ('.hidden-modal').hide();
    		}

    	});

    $( '.hidden__btn-menu, .btn-close__menu' ).click( function() {
    		if ($( '.header__list-hidden' ).is(':hidden') ){
    			$( '.header__list-hidden' ).show();
    		} else {
    			$ ('.header__list-hidden').hide();
    		}

    	});

});

	var clock;
			
			$(document).ready(function() {
				var date = new Date('2014-01-01 05:02:12 pm');

				clock = $('.clockmini').FlipClock(date, {
					clockFace: 'TwentyFourHourClock'
				});
			});
