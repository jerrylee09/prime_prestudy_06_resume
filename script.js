$(document).ready(function() {
	$('.container').on('click', 'button', function() {
		$('.container-fluid').removeClass('cantSeeMe');
		$('button').addClass('cantSeeMe');
	});

	$('li').on('mouseover', function() {
		$(this).animate({marginLeft: "5px",fontSize: "20px"}, "slow");

	});
	$('li').on('mouseleave', function() {
		$(this).animate({marginLeft: "0px",fontSize: "1em"}, "slow");

	});
});
