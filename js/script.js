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
  		
  		
  		
  	},
  	
  	breakPoints: function() {

	  	// define the breakpoints for images
			var queries = [ 
		    { 
	        context: 'mobile', 
	        callback: function() { 
	          $('img').each(function(index) {
              var imgMobile = $(this).attr('src');
              $(this).attr('src', imgMobile);
            });
  
	        } 
		    }, 
		    { 
	        context: '450px', 
	        callback: function() { 
            $('img').each(function(index) {
              var img450px = $(this).data('450px');
              $(this).attr('src', img450px);
            }); 
	        } 
		    }, 
		    { 
	        context: '700px', 
	        callback: function() { 
            $('img').each(function(index) {
              var img700px = $(this).data('700px');
              $(this).attr('src', img700px);
            }); 
	        } 
		    } 
			]; 
			
			// init queries
			MQ.init(queries);
	  	
	  	// IE 8 and lower image handler
		  if (oldIE) {
		  	$('img').each(function(index) {
	        var img700px = $(this).data('700px');
	        $(this).attr('src', img700px);
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
  
  var $flexSlider = $('.flexslider');

  var flexBefore = function(slider) {
  	//console.log($('li:visible'));
	  $flexSlider.find('li:visible').next().find('img').animate({ marginLeft: '-6%', marginTop: '-6%', width: '110%' }, 10000);
  }  
  
  // load flexslider
	$flexSlider.flexslider({
	  animation: 'fade',
	  slideshowSpeed: 9000,
	  animationDuration: 4200
	  //before: flexBefore
	});
  
});


