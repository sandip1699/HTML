(function($) {
  "use strict";
  $("#fullpage").fullpage({
    anchors: ["home", "About", "product"],
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: "false",
    licenseKey: 'YOUR_KEY_HERE'
  });

  /*------------------
    Menu
-------------------*/
  $.exists = function(selector) {
    return $(selector).length > 0;
  };
  function Menu() {
    if ($.exists(".menu-btn")) {
      $(".menu-btn").on("click", function(e) {
        var burger = $(this);
        $(burger).toggleClass("is-active");
        $(".ms-nav").toggleClass("is-visible");
        $(".ms-header")
          .not(".navbar-white")
          .each(function() {
            $(".logo-light").toggleClass("active");
          });
      });
      $(".height-full-viewport").on({
        mousewheel: function(e) {
          if (e.target.id === "el") return;
          e.preventDefault();
          e.stopPropagation();
        }
      });
    }
  }

  Menu();
  $(".nav-item a").on("click", function(e) { 
    $('.menu-btn').click();
  });
  // Range Slider
  htmlInputRange.options({
    tooltip: true,
    max:100,
    labels: true,
  });

  setTimeout(() => {
    $('.logo-dark').css('display','block');
  }, 3000);
  setTimeout(() => {
    $('#section0').removeClass('animateactive');
  }, 300);

})(jQuery);
