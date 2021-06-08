function wRefreshAll() {Waypoint.refreshAll(); rellax.refresh();}

$("body").on('click', '.mobile-menu-ico', function(e) {
	e.preventDefault();
	$(this).toggleClass('open');
	$('.header-main .main-nav-holder').toggleClass('open');
	$('body').toggleClass('scrolllock');
})

$("body").on('click', '.dropdown', function(e) {
	e.preventDefault();
	$(this).toggleClass('open');
})

$("body").on('click', '.popup-btn', function(e) {
	e.preventDefault();
	var popup_class = $(this).attr('target');
	$('.'+popup_class).prepend('<div class="overlay"></div>');
	$('.'+popup_class).toggleClass('open');
	$('body').addClass('scrolllock');

})
$("body").on('click', '.popup-close', function(e) {
	e.preventDefault();
	$('.popup').removeClass('open');
	$('.overlay').remove();
	$('body').removeClass('scrolllock');
})	
$("body").on('click', '.overlay', function(e) {
	e.preventDefault();
	$(this).parent().removeClass('open');
	$(this).remove();
	$('body').removeClass('scrolllock');
})

$("body").on('click', '.popup-btn[target="popup__update-me"]', function(e) {
	e.preventDefault();
	var popup_class = $(this).attr('target');
	document.getElementById("update-me-form").style.display = "block";
	document.getElementById("thx--update-me").style.display = "none";
})

$( ".form-reset-pass form" ).submit(function() {
	$(this).find('.info').show();
})

$('body').on('click', '.forgot_pass', function(e) {
	e.preventDefault();
	$('#customer_login').hide();
	$('.form-reset-pass').show();
	$('.form-reset-pass input[type="email"]').val($('#customer_login  input[type="email"]').val());
})

$('body').on('click', '.remember_pass', function(e) {
	e.preventDefault();
	$('#customer_login').show();
	$('.form-reset-pass').hide();
})

$(document).ready(function() { 
	if(!Cookies.get('cookie')){
      $('.cookies').show();
    }
});
function cookieAgree(){
   	Cookies.set('cookie', '1', { expires: 360 });
    $('.cookies').hide('fast');
}

if($('.type').length){
	var typed = new Typed('.type', {
	  strings: ["User Researchers", "UI Designers", "Service Designers", "UX Designers"],
	  typeSpeed: 100,
	  loop: true
	});
}

$('body').on('click', 'a[target="popup__update-me"]', function(e) {
	e.preventDefault();
	sku = $(this).attr('sku');
	id = $(this).attr('product-id');
	$('.popup__update-me').find('input[name="course"]').attr('value', sku);
	$('.popup__update-me').find('input[name="course-id"]').attr('value', id);
})

