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

(function(a) {
    function d(b) {
        var c = '<div id="grid_wrapper"><div id="grid">';
        for (i = 1; i < b; i++) c += '<div class="grid_col"><div class="right_grid_colborder"></div></div>';
        c += '<div class="grid_col lastcol"><div class="right_grid_colborder"></div></div>';
        c += '</div></div><div id="grid_no_gut_wrapper"><div id="grid_no_gut"><div class="center first"></div>';
        for (i = 1; i < b - 1; i++) c += '<div class="center"></div>';
        c += '</div></div><div id="grid_toggle"><input type="button" value="Toggle grid" id="grid_toggle" /></div>';
        a("body").prepend(c);
    }
    function e(b) {
        d(b);
        a("#grid_wrapper").hide();
        a("#grid_no_gut_wrapper").hide();
        a("#grid_toggle").click(function() {
            a("#grid_wrapper").toggle();
            a("#grid_no_gut_wrapper").toggle();
        });
    }
    var b = !1;
    a("html").hasClass("lt-ie9") && (b = !0);
    var c = {
        miscFunct: function() {},
        breakPoints: function() {
            var c = [ {
                context: "mobile",
                callback: function() {
                    a("img").each(function(b) {
                        var c = a(this).attr("src");
                        a(this).attr("src", c);
                    });
                }
            }, {
                context: "450px",
                callback: function() {
                    a("img").each(function(b) {
                        var c = a(this).data("450px");
                        a(this).attr("src", c);
                    });
                }
            }, {
                context: "700px",
                callback: function() {
                    a("img").each(function(b) {
                        var c = a(this).data("700px");
                        a(this).attr("src", c);
                    });
                }
            } ];
            MQ.init(c);
            b && a("img").each(function(b) {
                var c = a(this).data("700px");
                a(this).attr("src", c);
            });
        },
        addPlaceHolder: function() {
            if (!Modernizr.input.placeholder) {
                a("[placeholder]").focus(function() {
                    var b = a(this);
                    if (b.val() === b.attr("placeholder")) {
                        b.val("");
                        b.removeClass("placeholder");
                    }
                }).blur(function() {
                    var b = a(this);
                    if (b.val() === "" || b.val() === b.attr("placeholder")) {
                        b.addClass("placeholder");
                        b.val(b.attr("placeholder"));
                    }
                }).blur();
                a("[placeholder]").parents("form").submit(function() {
                    a(this).find("[placeholder]").each(function() {
                        var b = a(this);
                        b.val() === b.attr("placeholder") && b.val("");
                    });
                });
            }
        }
    };
    c.miscFunct();
    c.breakPoints();
    c.addPlaceHolder();
})(jQuery);

$(window).load(function() {
    var a = $(".flexslider"), b = function(b) {
        a.find("li:visible").next().find("img").animate({
            marginLeft: "-6%",
            marginTop: "-6%",
            width: "110%"
        }, 1e4);
    };
    a.flexslider({
        animation: "fade",
        slideshowSpeed: 9e3,
        animationDuration: 4200
    });
});