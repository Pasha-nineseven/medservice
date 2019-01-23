$(document).ready(function() {
	flexibility(document.documentElement);

	//TOP-SEARCH
    $("body").on("click", ".js-top-search__link", function(e){
        $(".top-search__toggle").animate({
	        width: 'toggle',
	    });
	});
    $("body").on("click", ".js-top-search__close", function(e){
        $(".top-search__toggle").animate({
	        width: 'toggle',
	    });
	});


	//MENU-MOBILE
    $("body").on("click", ".js-menu-btn", function(e){
        $(".menu-mobile").fadeIn();
        setTimeout(function(){
			$('body').addClass('hidden');
		}, 400);
	});
	$("body").on("click", ".js-menu-mobile__close", function(e){
		$('body').removeClass('hidden');
        $(".menu-mobile").fadeOut();
	});

	//TOOLTIP
	if ($('.tooltip').length>0) {
		$('.tooltip').tooltipster({
			animation: 'fade',
   			delay: 100,
		});
	};
	//TABS
    if ($('.resp-tabs').length>0) {
	    $('.resp-tabs').responsiveTabs({
		    startCollapsed: 'accordion'
		});
	}

	//POPUP-VIDEO
    $('.js-video').magnificPopup({
        type: 'iframe',
        removalDelay: 500,
        closeBtnInside: true,
        fixedContentPos: false,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function(){
                $('body').addClass('hidden');
            },
            close: function() {
                 $('body').removeClass('hidden');
            }
        },
    });


    //LANGUAGE
	$("body").on("click", ".page-header-lang", function(e){
        if (!$(e.target).hasClass('page-header-lang__item')) {
          e.preventDefault();
        }
        $('.page-header-lang__list').fadeToggle(100);
	});
    $(document).click(function (e){
        var div = $(".page-header-lang");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
          $(".page-header-lang__list").fadeOut(100);
        }
    });

    //CURRENCY
	$("body").on("click", ".page-header-currency", function(e){
        if (!$(e.target).hasClass('page-header-currency__item')) {
          e.preventDefault();
        }
        $('.page-header-currency__list').fadeToggle(100);
	});
    $(document).click(function (e){
        var div = $(".page-header-currency");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
          $(".page-header-currency__list").fadeOut(100);
        }
    });

    //ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();
    });

    //FS
    if ($('.fs').length>0) {
    	$('.fs').styler();
    }


    //DATEPICKER
    if ($('.input-calendar').length>0) {
		$('.input-calendar').datepicker({
			dateFormat : "dd-mm-yy",
			minDate: new Date($('#hiddendelivdate').val()),
			monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		});
	}

	//POPUP-INLINE
	$('.js-popup-inline').magnificPopup({
		type: 'inline',
		removalDelay: 500,

		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
		},

		//midClick: true,
	});


	//slider-doctor
	if ($('.slider-doctor').length>0) {
		var $gallery = $('.slider-doctor');

	    $gallery.slick({
			speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:true,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 3,
  			slidesToScroll: 1,
  			responsive: [
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			]
	    });
	};

    //ANOTHER slider
    if ($('.slider-another').length>0) {
        var $gallery = $('.slider-another');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
            ]
        });
    };

    //SANATORIUM-TOP slider
    if ($('.sanatorium-top-slider').length>0) {
        var $gallery = $('.sanatorium-top-slider');

        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');

        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + ' из ' +slidesCount)
        };

        $gallery.on('init', function(event, slick) {
            $gallery.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $gallery.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        });

        

    };

    //SCROLL
    $("body").on("click", ".js-scroll-link", function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });


    //UPLOAD FILE
    $("#file-upload").change(function() {
        var ele = document.getElementById($(this).attr('id'));
        var result = ele.files;
        for(var x = 0;x< result.length;x++){
         var fle = result[x];
            $("#file-upload-output").append("<div class='file-upload-output__item'>" + fle.name + "<a href='#' class='file-upload-output__close'>" + "</a>" + "</div>");        
        }
    });
    $("body").on("click", ".file-upload-output__close", function(e){
        e.preventDefault();
        $(this).parents(".file-upload-output__item").last().remove();
    });


    //ABOUT-PAGE-TITLE
    if ($('.page-top-about').length>0) {
        var bottomHeight = $('.page-top-about__txt').innerHeight();
        $('.page-top-about').css('margin-bottom', -bottomHeight );
    }


    //slider-doctor-index
    if ($('.slider-doctor-index').length>0) {
        var $gallery = $('.slider-doctor-index');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
            ]
        });
    };

    //index-reviews-slider
    if ($('.index-reviews-slider').length>0) {
        var $gallery1 = $('.index-reviews-slider');

        $gallery1.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:false,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: false,
            fade: true,
            asNavFor: '.index-reviews-slider-nav',
        });

        var $gallery2 = $('.index-reviews-slider-nav');

        $gallery2.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: false,
            asNavFor: '.index-reviews-slider',
        });
    };

	ymaps.ready(initializeDefaultMap);

	ymaps.ready(initializeContactMap);

    ymaps.ready(initializeSanatoriumMap);

});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions
function initializeDefaultMap() {
    if ($('#map-default').length>0) {

        var myMap = new ymaps.Map("map-default", {
            center:[53.899888,27.566757],
            zoom: 13,
            controls: []
        }, {
	        suppressMapOpenBlock: true
	    }); 
                
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
                // balloonContentBody: 'Адрес',
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/svg/label.svg", 
            iconImageSize: [52,78],
            iconImageOffset: [-26, -78]
        }); 


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }
}

