// JavaScript Document
// ==================== document ready function with console and alert =================== //
$( document ).ready(function() {
    console.log( "ready!" );
	alert("ready");
});
$(function() {
    console.log( "ready!" );
});
// for n Wordpress jQuery.noConflict()

jQuery(function($) {
    for(var i=0; i <= 20; i++) 
      $("ol li:nth-child(" + i + ")").addClass('olli' + i);
  });

// ==================== click function =================== //
$(".button").on('click', function(){
     
 });
 $(".div").click(function(){
	 
 });
 // ==================== variable function =================== //
 var selector = '.ans-bar > ul > li';

$(document).on('click',selector, function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});
// ====================== simple tab logic with hide show ============================ //
 $("#fancydiv").hide();
        $("#white").click(function(){
        $("#whitediv").show();
        $("#fancydiv").hide();
    });
        $("#fancy").click(function(){
        $("#whitediv").hide();
        $("#fancydiv").show();
    });
	
	// ====================== check mark ============================ //
	 $(".table_Diamond_Active").click(function() {
        $(this).toggleClass('Diamond_Active_table');
    });
    $(".dm_detail").click(function() {
        $(this).toggleClass('Grid_Diamond_Active');
    });
     $(".Shape_Diamond").click(function() {
        $(this).toggleClass('Diamond_Active_Shape');
    });
      $(".dm-color").click(function() {
        $(this).toggleClass('Diamond_Active_Color');
    });
	
// ====================== open sidebar ============================ //	
	$(document).ready(function() {

	$('#debug-trigger').click(function(e) {
	
		e.preventDefault();
		$('#debug').toggleClass('open');
	
	});
	});
// ====================== DOM Content Load Event Actions ============================ //	
  $(window ).load(function() {
    $('div.loading').remove();
    $('body').removeClass('loading');
  });
  
// ====================== DOM Content Load Event Actions ============================ //	  
mainnav.find('li.mega-menu').each(function(){
		$(this).find('> a').wrap('<span class="inner-mega"></span>');
	});

// ====================== Attributes ============================ //	  

var selectText=$(this).find('span').html();
var valueIs=$(document).find("#example_filter input").val();
$( "input[value='Hot Fuzz']" ).next().text( "Hot Fuzz" );
$( "p" ).last().addClass( "selected" );

var title = $( "em" ).attr( "title" );
$( "div" ).text( title );

var scoreForPrint=$("#Score").text();

$("#resltimg").attr('src', 'images/caracter/smile3.png');

$( "input" ).change(function() {
  var $input = $( this );
  $( "p" ).html(
    ".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
    ".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
    ".is( \":checked\" ): <b>" + $input.is( ":checked" ) ) + "</b>";
}).change();

	 /* ----------------------------------------------------------- */
	 /*  Back to top
	 /* ----------------------------------------------------------- */

			 $(window).scroll(function () {
						if ($(this).scrollTop() > 50) {
								$('#back-to-top').fadeIn();
						} else {
								$('#back-to-top').fadeOut();
						}
				});
			// scroll body to 0px on click
			$('#back-to-top').click(function () {
					$('#back-to-top').tooltip('hide');
					$('body,html').animate({
							scrollTop: 0
					}, 800);
					return false;
			});
			
			$('#back-to-top').tooltip('hide');

});

// ====================== Form Validation ============================ //	  

           $("#inquiryForm").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 3
                    },
                    phone: {
                        required: true,
                        minlength: 10
                    },
                    query: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    name: {
                        required: "Full Name Required",
                        minlength: "Please enter atlest 3 latter"
                    },
                    phone: {
                        required: "Phone Number Required",
                        minlength: "Please enter Phone Number"
                    },
                    query: {
                        required: "Please Fill out this Field",
                        minlength: "Please enter atlest 5 letter"
                    }
                }
            });
			
// ====================== Sidebar fixed on Top ============================ //	

$(function () {
    var sidebar = $('.loan_sidebar');
    var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      if (y >= top) {
        sidebar.addClass('fixed');
      } else {
        sidebar.removeClass('fixed');
      }
    });
});

// ====================== Sidebar toogle ============================ //	

		$('.info-btn').on('click', function () {
			$("#Messages").toggleClass('col-sm-12 col-sm-9');
		});
// ====================== Sidebar toogle ============================ //		
		// Add slideDown animation to dropdown
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to dropdown
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});
// ====================== End Sidebar toogle ============================ //
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 450) {
        $(".navbar").addClass("navbar-fixed-top");
    } else {
        $(".navbar").removeClass("navbar-fixed-top");
    }
});

//=============== move_to_top =========== //
jQuery(document).ready(function($){
    $('.move_to_top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    });

    // ================== window Resize Height ==================== //
$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = $(this).height();
        $(".expert_catergory").height(bodyheight);
    }).resize();
});
$(window).on('resize', function(e) {

    if ($(window).width() > 767 && $(".navwrapper").is(':hidden')) {
        $(".navwrapper").show();
    }

});

// ==================  scroll top from any page ==================== //

jQuery(document).ready(function() {
    var url      = window.location.href; 
    var result = url.split('#');
     jQuery('html, body').animate({
        scrollTop: jQuery("#"+result[1]).offset().top - 200
    }, 1000);
    
    $('.mega-menu-link').click(function () {
        var url1  = jQuery(this).attr('href'); 
    var result1 = url1.split('#');
     jQuery('html, body').animate({
        scrollTop: jQuery("#"+result1[1]).offset().top - 200
    }, 1000);
    });
});
	
  