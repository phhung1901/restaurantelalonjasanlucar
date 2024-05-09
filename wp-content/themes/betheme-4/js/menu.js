var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * MuffinMenu 
 * 
 * Horizontal Multilevel Menu with WP MegaMenu Support 
 * 
 * 3.0 | Muffin Group
 */
    
;(function($){
	"use strict";
	
	$.fn.mfnMenu = function( options ){

		var menu = $(this);
		
		var defaults = {
			addLast		: false,
			arrows      : false,
			delay       : 100,
			hoverClass  : 'hover',
			mobileInit	: 768
		};
		options = $.extend( defaults, options );
		
		
		var init = function(){
			
			// add '.submenu' class
			$( 'li:has(ul)', menu ).addClass( 'submenu' );
			
			// append mobile toggle button
			$( 'li:has(ul)', menu ).append( '<span class="menu-toggle"></span>' );
			
			// add '.mfn-megamenu-parent' class
			menu.children( 'li:has( ul.mfn-megamenu )' ).addClass( 'mfn-megamenu-parent' );	
			
			// add '.last-item' class
			$( '.submenu ul li:last-child', menu ).addClass( 'last-item' );
			
			// add '.last' class
			if( options.addLast ) {
				$( '> li:last-child', menu ).addClass( 'last' )
					.prev().addClass( 'last' );
			}
			
			// appand submenu arrows
			if( options.arrows ) {
				$( 'li ul li:has(ul) > a', menu ).append( '<i class="menu-arrow icon-right-open"></i>' );
			}

		};
		
		
		var doMenu = function(){
			
//			console.log( [$(window).width(), options.mobileInit ]);

			if( $(window).width() >= options.mobileInit ){
				
				// desktop --------------------------------

				$( '> li, ul:not(.mfn-megamenu) li', menu ).hover(function() {
					
					$(this).stop(true,true).addClass( options.hoverClass );
					
					$(this).children( 'ul' ).stop(true,true).fadeIn( options.delay );
					
					
				}, function(){
					
					$(this).stop(true,true).removeClass( options.hoverClass );
					
					$(this).children( 'ul' ).stop(true,true).fadeOut( options.delay );	
					
				});
				
			} else {

				// mobile ---------------------------------
				
				$( 'li', menu ).unbind('hover');
				
				$( 'li > .menu-toggle', menu ).off('click').on('click', function(){
	
					var el = $(this).closest('li');
					
					if( el.hasClass( options.hoverClass ) ){
	
						el.removeClass( options.hoverClass )
							.children('ul').stop(true,true).fadeOut( options.delay );			
						
					} else {
		
						el.addClass( options.hoverClass )
							.children('ul').stop(true,true).fadeIn( options.delay );	
	
					}
					
				});
				
			}
			
		};
		

		$(window).bind( 'resize', doMenu );
		
		var __constructor = function(){
			init();
			doMenu();
		};
		
		__constructor();

	}

})(jQuery);

}
/*
     FILE ARCHIVED ON 22:03:43 Jun 13, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:45:29 May 09, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.95
  exclusion.robots: 0.244
  exclusion.robots.policy: 0.23
  esindex: 0.013
  cdx.remote: 16.654
  LoadShardBlock: 97.723 (3)
  PetaboxLoader3.datanode: 167.83 (5)
  load_resource: 194.593
  PetaboxLoader3.resolve: 54.861
  loaddict: 63.218
*/