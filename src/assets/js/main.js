AOS.init({
 	duration: 800,
 	easing: "slide",
 	once: false
});

jQuery(document).ready(($) => {
  const siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      const $this = $(this);
      $this.clone().attr("class", "site-nav-wrap").appendTo(".site-mobile-menu-body");
    });


    setTimeout(() => {
      let counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        const $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": `#collapseItem${counter}`
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: `collapseItem${counter}`
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      const $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      const $this = $(this);
      const w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      const $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup((e) => {
	    const container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
	    }
    });
  };
  siteMenuClone();


  const sitePlusMinus = function () {
    $(".js-btn-minus").on("click", function (e) {
      e.preventDefault();
      if ($(this).closest(".input-group").find(".form-control").val() != 0) {
        $(this).closest(".input-group").find(".form-control").val(parseInt($(this).closest(".input-group").find(".form-control").val()) - 1);
      } else {
        $(this).closest(".input-group").find(".form-control").val(parseInt(0));
      }
    });
    $(".js-btn-plus").on("click", function (e) {
      e.preventDefault();
      $(this).closest(".input-group").find(".form-control").val(parseInt($(this).closest(".input-group").find(".form-control").val()) + 1);
    });
  };
  // sitePlusMinus();


  const siteSliderRange = function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide(event, ui) {
        $("#amount").val(`$${ui.values[0]} - $${ui.values[1]}`);
      }
    });
    $("#amount").val(`$${$("#slider-range").slider("values", 0)
    } - $${$("#slider-range").slider("values", 1)}`);
  };
  // siteSliderRange();


  const siteCarousel = function () {
    if ($(".nonloop-block-13").length > 0) {
      $(".nonloop-block-13").owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
        stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive: {
	        600: {
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000: {
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200: {
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
      });
    }


    if ($(".nonloop-block-14").length > 0) {
      $(".nonloop-block-14").owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
        stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    dots: false,
		    nav: false,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive: {
	        600: {
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000: {
	        	margin: 30,
	        	stagePadding: 20,
	        	nav: true,
	          items: 2
	        },
	        1200: {
	        	margin: 30,
	        	stagePadding: 20,
	        	nav: true,
	          items: 3
	        }
		    }
      });

      $(".customNextBtn").click(() => {
			  $(".nonloop-block-14").trigger("next.owl.carousel");
      });
      $(".customPrevBtn").click(() => {
			  $(".nonloop-block-14").trigger("prev.owl.carousel");
      });
    }


    $(".slide-one-item").owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    smartSpeed: 900,
	    autoplayTimeout: 7000,
      stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

    $(".slide-one-item").on("translated.owl.carousel", (event) => {
      console.log("translated");
      $(".owl-item.active").find(".js-slide-text").addClass("active");
    });
    $(".slide-one-item").on("translate.owl.carousel", (event) => {
      console.log("translate");
      $(".owl-item.active").find(".js-slide-text").removeClass("active");
    });

    $(".owl-item.active").find(".js-slide-text").addClass("active");
  };
  siteCarousel();

  const siteStellar = function () {
    $(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: "scroll"
	  });
  };
  siteStellar();

  const siteCountDown = function () {
    $("#date-countdown").countdown("2020/10/10", function (event) {
		  const $this = $(this).html(event.strftime(""
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
    });
  };
  siteCountDown();

  const siteDatePicker = function () {
    if ($(".datepicker").length > 0) {
      $(".datepicker").datepicker();
    }
  };
  siteDatePicker();

  const siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  // navigation
  const OnePageNavigation = function () {
    const navToggler = $(".site-menu-toggle");
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
      e.preventDefault();

      const { hash } = this;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 600, "easeInOutCirc", () => {
        window.location.hash = hash;
      });
    });
  };
  OnePageNavigation();

  const siteScroll = function () {
  	$(window).scroll(function () {
  		const st = $(this).scrollTop();

  		if (st > 100) {
  			$(".js-sticky-header").addClass("shrink");
  		} else {
  			$(".js-sticky-header").removeClass("shrink");
  		}
  	});
  };
  siteScroll();
});
