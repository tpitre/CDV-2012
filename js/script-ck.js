/* ================================================
   Carnivale du Vin and Boudin & Beer Main JS
   Author: Terrance Pitre
   ================================================ *//* GLOBAL VARS
------------------------------------------*/// Breakpoint vars
var isotopeMinWidth = 0, logoCarouselHeight = 100, getWidth = function() {
    return document.body.clientWidth;
};

window.onload = function() {
    getWidth();
};

window.onresize = function() {
    getWidth();
};

getWidth() >= 860 ? isotopeMinWidth = 3 : getWidth() >= 450 ? isotopeMinWidth = 2 : getWidth() >= 0 && (isotopeMinWidth = 1);

getWidth() >= 730 && (logoCarouselHeight = 130);

var iOS = !1, p = navigator.platform;

if (p === "iPad" || p === "iPhone" || p === "iPod") iOS = !0;

var isTouch = !1, logoCarouselSwipeAmt = 1;

Modernizr.touch && (isTouch = !0, logoCarouselSwipeAmt = null);

(function(e) {
    var t = !1;
    e("html").hasClass("lt-ie9") && (t = !0);
    var n = {
        miscFunct: function() {
            var t = e(".sponsor-carousel");
            e().carouFredSel && t.show().find("ul").carouFredSel({
                circular: !0,
                infinite: !1,
                width: "100%",
                height: 90,
                items: {
                    height: 90
                },
                scroll: {
                    wipe: !0,
                    duration: 1e3,
                    easing: "easeInOutQuad",
                    pauseOnHover: !0
                },
                prev: {
                    button: ".sponsor-nav-prev",
                    key: "left"
                },
                next: {
                    button: ".sponsor-nav-next",
                    key: "right"
                }
            });
            e(".block:nth-child(even)").addClass("even");
        },
        breakPoints: function() {
            var n = [ {
                context: "mobile",
                callback: function() {
                    var t = e("#main-nav"), n = e(".toggle-menu");
                    console.log("sdfsdf");
                    t.addClass("open");
                    setTimeout(function() {
                        t.removeClass("open");
                        n.css("opacity", 1);
                    }, 2200);
                    n.toggle(function() {
                        t.addClass("open");
                    }, function() {
                        t.removeClass("open");
                    });
                    e("img").each(function(t) {
                        var n = e(this).attr("src");
                        e(this).attr("src", n);
                    });
                }
            }, {
                context: "450px",
                callback: function() {
                    e("img").each(function(t) {
                        var n = e(this).data("450px");
                        e(this).attr("src", n);
                    });
                }
            }, {
                context: "730px",
                callback: function() {
                    e("img").each(function(t) {
                        var n = e(this).data("730px");
                        e(this).attr("src", n);
                    });
                }
            } ];
            MQ.init(n);
            t && e("img").each(function(t) {
                var n = e(this).data("730px");
                e(this).attr("src", n);
            });
        },
        addPlaceHolder: function() {
            if (!Modernizr.input.placeholder) {
                e("[placeholder]").focus(function() {
                    var t = e(this);
                    if (t.val() === t.attr("placeholder")) {
                        t.val("");
                        t.removeClass("placeholder");
                    }
                }).blur(function() {
                    var t = e(this);
                    if (t.val() === "" || t.val() === t.attr("placeholder")) {
                        t.addClass("placeholder");
                        t.val(t.attr("placeholder"));
                    }
                }).blur();
                e("[placeholder]").parents("form").submit(function() {
                    e(this).find("[placeholder]").each(function() {
                        var t = e(this);
                        t.val() === t.attr("placeholder") && t.val("");
                    });
                });
            }
        }
    };
    n.miscFunct();
    n.breakPoints();
    n.addPlaceHolder();
})(jQuery);

$(window).load(function() {
    var e = $("#save-the-date").find(".flexslider"), t = $("#main-content").find(".flexslider");
    e.flexslider({
        animation: "fade",
        slideshowSpeed: 9e3,
        animationDuration: 4200,
        prevText: "v",
        nextText: "u"
    });
    t.flexslider({
        animation: "fade",
        prevText: "v",
        nextText: "u"
    });
});