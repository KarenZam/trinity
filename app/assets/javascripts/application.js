// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery.min
//= require jquery_ujs
//= require modernizr-2.6.2-respond-1.1.0.min
//= require bootstrap.min
//= require jquery.navgoco
//= require jquery.backstretch
//= require owl.carousel.min
//= require main
//= require_tree .

$(document).ready(function(){ 

  $.backstretch([
          "images/carrousel-1.png",
          "images/carrousel-2.png",
          "images/carrousel-3.png",
          
          ], {
            fade: 400,
            duration: 5000
        });

    //Home Work Carousel
      var owl = $("#work-carousel");

      owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : [0,1], // itemsMobile disabled - inherit from itemsTablet option
      navigation : false,
      pagination : true,
      autoHeight : true
      });     

});

      

