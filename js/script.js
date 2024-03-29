/* ================================================
   Carnivale du Vin and Boudin & Beer Main JS
   Author: Terrance Pitre
   ================================================ */

/* GLOBAL VARS
------------------------------------------*/

// Breakpoint vars
var isotopeMinWidth = 0,
    logoCarouselHeight = 100;

// check document width
var getWidth = function() {
	return document.body.clientWidth;				
}
window.onload = function() { getWidth(); }
window.onresize = function() { getWidth(); }

// isotope set column width
if (getWidth() >= 860) {
  isotopeMinWidth = 3; 
}
else if (getWidth() >= 450) {
  isotopeMinWidth = 2;
}
else if (getWidth() >= 0) {
  isotopeMinWidth = 1;
}

// logo carousel set height
if (getWidth() >= 730) {
  logoCarouselHeight = 130;
}

// iOS detection
var iOS = false,
    p = navigator.platform;

if(p === 'iPad' || p === 'iPhone' || p === 'iPod'){
  iOS = true;
}

// is it a touch device?
var isTouch = false,
    logoCarouselSwipeAmt = 1;

if (Modernizr.touch) {
  isTouch = true,
  logoCarouselSwipeAmt = null
}


/* jQuery!
------------------------------------------*/

(function ($) {	  
  
  // is it old IE?
	var oldIE = false;
	
	if ($('html').hasClass('lt-ie9')) {
		oldIE = true;
	}
	
  var cdv = {
    
    // cache static elements used on load  	
  	miscFunct: function(){
  		
  		var $sponsorCarousel = $('.sponsor-carousel');
  				
  		// load the elastislideer for the restaurant logos
  		if ($().carouFredSel) {
    		$sponsorCarousel.show().find('ul').carouFredSel({
    			circular: true,
    			infinite: false,
    			width: '100%',
    			height: 90,
    			items: {
    				height: 90
    			},
    			scroll: {
    				wipe: true,
    				duration: 1000,
    				easing: 'easeInOutQuad',
    				pauseOnHover: true,
    			},
    			prev: {
    				button: '.sponsor-nav-prev',
    				key: 'left'
    			},
    			next: {
    				button: '.sponsor-nav-next',
    				key: 'right'
    			}
    		});    		
     	}
     	
     	// add even class to even list items
      $('.block:nth-child(even)').addClass('even');
  		
  	},
  	
  	breakPoints: function() {
  		
  		// show and hide main navigation
  		var setMainNav = function() {
	  		var $mainNav = $('#main-nav'),
      			$toggleMenu = $('.menu-jump'),
      			$body = $('body');
	     	     	
	     	$toggleMenu.toggle(function(e) {
	        $body.addClass('menu-open');
	        e.preventDefault();
	      }, function(e) {
	        $body.removeClass('menu-open');
	        e.preventDefault();
	      });         
  		}
  	
	  	// define the breakpoints
			var queries = [ 
		    { 
	        context: 'mobile', 
	        callback: function() { 	        	
	        	setMainNav(); 
	        	$('img').each(function(index) {
		          var imgMobile = $(this).attr('src');
		          $(this).attr('src', imgMobile);
		        }); 
	        } 
		    }, 
		    { 
	        context: '580px', 
	        callback: function() {
	        	setMainNav();
            $('img').each(function(index) {
              var img580px = $(this).data('580px');
              $(this).attr('src', img580px);
            }); 
	        } 
		    }, 
		    { 
	        context: '780px', 
	        callback: function() {
	        	$('body').removeClass('menu-open');
            $('img').each(function(index) {
              var img780px = $(this).data('780px');
              $(this).attr('src', img780px);
            }); 
	        } 
		    } 
			]; 
			
			// init queries
			MQ.init(queries);
	  	
	  	// IE 8 and lower image handler
		  if (oldIE) {
		  	$('img').each(function(index) {
	        var img730px = $(this).data('730px');
	        $(this).attr('src', img730px);
	      });
	    }
	  	
  	},
  	
  	addPlaceHolder: function(){
  	
  		// add placeholder to browsers that don't recognize them
  		if(!Modernizr.input.placeholder){
  
  			$('[placeholder]').focus(function(){
  				var input = $(this);
  				if (input.val() === input.attr('placeholder')){
  					input.val('');
  					input.removeClass('placeholder');
  				}
  			}).blur(function(){
  				var input = $(this);
  				if (input.val() === '' || input.val() === input.attr('placeholder')) {
  					input.addClass('placeholder');
  					input.val(input.attr('placeholder'));
  				}
  			}).blur();
  			$('[placeholder]').parents('form').submit(function(){
  				$(this).find('[placeholder]').each(function() {
  					var input = $(this);
  					if (input.val() === input.attr('placeholder')){
  						input.val('');
  					}
  				});
  			});
  		}
  	
  	}
  	
  };
	
	// init the methods
	cdv.miscFunct();
	cdv.breakPoints();
	cdv.addPlaceHolder();	
		
})(jQuery);

$(window).load(function() {
  
  var $flexSlider = $('#save-the-date').find('.flexslider'),
  		$mainSlider = $('#main-content').find('.flexslider');

  // load flexslider
	$flexSlider.flexslider({
	  animation: 'fade',
	  slideshowSpeed: 9000,
	  animationDuration: 4200,
	  prevText: 'v',
	  nextText: 'u',
	});
  
  // load flexslider
	$mainSlider.flexslider({
	  animation: 'fade',
	  prevText: 'a',
	  nextText: 'b',
	});
  
});


