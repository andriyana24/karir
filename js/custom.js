jQuery(document).ready(function() {
	
	"use strict";

	$(".search").keyup(function () {
		var searchTerm = $(".search").val();
		var listItem = $('.results tbody').children('tr');
		var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
		
	  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
			return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
		}
	  });
		
	  $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
		$(this).attr('visible','false');
	  });
	
	  $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
		$(this).attr('visible','true');
	  });
	
	  var jobCount = $('.results tbody tr[visible="true"]').length;
		$('.counter').text(jobCount + ' Position');
	
	  if(jobCount == '0') {$('.no-result').show();}
		else {$('.no-result').hide();}
			  });

	
			  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				  if (target.length) {
					$('html, body').animate({
					  scrollTop: (target.offset().top - 54)
					}, 1000, "easeInOutExpo");
					return false;
				  }
				}
			  });
			
			  
			  $('.js-scroll-trigger').click(function() {
				$('.navbar-collapse').collapse('hide');
			  });
			
			 
			  $('body').scrollspy({
				target: '#mainNav',
				offset: 54
			  });

});