			$('#menu_steak').click(function() {
				if($('.menu_content_salats').is(':visible') || $('.menu_content_drinks').is(':visible')) {
					$('.menu_content_salats').slideUp();
					$('.menu_content_drinks').slideUp();
					$('.menu_content_steak').slideToggle();
				}
				else {
					$('.menu_content_steak').slideToggle();
				};
				
			});
			$('#menu_salats').click(function() {
				if($('.menu_content_steak').is(':visible') || $('.menu_content_drinks').is(':visible')) {
					$('.menu_content_steak').slideUp();
					$('.menu_content_drinks').slideUp();
					$('.menu_content_salats').slideToggle();
				}
				else {
					$('.menu_content_salats').slideToggle();
				};
			});
			$('#menu_drinks').click(function() {
				if($('.menu_content_steak').is(':visible') || $('.menu_content_salats').is(':visible')) {
					$('.menu_content_steak').slideUp();
					$('.menu_content_salats').slideUp();
					$('.menu_content_drinks').slideToggle();
				}
				else {
					$('.menu_content_drinks').slideToggle();
				};
			});
