$(document).ready(function(){

	i = 12;
	g = 16;
	height = $('.card-one').height() - 50;

	if ($(window).width() < 1023) {
		$('.block.market, .food-logo').wrapAll('<div class="block-top"></div>');
	}

	$(document)
	.on('click', 'a', function(e){
		e.preventDefault();
	}).on('click', '.tabs ul.tab li a', function(e){
		data = $(this).attr('data');
		$(this).closest('div.tabs').find('.tab').addClass('none');
		$(this).closest('div.tabs').find('.' + data + '').removeClass('none');
		$('.tabs a.h3').removeClass('h3_act');
		$(this).closest('li').find('a.h3').addClass('h3_act');
	}).on('click', '.left-content .close', function(){
		$(this).closest('.not.prod-card').animate({
			'left': '-110%'
		}, 1000, function(){
			if ($(window).width() < 1023 && $(window).width() > 767) {
				$('.notif').animate({'left': '367%'}, 200);
				$('.card-animate').animate({'margin-left': '-'+height+''}).addClass('animated-card');
			} else {
				$('.notif').animate({'left': '110%'}, 200);
				$('.card-animate').animate({'margin-top': '-'+height+''}).addClass('animated-card');
			}
		});
	}).on('click', '.dropdown', function(){
		$('.dropdown-content').slideToggle();
	}).on('click', '.notif', function(){
		if ($(window).width() < 1023 && $(window).width() > 767) {
			$('.card-animate').animate({'margin-left': '0'}).addClass('animated-card');
		} else {
			$('.card-animate').animate({'margin-top': '0'}).removeClass('animated-card');
		}
		self = $(this);
		self.animate({
			'right': '-45px',
			'left': '-45px'
		}, 200, function(){
			self.closest('.not.prod-card').animate({
				'left': 0
			});	
		});
	}).on('click', 'ul.svg li', function(){
		$('ul.svg li').find('span').removeClass('blue');
		$(this).find('span').addClass('blue');
	}).on('click', 'ul.rest-1', function(){
		$(this).find('li').toggleClass('none');
	}).on('click', '.res, .dropdown', function(){

		if ($(this).hasClass('not-content_active')) {
			$(this).removeClass('not-content_active res_active');
			$(this).next().slideUp();
			$(this).find('.icon-down').slideUp();
		} else if ($(this).next().find('li').length < 1){
			$('.res').removeClass('not-content_active res_active');
			$('.res').next().slideUp();
			$('.res').find('.icon-down').slideUp();
		} else {
			$('.res:before').toggleClass('res_active_before');
			$('.res').removeClass('not-content_active res_active');
			$('.res').next().slideUp();
			$('.res').find('.icon-down').slideUp();
			$(this).addClass('not-content_active res_active');
			$(this).next().slideDown();
			$(this).find('.icon-down').slideDown();
		}
	}).on('click', '.user', function(){
		$('.info-content').slideToggle();
	}).on('click', '.s-content', function(){
		if ($('.search-content, .search-inputs').hasClass('slided')) {
			$('.search-content, .search-inputs').slideUp().removeClass('slided');
		} else {
			$('.search-content, .search-inputs').addClass('slided');
			$('.search-content, .search-inputs').slideDown();

		}
	}).on('click', 'li.burger', function(){
		$('li.dropdown').slideToggle();
	}).on('mouseover', 'ul.svg li', function(){
		$(this).find('span').show();
	}).on('mouseout', 'ul.svg li', function(){
		$(this).find('span').hide();
	}).on('click', '.load_more', function(){
		if ($('ul.box li:last-child').hasClass('visible')) {
			$('.load-more').slideUp();
		} else {
			$('ul.box li:nth-child(-n+'+i+')').addClass('visible').show();
			i+=6;
		}
	}).on('click', '.load-more', function(){
		$('ul.box.my-store li:nth-child(-n+'+g+')').animate({'display': 'flex'});
		g+=8;
	}).on('click', '.dropdown-content a', function(){
		val = $(this).text();
		$('.dropbtn').html(val);
		$('.dropdown-content a').removeClass('text-green');
		$('.dropdown-content a').addClass('text-light');
		$(this).removeClass('text-light');
		$(this).addClass('text-green');
	});

	$('body')
		.on('click', '*:not(.user)', function() {
		    $('.info-content').hide();
		}).on('click', '*:not(.search-inputs, .search-content)', function(){
			if ($('.search-inputs, .search-content').hasClass('slided')) {
				$('.search-inputs, .search-content').slideUp();
			}
		});
	$(".search-inputs, .search-content, .info-cont").on('click', function(e) {
	    e.stopPropagation();
	});

	if ($(window).width() < 1023) {
		$('ul#nav li.dropdown').addClass('prod-card');
	}

	if ($(window).width() < 767) {
		$('.user-span, img.logout').hide();
	}
});