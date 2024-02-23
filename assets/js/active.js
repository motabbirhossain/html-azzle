/*
    Template: Rafter - Roofing Services HTML5 Template
    Author: ThemeJunction
*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    /*==========================
		Owl Carousel Init
	============================*/
    function azzleOwlInit() {
      // owl slider
      let azzleowlCarousel = $(".azzle-owl__carousel");
      if (azzleowlCarousel.length) {
        azzleowlCarousel.each(function () {
          let elm = $(this);
          let options = elm.data("owl-options");
          let thmOwlCarousel = elm.owlCarousel(
            "object" === typeof options ? options : JSON.parse(options)
          );
          elm.find("button").each(function () {
            $(this).attr("aria-label", "carousel button");
          });
        });
      }
    }
    azzleOwlInit();
    /*==========================
			Scroll To Up Init
	============================*/
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "1110", // Distance from top before showing element (px)
      topSpeed: 2000, // Speed back to top (ms)
      animation: "slide", // Fade, slide, none
      animationInSpeed: 300, // Animation in speed (ms)
      animationOutSpeed: 300, // Animation out speed (ms)
      scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*==========================
					Sticky Menu Init
			============================*/
    $(window).scroll(function () {
      var Width = $(document).width();

      if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
        if (Width > 767) {
          $(".header-1, .header-3,.header-5").addClass("sticky");
        }
      } else {
        $(".header-1, .header-3,.header-5").removeClass("sticky");
      }
    });

    $("[data-bg-image]").each(function () {
      var $this = $(this),
        $image = $this.data("bg-image");
      $this.css("background-image", "url(" + $image + ")");
    });

    //Header Responsive
    $("#hamburger").on("click", function () {
      $(".mobile-nav").addClass("show");
      $(".body-overlay").addClass("active");
    });

    $(".close-nav").on("click", function () {
      $(".mobile-nav").removeClass("show");
      $(".body-overlay").removeClass("active");
      $("body").removeClass("active");
    });

    $(".body-overlay").on("click", function () {
      $(".mobile-nav").removeClass("show");
      $(".body-overlay").removeClass("active");
    });

    //Offset Menu Bar
    $(".offset-canvas").on("click", function () {
      $(".offset_canvas").addClass("show");
      $(".body-overlay").addClass("active");
    });

    $(".close-offset").on("click", function () {
      $(".offset_canvas").removeClass("show");
      $(".body-overlay").removeClass("active");
    });

    $(".body-overlay").on("click", function () {
      $(".offset_canvas").removeClass("show");
      $(".body-overlay").removeClass("active");
    });

    //Search Bar
    $(".search-btn").on("click", function () {
      $(".search-box").addClass("show");
    });

    $(".close-icon").on("click", function () {
      $(".search-box").removeClass("show");
    });

    $(".search-box")
      .after()
      .on("click", function () {
        $(".search-box").removeClass("show");
      });

    //metisMenu
    $("#mobile-menu").metisMenu();

    /* =============================================
				# Tab Filter  init
			===============================================*/

    $(".grids").imagesLoaded(function () {
      var $grid = $(".grids").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
      });

      $(".project-cat-filter").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      $(".project-cat-filter").click(function () {
        $("button").removeClass("active");
        $(this).addClass("active");
      });
    });

    $(".grid").imagesLoaded(function () {
      var $grid = $(".grid").isotope({
        layoutMode: "fitRows",
        itemSelector: ".grid-item",
        percentPosition: true,
        fitRows: {
          gutter: ".gutter-sizer",
        },
      });

      $(".project-cat-filter").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      $(".project-cat-filter").click(function () {
        $("button").removeClass("active");
        $(this).addClass("active");
      });
    });

    //Service section Filter
    $(".service-filter-btn").click(function () {
      $(".service-filter-btn").removeClass("active");
      $(".tab-item-widget div").removeClass("active");

      $(this).addClass("active");
      $("." + $(this).attr("id")).addClass("active");
    });

    //accordion Filltering
    $(".accordion-item").click(function () {
      $(".accordion-item").removeClass("active");
      $(this).addClass("active");
    });

    /* =============================================
				# Magnific/Fancybox popup init
			===============================================*/
    $(".popup-video").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // Fancybox
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      scrolling: "false",
    });
    $(".popup-project").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
    });

    /* =============================================
				#wow  init
			===============================================*/
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        mobile: true,
        live: true,
      });
      wow.init();
    }

    /* =============================================
				# Counter Up init
			===============================================*/
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
  }); // end document ready function

  //Preloader
  $(window).load(function () {
    $("#loading").fadeOut(500);
  });
})(jQuery); // End jQuery
