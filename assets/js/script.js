/**
 * Custom script by Kilian Domaratius
 */

/*
 * Contact form
 */
$(function() {
	var form = $('#ajax-contact');
	var formMessages = $('#contact-alerts');

	// set up an event listener for the contact form.
	$(form).submit(function(e) {
		// stop the browser from submitting the form.
		e.preventDefault();

		var formData = $(form).serialize();
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// add alert classes
			$(formMessages).removeClass('error');
      $(formMessages).addClass('success');
      
			$(formMessages).text(response);

			// Clear the form.
			$('#contact-name').val('');
			$('#contact-email').val('');
			$('#contact-message').val('');
		})
		.fail(function(data) {
			// add alert error class
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// set text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('An error occurred and your message could not be sent.');
			}
		});

	});

});


/*
 * Bootstrap overwrite
 */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
