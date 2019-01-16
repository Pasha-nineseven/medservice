$(document).ready(function() {
	flexibility(document.documentElement);
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })

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
  //       setTimeout(function(){
		// }, 400);
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
        closeBtnInside: false,
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


	//SERVICE slider
	if ($('.slider-doctor').length>0) {
		var $gallery = $('.slider-doctor');

	    $gallery.slick({
			speed: 250,
			// fade: true,
			// cssEase: 'linear',
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

	ymaps.ready(initializeDefaultMap);

	ymaps.ready(initializeContactMap);
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



// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="text.html">Text</a></li> \
		<li><a href="contacts.html">Contacts</a></li> \
		<li><a href="doctor.html">Doctor</a></li> \
		<li><a href="index.html">Index</a></li> \
	</ol> \
</div>');