$('[data-fancybox-video]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});



if ($(window).width() > 960 && $('.buy-block').length) {
	var sticky_buyblock = new Waypoint.Sticky({
	  element: $('.buy-block'),
	  stuckClass: 'stuck',
	  offset: 40,
	  handler: function() {
	  	$('.buy-block').css('width',$('.buy-block').parent().width());
	  }
	})

	var waypoint_fixend = new Waypoint({
	  element: $('.fix-end'),
	  handler: function(direction) {
	  		$('.buy-block').toggleClass('stuck');
	  		$('.buy-block').toggleClass('bottom');
	  },
	  offset: $('.buy-block').outerHeight() + 40 
	})
}

$('body').on('click', '.acc .title', function(e) {
	e.preventDefault();
	$(this).parent().toggleClass('open');
	function wRefreshAll() {Waypoint.refreshAll();}
	setTimeout(wRefreshAll, 1000);
	
})

if ($(window).width() < 960 && $('.acc').length) {
	$('.acc-item').removeClass('open');
}

var bLazy = new Blazy({
        loadInvisible: true,
        offset: 600,
        success: function(ele) {
        	setTimeout(wRefreshAll, 500);
        }
    });


function conscentsPost(type, email) {
	$.ajax({ 
		type: 'POST',
		url: "https://pda-server.herokuapp.com/customers/consents/"+type,
		data: {"email":email}, 
		success: function(data) {
		  console.log("SUCCESS:");
		  console.log(data);
		},
		error: function(jqXHR, textStatus, errorThrown) {
		  console.log("ERROR: " + textStatus + ", " + errorThrown);
		  console.log(jqXHR);
		  var response = JSON.parse(jqXHR.responseText);
		}
	});
}




$('body').on('click', '.login-select .select-email', function(e) {
	e.preventDefault();
	$('.login-form-wrap').show();
	$('.login-select').hide();
})
$('body').on('click', '.login-cont .cancel-email', function(e) {
	e.preventDefault();
	$('.login-form-wrap').hide();
	$('.login-select').show();
})



$('body').on('click', '.tab-section .tab-menu-item', function(e) {
	e.preventDefault();
	$(this).parent().find('.tab-menu-item').removeClass('active');
	$(this).addClass('active');
	var tab_i = $(this).attr('i');
	console.log(tab_i);
	$( ".tab-items .tab-item" ).each(function( index ) {
		console.log($(this).attr('i'));
		if(tab_i == $(this).attr('i')){
			$( ".tab-items .tab-item" ).removeClass('active');
			$(this).addClass('active');
		}
	});
	setTimeout(wRefreshAll, 1000);
	
})


$('body').on('click', '.form-input-pass .show', function(e) {
	e.preventDefault();
	$(this).parent().find('input[type="password"]').attr('type','text');
	
})



$(document).ready(function(){
  	$('.owl-feedback').owlCarousel({
	    loop:true,
	    nav:true,
	    navText: ['<svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.152 7.8C3.808 6.22133 2.4 5.06933 0.928 4.344V3.768C2.4 3.02133 3.808 1.86933 5.152 0.311999H6.272C5.632 1.656 5.01333 2.68 4.416 3.384H23.072V4.728H4.416C5.01333 5.432 5.632 6.456 6.272 7.8H5.152Z" fill="#333333"/> </svg> ','<svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.728 7.8C18.3893 6.43467 19.008 5.41067 19.584 4.728H0.928V3.384H19.584C19.008 2.70133 18.3893 1.67733 17.728 0.311999H18.848C20.192 1.86933 21.6 3.02133 23.072 3.768V4.344C21.6 5.06933 20.192 6.22133 18.848 7.8H17.728Z" fill="#333333"/> </svg>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});



var rellax = new Rellax('.rellax');


window.addEventListener("load", function(){

	if ($(window).width() > 960 && $('.fix-block').length) {
		var sticky_buyblock = new Waypoint.Sticky({
		  element: $('.fix-block'),
		  stuckClass: 'stuck',
		  offset: 160,
		  handler: function() {
		  	$('.fix-block').css('width',$('.fix-block').parent().width());
		  }
		})

		var waypoint_fixend = new Waypoint({
		  element: $('.fix-end'),
		  handler: function(direction) {
		  		$('.fix-block').toggleClass('stuck');
		  		$('.fix-block').toggleClass('bottom');
		  },
		  offset: $('.fix-block').outerHeight() + 160
		})
	}

	if ($(window).width() > 960 && $('.fix-block2').length) {
		var sticky_buyblock = new Waypoint.Sticky({
		  element: $('.fix-block2'),
		  stuckClass: 'stuck',
		  offset: 160,
		  handler: function() {
		  	$('.fix-block2').css('width',$('.fix-block2').parent().width());
		  }
		})

		var waypoint_fixend = new Waypoint({
		  element: $('.fix-end2'),
		  handler: function(direction) {
		  		$('.fix-block2').toggleClass('stuck');
		  		$('.fix-block2').toggleClass('bottom');
		  },
		  offset: $('.fix-block2').outerHeight() + 160
		})
	}
	if ($(window).width() > 960 && $('.fix-block3').length) {
		var sticky_buyblock = new Waypoint.Sticky({
		  element: $('.fix-block3'),
		  stuckClass: 'stuck',
		  offset: 160,
		  handler: function() {
		  	$('.fix-block3').css('width',$('.fix-block3').parent().width());
		  }
		})

		var waypoint_fixend = new Waypoint({
		  element: $('.fix-end3'),
		  handler: function(direction) {
		  		$('.fix-block3').toggleClass('stuck');
		  		$('.fix-block3').toggleClass('bottom');
		  },
		  offset: $('.fix-block3').outerHeight() + 160
		})
	}

})


$(document).ready(function(){
  	$('.owl-bootcamp').owlCarousel({
	    loop:true,
	    nav:true,
	    dots: true,
	    margin: 140,
	    navText: ['<svg width="56" height="41" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14 17.7727L55.5 17.7727L55.5 24.2195L14 24.2195L12.8019 24.2195L13.6446 25.0712L24.244 35.7833L19.7895 40.2852L0.703394 20.9961L19.7895 1.70697L24.244 6.20886L13.6446 16.921L12.8019 17.7727L14 17.7727Z" stroke="white"/> </svg> ','<svg width="56" height="41" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M42 24.2195L0.5 24.2195L0.5 17.7727L42 17.7727H43.1981L42.3554 16.921L31.756 6.20886L36.2105 1.70697L55.2966 20.9961L36.2105 40.2852L31.756 35.7833L42.3554 25.0712L43.1981 24.2195H42Z" stroke="white"/> </svg> '],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});


new WOW().init();



var waypoint_fixend = new Waypoint({
  element: $('.bootcamp .video'),
  handler: function(direction) {
  		$('.bootcamp .fixed-buy').toggleClass('show');
  }
})