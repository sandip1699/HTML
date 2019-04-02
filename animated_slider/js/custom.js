"use strict";

(function($) {
  var $body = $("body");
  var $window = $(window);

function documentReadyInit() {
  if ($().flexslider) {
    var $introSlider = $(".page_slider .flexslider");
    $introSlider.each(function(index) {
      var $currentSlider = $(this);
      var data = $currentSlider.data();
      var nav = data.nav !== "undefined" ? data.nav : true;
      var dots = data.dots !== "undefined" ? data.dots : true;
      var speed = data.speed !== "undefined" ? data.speed : 7000;

      $currentSlider.flexslider({
        animation: "fade",
        pauseOnHover: true,
        useCSS: true,
        controlNav: dots,
        directionNav: nav,
        prevText: "",
        nextText: "",
        smoothHeight: false,
        slideshowSpeed: speed,
        animationSpeed: 600,
        start: function(slider) {
          slider
            .find(".intro_layers")
            .children()
            .css({ visibility: "hidden" });
          slider
            .find(".flex-active-slide .intro_layers")
            .children()
            .each(function(index) {
              var self = $(this);
              var animationClass = !self.data("animation")
                ? "fadeInDown"
                : self.data("animation");
              setTimeout(function() {
                self.addClass("animated " + animationClass).css({ visibility: "visible" });
              }, index * 500);
            });
        },
        after: function(slider) {
          slider
            .find(".flex-active-slide .intro_layers")
            .children()
            .each(function(index) {
              var self = $(this);
              var animationClass = !self.data("animation")
                ? ""
                : self.data("animation");
              setTimeout(function() {
                self.addClass("animated " + animationClass);
              }, index * 500);
            });
        },
        end: function(slider) {
          slider
            .find(".intro_layers")
            .children()
            .each(function() {
              var self = $(this);
              var animationClass = !self.data("animation")
                ? "fadeInDown"
                : self.data("animation");
              self
                .removeClass("animated " + animationClass)
                .css({ visibility: "hidden" });
              // $(this).attr('class', '');
            });
        }
      });
      //wrapping nav with container - uncomment if need
      // .find('.flex-control-nav')
      // .wrap('<div class="container nav-container"/>')
    }); //.page_slider flex slider

    $(".flexslider").each(function(index) {
      var $currentSlider = $(this);
      //exit if intro slider already activated
      if ($currentSlider.find(".flex-active-slide").length) {
        return;
      }
      $currentSlider.flexslider({
        animation: "fade",
        useCSS: true,
        controlNav: false,
        directionNav: false,
        prevText: "",
        nextText: "",
        smoothHeight: false,
        slideshowSpeed: 5000,
        animationSpeed: 800
      });
    });
  }
}
  $(document).ready(function() {
    documentReadyInit();
   
  });
  
})(jQuery);
