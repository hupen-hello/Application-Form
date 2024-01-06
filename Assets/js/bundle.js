$(document).on("click", '#send-button', function(event){
	var check_form = 0;
	if($('#name').val() == ""){$('#name').addClass('error-champ'); check_fomr = 1;}
	else{$('#name').removeClass('error-champ');}
	
	if($('#phone').val() == ""){$('#phone').addClass('error-champ'); check_fomr = 1;}
	else{$('#phone').removeClass('error-champ');}
	
	if($('#email').val() == ""){$('#email').addClass('error-champ'); check_fomr = 1;}
	else{$('#email').removeClass('error-champ');}
	
	if($('#message').val() == ""){$('#message').addClass('error-champ'); check_fomr = 1;}
	else{$('#message').removeClass('error-champ');}
	
	if(check_form == 0){
		$.ajax({
			method: "POST",
			url: "/action.php",
			data: {
				name: $('#name').val(),
				phone: $('#phone').val(),
				email: $('#email').val(),
				message: $('#message').val()
			}
		}).done(function(msg){
			if(msg == 'ok'){
				$('#modal-4').modal('hide');
				$('#modal-5').modal('show');
			}
		});
	}
});
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
var tracking_id = $('#tracking_id').val() ;


var step ;

$(document).on("change", '.reason input', function(event) {
    window.location.href = '/formulaire?usercode='+$('#usercode').val();
});

$(document).on("click", '.button-action button', function(event) {
    window.location.href = '/formulaire?usercode='+$('#usercode').val();
});

$(document).on("click", '.selected-flag', function(event) {
    $(this).parent('.flag-dropdown').find('.country-list').toggle();
});
$(document).on("click", '.country-list li.country', function(event) {
    var Flag_class = $(this).attr('data-country-code');
    $(this).parents('.flag-dropdown').find('.selected-flag .flag ').attr('class', 'flag '+Flag_class);
    var Flag_name = $(this).find('.country-name').text();
    $(this).parents('.flag-dropdown').find('.selected-flag').attr('title', Flag_name);
    $(this).parents('.country-select').find('input#citizenship').val(Flag_name);
    $(this).parents('.country-list').toggle();
});