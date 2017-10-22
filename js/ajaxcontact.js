$(document).ready(function() {
	$('.btn_sing').bind('click', function() {
		var Email = $('.sing_email').val();
		$('.sing_email').val('');
		$.ajax({
			url: 'http://localhost/steakhouse/php/sing-up.php',
			type: 'post',
			data: { email: Email },
			dataType: 'html',
			success: function(data) {
				$('#sing_result').text(data);
			}
		});
		return false;
	});

	$('.form_submit').bind('click', function() {
		var Email = $('.location_email').val();
		var Name = $('.location_name').val();
		var Sub = $('.location_sub').val();
		var Mess = $('.message_text').val();

		$('.location_email').val('');
		$('.location_name').val('');
		$('.location_sub').val('');
		$('.message_text').val('');

		$.ajax({
			url: 'http://localhost/steakhouse/php/contact_form.php',
			type: 'post',
			data: { email: Email, name: Name, sub: Sub, mess: Mess },
			dataType: 'html',
			success: function(data) {
				$('#location_result').text(data);
			}
		});
		return false;
	});
	
});