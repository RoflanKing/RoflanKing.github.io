$(function(){

$('.slider_inner, .news__slider-inner').slick({
	nextArrow:'<button type="button" class="slick_button slick-next"></button>',
	prevArrow:'<button type="button" class="slick_button slick-prev"></button>',
	infinite: false,
})
	$('input, select').styler();
	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	})
})