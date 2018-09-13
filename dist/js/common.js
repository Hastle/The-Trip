$(document).ready(function() {

	new WOW().init();

	$("#feedback-1,#feedback-2").submit(function() {
		var captcha = grecaptcha.getResponse();
		if (captcha.length == 0) {
			alert("Не пройдена captcha, попробуйте еще раз.")
		} else {
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.close();
				alert("Ваше сообщение успешно отправено!");
				$('#feedback-1')[0].reset();
				setTimeout(function() {
					$.fancybox.close();
				}, 1000);
			});
		}
		return false;
	});

	$("a[href*='#'],.scroll").mPageScroll2id();

	$('.slick').slick({
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
	});

	$('.slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: true,
		adaptiveHeight: true
	});

	$('.owl-carousel').owlCarousel({
		items: 3,
		lazyLoad: true,
		loop: true,
		nav: true,
		dots: true,
		navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		margin: 10
	});

	var rellax = new Rellax('.rellax', {
		speed: -2,
		center: true,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	});

});