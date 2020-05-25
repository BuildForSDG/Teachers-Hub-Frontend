// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(($) => {
  const { slice } = Array.prototype; // save ref to original slice()
  const { splice } = Array.prototype; // save ref to original slice()

  const defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    className: 'is-sticky',
    wrapperClassName: 'sticky-wrapper',
    center: false,
    getWidthFrom: '',
    widthFromWrapper: true, // works only when .getWidthFrom is empty
    responsiveWidth: false,
    zIndex: 'inherit'
  };
  const $window = $(window);
  const $document = $(document);
  const sticked = [];
  let windowHeight = $window.height();
  const scroller = function () {
    const scrollTop = $window.scrollTop();
    const documentHeight = $document.height();
    const dwh = documentHeight - windowHeight;
    const extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

    for (let i = 0, l = sticked.length; i < l; i++) {
      const s = sticked[i];
      const elementTop = s.stickyWrapper.offset().top;
      const etse = elementTop - s.topSpacing - extra;

      // update height in case of dynamic content
      s.stickyWrapper.css('height', s.stickyElement.outerHeight());

      if (scrollTop <= etse) {
        if (s.currentTop !== null) {
          s.stickyElement
            .css({
              width: '',
              position: '',
              top: '',
              'z-index': ''
            });
          s.stickyElement.parent().removeClass(s.className);
          s.stickyElement.trigger('sticky-end', [s]);
          s.currentTop = null;
        }
      } else {
        let newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
        if (newTop < 0) {
          newTop += s.topSpacing;
        } else {
          newTop = s.topSpacing;
        }
        if (s.currentTop !== newTop) {
          var newWidth;
          if (s.getWidthFrom) {
            padding = s.stickyElement.innerWidth() - s.stickyElement.width();
            newWidth = $(s.getWidthFrom).width() - padding || null;
          } else if (s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
          }
          if (newWidth == null) {
            newWidth = s.stickyElement.width();
          }
          s.stickyElement
            .css('width', newWidth)
            .css('position', 'fixed')
            .css('top', newTop)
            .css('z-index', s.zIndex);

          s.stickyElement.parent().addClass(s.className);

          if (s.currentTop === null) {
            s.stickyElement.trigger('sticky-start', [s]);
          } else {
            // sticky is started but it have to be repositioned
            s.stickyElement.trigger('sticky-update', [s]);
          }

          if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
            // just reached bottom || just started to stick but bottom is already reached
            s.stickyElement.trigger('sticky-bottom-reached', [s]);
          } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
            // sticky is started && sticked at topSpacing && overflowing from top just finished
            s.stickyElement.trigger('sticky-bottom-unreached', [s]);
          }

          s.currentTop = newTop;
        }

        // Check if sticky has reached end of container and stop sticking
        const stickyWrapperContainer = s.stickyWrapper.parent();
        const unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

        if (unstick) {
          s.stickyElement
            .css('position', 'absolute')
            .css('top', '')
            .css('bottom', 0)
            .css('z-index', '');
        } else {
          s.stickyElement
            .css('position', 'fixed')
            .css('top', newTop)
            .css('bottom', '')
            .css('z-index', s.zIndex);
        }
      }
    }
  };
  const resizer = function () {
    windowHeight = $window.height();

    for (let i = 0, l = sticked.length; i < l; i++) {
      const s = sticked[i];
      let newWidth = null;
      if (s.getWidthFrom) {
        if (s.responsiveWidth) {
          newWidth = $(s.getWidthFrom).width();
        }
      } else if (s.widthFromWrapper) {
        newWidth = s.stickyWrapper.width();
      }
      if (newWidth != null) {
        s.stickyElement.css('width', newWidth);
      }
    }
  };
  var methods = {
    init(options) {
      return this.each(function () {
        const o = $.extend({}, defaults, options);
        const stickyElement = $(this);

        const stickyId = stickyElement.attr('id');
        const wrapperId = stickyId ? `${stickyId}-${defaults.wrapperClassName}` : defaults.wrapperClassName;
        const wrapper = $('<div></div>')
          .attr('id', wrapperId)
          .addClass(o.wrapperClassName);

        stickyElement.wrapAll(function () {
          if ($(this).parent(`#${wrapperId}`).length == 0) {
            return wrapper;
          }
        });

        const stickyWrapper = stickyElement.parent();

        if (o.center) {
          stickyWrapper.css({ width: stickyElement.outerWidth(), marginLeft: 'auto', marginRight: 'auto' });
        }

        if (stickyElement.css('float') === 'right') {
          stickyElement.css({ float: 'none' }).parent().css({ float: 'right' });
        }

        o.stickyElement = stickyElement;
        o.stickyWrapper = stickyWrapper;
        o.currentTop = null;

        sticked.push(o);

        methods.setWrapperHeight(this);
        methods.setupChangeListeners(this);
      });
    },

    setWrapperHeight(stickyElement) {
      const element = $(stickyElement);
      const stickyWrapper = element.parent();
      if (stickyWrapper) {
        stickyWrapper.css('height', element.outerHeight());
      }
    },

    setupChangeListeners(stickyElement) {
      if (window.MutationObserver) {
        const mutationObserver = new window.MutationObserver(((mutations) => {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
            methods.setWrapperHeight(stickyElement);
          }
        }));
        mutationObserver.observe(stickyElement, { subtree: true, childList: true });
      } else if (window.addEventListener) {
        stickyElement.addEventListener('DOMNodeInserted', () => {
          methods.setWrapperHeight(stickyElement);
        }, false);
        stickyElement.addEventListener('DOMNodeRemoved', () => {
          methods.setWrapperHeight(stickyElement);
        }, false);
      } else if (window.attachEvent) {
        stickyElement.attachEvent('onDOMNodeInserted', () => {
          methods.setWrapperHeight(stickyElement);
        });
        stickyElement.attachEvent('onDOMNodeRemoved', () => {
          methods.setWrapperHeight(stickyElement);
        });
      }
    },
    update: scroller,
    unstick(options) {
      return this.each(function () {
        const that = this;
        const unstickyElement = $(that);

        let removeIdx = -1;
        let i = sticked.length;
        while (i-- > 0) {
          if (sticked[i].stickyElement.get(0) === that) {
            splice.call(sticked, i, 1);
            removeIdx = i;
          }
        }
        if (removeIdx !== -1) {
          unstickyElement.unwrap();
          unstickyElement
            .css({
              width: '',
              position: '',
              top: '',
              float: '',
              'z-index': ''
            });
        }
      });
    }
  };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    }
    $.error(`Method ${method} does not exist on jQuery.sticky`);
  };

  $.fn.unstick = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } if (typeof method === 'object' || !method) {
      return methods.unstick.apply(this, arguments);
    }
    $.error(`Method ${method} does not exist on jQuery.sticky`);
  };
  $(() => {
    setTimeout(scroller, 0);
  });
}));