function initializeContactMap() {
    if ($('#map-contact').length>0) {

        var myMap = new ymaps.Map("map-contact", {
            center:[53.899888,27.566757],
            zoom: 13,
            controls: []
        }, {
	        suppressMapOpenBlock: true
	    }); 
                
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/svg/label.svg", 
            iconImageSize: [52,78],
            iconImageOffset: [-26, -78]
        }); 


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }
}

function initializeSanatoriumMap() {
    if ($('#sanatorium-map').length>0) {

        var myMap = new ymaps.Map("sanatorium-map", {
            center:[53.899888,27.566757],
            zoom: 13,
            controls: []
        }, {
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
            balloonCloseButton: false,
            maxWidth:425,
            shadow:false,

        }); 
                
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
                balloonContentBody: [
                    '<div class="map-wrapper">' +
                    '<div class="map-address">Минская обл., Воложинский р-н, Раковский сельсовет, д. 24</div>' +
                    '<div class="map-separator"></div>' +
                    '<div class="map-distance">Расстояние: 30 км от Минска</div>' +
                    '</div>',
                ],
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/svg/label.svg", 
            iconImageSize: [52,78],
            iconImageOffset: [-26, -78],
        }); 


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);

        if ($(window).width() < 800) {
            myPlacemark.balloon.close();
        }
        else {
            myPlacemark.balloon.open(myMap.getCenter(), {});
        }
    }
}

// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 180px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 3px 5px; text-decoration: none; font-size: 14px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 5px 10px 0 30px; font-size: 14px; } \
		#pages a { text-decoration: none; font-size: 14px} \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="text.html">Текст</a></li> \
		<li><a href="contacts.html">Контакты</a></li> \
		<li><a href="doctor.html">Доктор</a></li> \
		<li><a href="doctors.html">Доктор-список</a></li> \
		<li><a href="reviews.html">Отзывы</a></li> \
        <li><a href="sanatorium.html">Санаторий</a></li> \
        <li><a href="sanatoriums.html">Санатории</a></li> \
        <li><a href="services.html">Услуги</a></li> \
        <li><a href="service.html">Услуга</a></li> \
        <li><a href="shablon.html">Шаблон списков</a></li> \
        <li><a href="str_napravlenija.html">Стр.направления</a></li> \
        <li><a href="about.html">О нас</a></li> \
		<li><a href="index.html">Главная</a></li> \
	</ol> \
</div>');
