$(function () {
	$('.burger-icon').on('click', function () {
		$(this).toggleClass('active'); // Добавление/удаление класса 'active' для иконки бургера
		$('.menu___list').toggleClass('menu__list--active'); // Добавление/удаление класса для пунктов меню
	});

	$('.menu___list').on('click', function () {
		$(this).removeClass('menu__list--active'); // Скрыть меню при клике на пункт меню
		$('.burger-icon').removeClass('active'); // Убрать класс 'active' с иконки бургера
	});

	$('.reviews__slider-content').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});
