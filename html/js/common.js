$(function() {

	//Меню

	// $(".top-line .sf-menu").superfish({
	// 	cssArrows: false,
	// 	hoverClass:'no-class'
	// });

	//Адаптивный слайдер
	//
	$(".tabslider").owlCarousel({
		loop: true,
		 autoWidth:true,
		 items: 8,
		autoplay: true,

	});
	// $(".slider__nav-next").click(function(){
	// 	owl.trigger("next.owl.carousel");
	// });
	// $(".slider__nav-prev").click(function(){
	// 	owl.trigger("prev.owl.carousel");
	// });
	$(".service__box").owlCarousel({
		loop: true,
	//   autoWidth:true,
		//  nav:true,
		autoplay: true,
		responsiveClass:true,
		responsive : {
    // breakpoint from 0 up
    0 : {
         items: 1
    },
    // breakpoint from 480 up
    480 : {
         items: 2
    },
    // breakpoint from 768 up
    768 : {
         items: 3
    },
	1024 : {
         items: 4
    }
}
});


	// Табы


  $('div.my-works__tab-buttons').on('click', 'button:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.my-works').find('div.my-works__tab-item').removeClass('active').eq($(this).index()).addClass('active');
  });

  $('div.portfolio__btn-box').on('click', 'button:not(.active)', function() {
    $(this)
 	 .addClass('active').siblings().removeClass('active')
 	 .closest('div.portfolio').find('div.portfolio__tab-item').removeClass('active').eq($(this).index()).addClass('active');
  });



	//Мобильное меню

	// $(".main-header__nav").before('<div id="my-menu">');
	// $(".sf-menu").clone().appendTo('#my-menu');
	// $("#my-menu").find("*").attr("style", "");
	// $("#my-menu").find("UL").removeClass("sf-menu");
	// $("#my-menu").mmenu({
	// 	extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
	// 	navbar: {
	// 		title: "МЕНЮ"
	// 	}
	// });
	// var API = $("#my-menu").data( "mmenu" );
    //
	// $("#my-button").click(function() {
    // 	API.open();
	// });

	//Выравнивание блоков по высоте

	// $(".service__item h4").equalHeights();
	// $(".news__text h4").equalHeights();
	// $(".news__text p").equalHeights();
	// $(".links__item span").equalHeights();

	//popup

	// $('.popup-with-move-anim').magnificPopup({
	// 	type: 'inline',
	//
	// 	fixedContentPos: false,
	// 	fixedBgPos: true,
	//
	// 	overflowY: 'auto',
	//
	// 	closeBtnInside: true,
	// 	preloader: false,
	//
	// 	midClick: true,
	// 	removalDelay: 300,
	// 	mainClass: 'my-mfp-slide-bottom'
	// });

	// $("a[href=#callback]").click(function() {
	// 	$("#callback .formname").val($(this).data("form"));
	// })

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


/*
var form = popup.querySelector("form");
*/


// Стилизация форм


// (function($) {
// $(function() {
//
//   $('input, select').styler();
//
// });
// })(jQuery);

// Ренджи


// $( function() {
//     $( "#slider-range" ).slider({
//       range: true,
//       min: 0,
//       max: 500,
//       values: [ 75, 300 ],
//       slide: function( event, ui ) {
//         $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//       }
//     });
//     $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//       " - $" + $( "#slider-range" ).slider( "values", 1 ) );
//   } );


// Попапы


 var link = document.querySelector(".link");
 var popup = document.querySelector(".popup-box ");
// var linkin = document.querySelector(".sign-in-button");
// var popupin = document.querySelector(".user-block__form");
// var linkbk = document.querySelector(".bascet-button");
// var popupbk = document.querySelector(".user-block__bascet");
// var linkfb = document.querySelector(".map__contact_btn");
// var popupfb = document.querySelector(".map__contact__form");
var close = document.querySelector(".popup-box__contact-close");
// // var login = popup.querySelector("[name=login]");
// // var password = popup.querySelector("[name=e-mail]");
// // var storage = localStorage.getItem("login");


link.addEventListener("click", function() {
	popup.classList.toggle("popup-show");

});

close.addEventListener("click", function() {
	popup.classList.remove("popup-show");

});


window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		if (popup.classList.contains("popup-show")) {
			popup.classList.remove("popup-show");
		}
	}
});
//
// linkin.addEventListener("click", function() {
// 	popupin.classList.toggle("popup-show");
// 	popup.classList.remove("popup-show");
// 	popupbk.classList.remove("popup-show");
//
// });
//
//
// window.addEventListener("keydown", function(event) {
// 	if (event.keyCode == 27) {
// 		if (popupin.classList.contains("popup-show")) {
// 			popupin.classList.remove("popup-show");
// 		}
// 	}
// });
//
// linkbk.addEventListener("click", function() {
// 	popupbk.classList.toggle("popup-show");
// 	popup.classList.remove("popup-show");
// 	popupin.classList.remove("popup-show");
//
// });
//
//
// window.addEventListener("keydown", function(event) {
// 	if (event.keyCode == 27) {
// 		if (popupbk.classList.contains("popup-show")) {
// 			popupbk.classList.remove("popup-show");
// 		}
// 	}
// });
//
//
// linkfb.addEventListener("click", function() {
// 	popupfb.classList.toggle("popup-show");
//
// });
//
//
// window.addEventListener("keydown", function(event) {
// 	if (event.keyCode == 27) {
// 		if (popupfb.classList.contains("popup-show")) {
// 			popupfb.classList.remove("popup-show");
// 		}
// 	}
// });
