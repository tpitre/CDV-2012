/* ================================================
   Carnivale du Vin and Boudin & Beer JS plugins
   ================================================ */// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        var b = arguments, c;
        b.callee = b.callee.caller;
        c = [].slice.call(b);
        typeof console.log == "object" ? log.apply.call(console.log, console, c) : console.log.apply(console, c);
    }
};

(function(a) {
    function b() {}
    for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop()); ) a[d] = a[d] || b;
})(function() {
    try {
        console.log();
        return window.console;
    } catch (a) {
        return window.console = {};
    }
}());

(function(a) {
    a.fn.fitText = function(b) {
        return this.each(function() {
            var c = a(this), d = parseFloat(c.css("font-size")), e = b || 1, f = function() {
                c.css("font-size", Math.min(c.width() / (e * 10), d));
            };
            f();
            a(window).resize(f);
        });
    };
})(jQuery);

jQuery.extend(jQuery.easing, {
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c;
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c;
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c;
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c;
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c;
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c;
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c;
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c;
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c;
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c;
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c;
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c;
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c;
    },
    easeInExpo: function(a, b, c, d, e) {
        return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c;
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return b == 0 ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c;
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (b == 0) return c;
        if ((b /= e) == 1) return c + d;
        g || (g = e * .3);
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c;
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (b == 0) return c;
        if ((b /= e) == 1) return c + d;
        g || (g = e * .3);
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c;
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (b == 0) return c;
        if ((b /= e / 2) == 2) return c + d;
        g || (g = e * .3 * 1.5);
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c;
    },
    easeInBack: function(a, b, c, d, e, f) {
        f == undefined && (f = 1.70158);
        return d * (b /= e) * b * ((f + 1) * b - f) + c;
    },
    easeOutBack: function(a, b, c, d, e, f) {
        f == undefined && (f = 1.70158);
        return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        f == undefined && (f = 1.70158);
        return (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c;
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c;
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return b < e / 2 ? jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c : jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c;
    }
});

(function(a) {
    function g() {
        f.content = "width=device-width,minimum-scale=" + e[0] + ",maximum-scale=" + e[1];
        a.removeEventListener(c, g, !0);
    }
    var b = "addEventListener", c = "gesturestart", d = "querySelectorAll", e = [ 1, 1 ], f = d in a ? a[d]("meta[name=viewport]") : [];
    if ((f = f[f.length - 1]) && b in a) {
        g();
        e = [ .25, 1.6 ];
        a[b](c, g, !0);
    }
})(document);

(function(a) {
    a.fn.ieffembedfix = function() {
        var b = "../img/hIEfix.png";
        return this.each(function() {
            jQuery.support.objectAll == 0 && a(this).css({
                filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + pngimgurl + ",sizingMethod=crop',
                zoom: "1"
            });
        });
    };
})(jQuery);

window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        var b = arguments, c;
        b.callee = b.callee.caller;
        c = [].slice.call(b);
        typeof console.log == "object" ? log.apply.call(console.log, console, c) : console.log.apply(console, c);
    }
};

(function(a) {
    function b() {}
    for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop()); ) a[d] = a[d] || b;
})(function() {
    try {
        console.log();
        return window.console;
    } catch (a) {
        return window.console = {};
    }
}());

var MQ = function(a) {
    a = a || {};
    a.init = function(c) {
        this.callbacks = [];
        this.context = "";
        if ("undefined" != typeof c) for (i = 0; i < c.length; i++) this.addQuery(c[i]);
        this.addEvent(window, "resize", a.listenForChange, a);
        this.listenForChange();
    };
    a.listenForChange = function() {
        var a;
        window.getComputedStyle && (a = window.getComputedStyle(document.body, ":after").getPropertyValue("content"), null != a && (a = a.replace(/['"]/g, ""), a !== this.context && this.triggerCallbacks(a), this.context = a));
    };
    a.addQuery = function(a) {
        if (null != a && void 0 != a) return this.callbacks.push(a), this.callbacks[this.callbacks.length - 1];
    };
    a.removeQuery = function(a) {
        if (null != a && void 0 != a) for (var b = -1; -1 < (b = this.callbacks.indexOf(a)); ) this.callbacks.splice(b, 1);
    };
    a.triggerCallbacks = function(a) {
        var b, c;
        for (b = 0; b < this.callbacks.length; b++) c = this.callbacks[b].callback, this.callbacks[b].context === a && void 0 !== c && c();
    };
    a.addEvent = function(a, b, c, d) {
        null == a || void 0 == a || (a.addEventListener ? a.addEventListener(b, function() {
            c.call(d);
        }, !1) : a.attachEvent ? a.attachEvent("on" + b, function() {
            c.call(d);
        }) : a["on" + b] = function() {
            c.call(d);
        });
    };
    return a;
}(MQ || {});

(function(a) {
    a.flexslider = function(b, c) {
        var d = a(b);
        a.data(b, "flexslider", d);
        d.init = function() {
            d.vars = a.extend({}, a.flexslider.defaults, c);
            a.data(b, "flexsliderInit", !0);
            d.container = a(".slides", d).first();
            d.slides = a(".slides:first > li", d);
            d.count = d.slides.length;
            d.animating = !1;
            d.currentSlide = d.vars.slideToStart;
            d.animatingTo = d.currentSlide;
            d.atEnd = d.currentSlide == 0 ? !0 : !1;
            d.eventType = "ontouchstart" in document.documentElement ? "touchstart" : "click";
            d.cloneCount = 0;
            d.cloneOffset = 0;
            d.manualPause = !1;
            d.vertical = d.vars.slideDirection == "vertical";
            d.prop = d.vertical ? "top" : "marginLeft";
            d.args = {};
            d.transitions = "webkitTransition" in document.body.style;
            d.transitions && (d.prop = "-webkit-transform");
            if (d.vars.controlsContainer != "") {
                d.controlsContainer = a(d.vars.controlsContainer).eq(a(".slides").index(d.container));
                d.containerExists = d.controlsContainer.length > 0;
            }
            if (d.vars.manualControls != "") {
                d.manualControls = a(d.vars.manualControls, d.containerExists ? d.controlsContainer : d);
                d.manualExists = d.manualControls.length > 0;
            }
            if (d.vars.randomize) {
                d.slides.sort(function() {
                    return Math.round(Math.random()) - .5;
                });
                d.container.empty().append(d.slides);
            }
            if (d.vars.animation.toLowerCase() == "slide") {
                d.transitions && d.setTransition(0);
                d.css({
                    overflow: "hidden"
                });
                if (d.vars.animationLoop) {
                    d.cloneCount = 2;
                    d.cloneOffset = 1;
                    d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"));
                }
                d.newSlides = a(".slides:first > li", d);
                var e = -1 * (d.currentSlide + d.cloneOffset);
                if (d.vertical) {
                    d.newSlides.css({
                        display: "block",
                        width: "100%",
                        "float": "left"
                    });
                    d.container.height((d.count + d.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        d.css({
                            position: "relative"
                        }).height(d.slides.filter(":first").height());
                        d.args[d.prop] = d.transitions ? "translate3d(0," + e * d.height() + "px,0)" : e * d.height() + "px";
                        d.container.css(d.args);
                    }, 100);
                } else {
                    d.args[d.prop] = d.transitions ? "translate3d(" + e * d.width() + "px,0,0)" : e * d.width() + "px";
                    d.container.width((d.count + d.cloneCount) * 200 + "%").css(d.args);
                    setTimeout(function() {
                        d.newSlides.width(d.width()).css({
                            "float": "left",
                            display: "block"
                        });
                    }, 100);
                }
            } else {
                d.transitions = !1;
                d.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%"
                }).eq(d.currentSlide).fadeIn(d.vars.animationDuration);
            }
            if (d.vars.controlNav) {
                if (d.manualExists) d.controlNav = d.manualControls; else {
                    var f = a('<ol class="flex-control-nav"></ol>'), g = 1;
                    for (var h = 0; h < d.count; h++) {
                        f.append("<li><a>" + g + "</a></li>");
                        g++;
                    }
                    if (d.containerExists) {
                        a(d.controlsContainer).append(f);
                        d.controlNav = a(".flex-control-nav li a", d.controlsContainer);
                    } else {
                        d.append(f);
                        d.controlNav = a(".flex-control-nav li a", d);
                    }
                }
                d.controlNav.eq(d.currentSlide).addClass("active");
                d.controlNav.bind(d.eventType, function(b) {
                    b.preventDefault();
                    if (!a(this).hasClass("active")) {
                        d.controlNav.index(a(this)) > d.currentSlide ? d.direction = "next" : d.direction = "prev";
                        d.flexAnimate(d.controlNav.index(a(this)), d.vars.pauseOnAction);
                    }
                });
            }
            if (d.vars.directionNav) {
                var i = a('<ul class="flex-direction-nav"><li><a class="prev" href="#">' + d.vars.prevText + '</a></li><li><a class="next" href="#">' + d.vars.nextText + "</a></li></ul>");
                if (d.containerExists) {
                    a(d.controlsContainer).append(i);
                    d.directionNav = a(".flex-direction-nav li a", d.controlsContainer);
                } else {
                    d.append(i);
                    d.directionNav = a(".flex-direction-nav li a", d);
                }
                d.vars.animationLoop || (d.currentSlide == 0 ? d.directionNav.filter(".prev").addClass("disabled") : d.currentSlide == d.count - 1 && d.directionNav.filter(".next").addClass("disabled"));
                d.directionNav.bind(d.eventType, function(b) {
                    b.preventDefault();
                    var c = a(this).hasClass("next") ? d.getTarget("next") : d.getTarget("prev");
                    d.canAdvance(c) && d.flexAnimate(c, d.vars.pauseOnAction);
                });
            }
            if (d.vars.keyboardNav && a("ul.slides").length == 1) {
                function j(a) {
                    if (d.animating) return;
                    if (a.keyCode != 39 && a.keyCode != 37) return;
                    if (a.keyCode == 39) var b = d.getTarget("next"); else if (a.keyCode == 37) var b = d.getTarget("prev");
                    d.canAdvance(b) && d.flexAnimate(b, d.vars.pauseOnAction);
                }
                a(document).bind("keyup", j);
            }
            if (d.vars.mousewheel) {
                d.mousewheelEvent = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
                d.bind(d.mousewheelEvent, function(a) {
                    a.preventDefault();
                    a = a ? a : window.event;
                    var b = a.detail ? a.detail * -1 : a.originalEvent.wheelDelta / 40, c = b < 0 ? d.getTarget("next") : d.getTarget("prev");
                    d.canAdvance(c) && d.flexAnimate(c, d.vars.pauseOnAction);
                });
            }
            if (d.vars.slideshow) {
                d.vars.pauseOnHover && d.vars.slideshow && d.hover(function() {
                    d.pause();
                }, function() {
                    d.manualPause || d.resume();
                });
                d.animatedSlides = setInterval(d.animateSlides, d.vars.slideshowSpeed);
            }
            if (d.vars.pausePlay) {
                var k = a('<div class="flex-pauseplay"><span></span></div>');
                if (d.containerExists) {
                    d.controlsContainer.append(k);
                    d.pausePlay = a(".flex-pauseplay span", d.controlsContainer);
                } else {
                    d.append(k);
                    d.pausePlay = a(".flex-pauseplay span", d);
                }
                var l = d.vars.slideshow ? "pause" : "play";
                d.pausePlay.addClass(l).text(l == "pause" ? d.vars.pauseText : d.vars.playText);
                d.pausePlay.bind(d.eventType, function(b) {
                    b.preventDefault();
                    if (a(this).hasClass("pause")) {
                        d.pause();
                        d.manualPause = !0;
                    } else {
                        d.resume();
                        d.manualPause = !1;
                    }
                });
            }
            if ("ontouchstart" in document.documentElement) {
                var m, n, o, p, q, r, s = !1;
                d.each(function() {
                    "ontouchstart" in document.documentElement && this.addEventListener("touchstart", t, !1);
                });
                function t(a) {
                    if (d.animating) a.preventDefault(); else if (a.touches.length == 1) {
                        d.pause();
                        p = d.vertical ? d.height() : d.width();
                        r = Number(new Date);
                        o = d.vertical ? (d.currentSlide + d.cloneOffset) * d.height() : (d.currentSlide + d.cloneOffset) * d.width();
                        m = d.vertical ? a.touches[0].pageY : a.touches[0].pageX;
                        n = d.vertical ? a.touches[0].pageX : a.touches[0].pageY;
                        d.setTransition(0);
                        this.addEventListener("touchmove", u, !1);
                        this.addEventListener("touchend", v, !1);
                    }
                }
                function u(a) {
                    q = d.vertical ? m - a.touches[0].pageY : m - a.touches[0].pageX;
                    s = d.vertical ? Math.abs(q) < Math.abs(a.touches[0].pageX - n) : Math.abs(q) < Math.abs(a.touches[0].pageY - n);
                    if (!s) {
                        a.preventDefault();
                        if (d.vars.animation == "slide" && d.transitions) {
                            d.vars.animationLoop || (q /= d.currentSlide == 0 && q < 0 || d.currentSlide == d.count - 1 && q > 0 ? Math.abs(q) / p + 2 : 1);
                            d.args[d.prop] = d.vertical ? "translate3d(0," + (-o - q) + "px,0)" : "translate3d(" + (-o - q) + "px,0,0)";
                            d.container.css(d.args);
                        }
                    }
                }
                function v(a) {
                    d.animating = !1;
                    if (d.animatingTo == d.currentSlide && !s && q != null) {
                        var b = q > 0 ? d.getTarget("next") : d.getTarget("prev");
                        d.canAdvance(b) && Number(new Date) - r < 550 && Math.abs(q) > 20 || Math.abs(q) > p / 2 ? d.flexAnimate(b, d.vars.pauseOnAction) : d.flexAnimate(d.currentSlide, d.vars.pauseOnAction);
                    }
                    this.removeEventListener("touchmove", u, !1);
                    this.removeEventListener("touchend", v, !1);
                    m = null;
                    n = null;
                    q = null;
                    o = null;
                }
            }
            d.vars.animation.toLowerCase() == "slide" && a(window).resize(function() {
                if (!d.animating && d.is(":visible")) if (d.vertical) {
                    d.height(d.slides.filter(":first").height());
                    d.args[d.prop] = -1 * (d.currentSlide + d.cloneOffset) * d.slides.filter(":first").height() + "px";
                    if (d.transitions) {
                        d.setTransition(0);
                        d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)";
                    }
                    d.container.css(d.args);
                } else {
                    d.newSlides.width(d.width());
                    d.args[d.prop] = -1 * (d.currentSlide + d.cloneOffset) * d.width() + "px";
                    if (d.transitions) {
                        d.setTransition(0);
                        d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)";
                    }
                    d.container.css(d.args);
                }
            });
            d.vars.start(d);
        };
        d.flexAnimate = function(a, b) {
            if (!d.animating && d.is(":visible")) {
                d.animating = !0;
                d.animatingTo = a;
                d.vars.before(d);
                b && d.pause();
                d.vars.controlNav && d.controlNav.removeClass("active").eq(a).addClass("active");
                d.atEnd = a == 0 || a == d.count - 1 ? !0 : !1;
                !d.vars.animationLoop && d.vars.directionNav && (a == 0 ? d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled") : a == d.count - 1 ? d.directionNav.removeClass("disabled").filter(".next").addClass("disabled") : d.directionNav.removeClass("disabled"));
                if (!d.vars.animationLoop && a == d.count - 1) {
                    d.pause();
                    d.vars.end(d);
                }
                if (d.vars.animation.toLowerCase() == "slide") {
                    var c = d.vertical ? d.slides.filter(":first").height() : d.slides.filter(":first").width();
                    d.currentSlide == 0 && a == d.count - 1 && d.vars.animationLoop && d.direction != "next" ? d.slideString = "0px" : d.currentSlide == d.count - 1 && a == 0 && d.vars.animationLoop && d.direction != "prev" ? d.slideString = -1 * (d.count + 1) * c + "px" : d.slideString = -1 * (a + d.cloneOffset) * c + "px";
                    d.args[d.prop] = d.slideString;
                    if (d.transitions) {
                        d.setTransition(d.vars.animationDuration);
                        d.args[d.prop] = d.vertical ? "translate3d(0," + d.slideString + ",0)" : "translate3d(" + d.slideString + ",0,0)";
                        d.container.css(d.args).one("webkitTransitionEnd transitionend", function() {
                            d.wrapup(c);
                        });
                    } else d.container.animate(d.args, d.vars.animationDuration, function() {
                        d.wrapup(c);
                    });
                } else {
                    d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);
                    d.slides.eq(a).fadeIn(d.vars.animationDuration, function() {
                        d.wrapup();
                    });
                }
            }
        };
        d.wrapup = function(a) {
            if (d.vars.animation == "slide") if (d.currentSlide == 0 && d.animatingTo == d.count - 1 && d.vars.animationLoop) {
                d.args[d.prop] = -1 * d.count * a + "px";
                if (d.transitions) {
                    d.setTransition(0);
                    d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)";
                }
                d.container.css(d.args);
            } else if (d.currentSlide == d.count - 1 && d.animatingTo == 0 && d.vars.animationLoop) {
                d.args[d.prop] = -1 * a + "px";
                if (d.transitions) {
                    d.setTransition(0);
                    d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)";
                }
                d.container.css(d.args);
            }
            d.animating = !1;
            d.currentSlide = d.animatingTo;
            d.vars.after(d);
        };
        d.animateSlides = function() {
            d.animating || d.flexAnimate(d.getTarget("next"));
        };
        d.pause = function() {
            clearInterval(d.animatedSlides);
            d.vars.pausePlay && d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText);
        };
        d.resume = function() {
            d.animatedSlides = setInterval(d.animateSlides, d.vars.slideshowSpeed);
            d.vars.pausePlay && d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText);
        };
        d.canAdvance = function(a) {
            return !d.vars.animationLoop && d.atEnd ? d.currentSlide == 0 && a == d.count - 1 && d.direction != "next" ? !1 : d.currentSlide == d.count - 1 && a == 0 && d.direction == "next" ? !1 : !0 : !0;
        };
        d.getTarget = function(a) {
            d.direction = a;
            return a == "next" ? d.currentSlide == d.count - 1 ? 0 : d.currentSlide + 1 : d.currentSlide == 0 ? d.count - 1 : d.currentSlide - 1;
        };
        d.setTransition = function(a) {
            d.container.css({
                "-webkit-transition-duration": a / 1e3 + "s"
            });
        };
        d.init();
    };
    a.flexslider.defaults = {
        animation: "fade",
        slideDirection: "horizontal",
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationDuration: 600,
        directionNav: !0,
        controlNav: !0,
        keyboardNav: !0,
        mousewheel: !1,
        prevText: "Previous",
        nextText: "Next",
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        randomize: !1,
        slideToStart: 0,
        animationLoop: !0,
        pauseOnAction: !0,
        pauseOnHover: !1,
        controlsContainer: "",
        manualControls: "",
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {}
    };
    a.fn.flexslider = function(b) {
        return this.each(function() {
            a(this).find(".slides li").length == 1 ? a(this).find(".slides li").fadeIn(400) : a(this).data("flexsliderInit") != 1 && new a.flexslider(this, b);
        });
    };
})(jQuery);

(function(a) {
    a.fn.touchwipe = function(b) {
        var c = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function() {},
            wipeRight: function() {},
            wipeUp: function() {},
            wipeDown: function() {},
            preventDefaultEvents: !0
        };
        b && a.extend(c, b);
        this.each(function() {
            function e() {
                this.removeEventListener("touchmove", f);
                a = null;
                d = !1;
            }
            function f(f) {
                c.preventDefaultEvents && f.preventDefault();
                if (d) {
                    var g = f.touches[0].pageX, h = f.touches[0].pageY, i = a - g, j = b - h;
                    if (Math.abs(i) >= c.min_move_x) {
                        e();
                        i > 0 ? c.wipeLeft() : c.wipeRight();
                    } else if (Math.abs(j) >= c.min_move_y) {
                        e();
                        j > 0 ? c.wipeDown() : c.wipeUp();
                    }
                }
            }
            function g(c) {
                if (c.touches.length == 1) {
                    a = c.touches[0].pageX;
                    b = c.touches[0].pageY;
                    d = !0;
                    this.addEventListener("touchmove", f, !1);
                }
            }
            var a, b, d = !1;
            "ontouchstart" in document.documentElement && this.addEventListener("touchstart", g, !1);
        });
        return this;
    };
})(jQuery);

(function(a) {
    function w() {
        t(!0);
    }
    a.respond = {};
    respond.update = function() {};
    respond.mediaQueriesSupported = a.matchMedia && a.matchMedia("only all").matches;
    if (respond.mediaQueriesSupported) return;
    var b = a.document, c = b.documentElement, d = [], e = [], f = [], g = {}, h = 30, i = b.getElementsByTagName("head")[0] || c, j = b.getElementsByTagName("base")[0], k = i.getElementsByTagName("link"), l = [], m = function() {
        var b = k, c = b.length, d = 0, e, f, h, i;
        for (; d < c; d++) {
            e = b[d], f = e.href, h = e.media, i = e.rel && e.rel.toLowerCase() === "stylesheet";
            if (!!f && i && !g[f]) if (e.styleSheet && e.styleSheet.rawCssText) {
                o(e.styleSheet.rawCssText, f, h);
                g[f] = !0;
            } else (!/^([a-zA-Z:]*\/\/)/.test(f) && !j || f.replace(RegExp.$1, "").split("/")[0] === a.location.host) && l.push({
                href: f,
                media: h
            });
        }
        n();
    }, n = function() {
        if (l.length) {
            var a = l.shift();
            u(a.href, function(b) {
                o(b, a.href, a.media);
                g[a.href] = !0;
                n();
            });
        }
    }, o = function(a, b, c) {
        var f = a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi), g = f && f.length || 0, b = b.substring(0, b.lastIndexOf("/")), h = function(a) {
            return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3");
        }, i = !g && c, j = 0, k, l, m, n, o;
        b.length && (b += "/");
        i && (g = 1);
        for (; j < g; j++) {
            k = 0;
            if (i) {
                l = c;
                e.push(h(a));
            } else {
                l = f[j].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1;
                e.push(RegExp.$2 && h(RegExp.$2));
            }
            n = l.split(",");
            o = n.length;
            for (; k < o; k++) {
                m = n[k];
                d.push({
                    media: m.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                    rules: e.length - 1,
                    hasquery: m.indexOf("(") > -1,
                    minw: m.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: m.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                });
            }
        }
        t();
    }, p, q, r = function() {
        var a, d = b.createElement("div"), e = b.body, f = !1;
        d.style.cssText = "position:absolute;font-size:1em;width:1em";
        if (!e) {
            e = f = b.createElement("body");
            e.style.background = "none";
        }
        e.appendChild(d);
        c.insertBefore(e, c.firstChild);
        a = d.offsetWidth;
        f ? c.removeChild(e) : e.removeChild(d);
        a = s = parseFloat(a);
        return a;
    }, s, t = function(a) {
        var g = "clientWidth", j = c[g], l = b.compatMode === "CSS1Compat" && j || b.body[g] || j, m = {}, n = k[k.length - 1], o = (new Date).getTime();
        if (a && p && o - p < h) {
            clearTimeout(q);
            q = setTimeout(t, h);
            return;
        }
        p = o;
        for (var u in d) {
            var v = d[u], w = v.minw, x = v.maxw, y = w === null, z = x === null, A = "em";
            !w || (w = parseFloat(w) * (w.indexOf(A) > -1 ? s || r() : 1));
            !x || (x = parseFloat(x) * (x.indexOf(A) > -1 ? s || r() : 1));
            if (!v.hasquery || (!y || !z) && (y || l >= w) && (z || l <= x)) {
                m[v.media] || (m[v.media] = []);
                m[v.media].push(e[v.rules]);
            }
        }
        for (var u in f) f[u] && f[u].parentNode === i && i.removeChild(f[u]);
        for (var u in m) {
            var B = b.createElement("style"), C = m[u].join("\n");
            B.type = "text/css";
            B.media = u;
            i.insertBefore(B, n.nextSibling);
            B.styleSheet ? B.styleSheet.cssText = C : B.appendChild(b.createTextNode(C));
            f.push(B);
        }
    }, u = function(a, b) {
        var c = v();
        if (!c) return;
        c.open("GET", a, !0);
        c.onreadystatechange = function() {
            if (c.readyState != 4 || c.status != 200 && c.status != 304) return;
            b(c.responseText);
        };
        if (c.readyState == 4) return;
        c.send(null);
    }, v = function() {
        var a = !1;
        try {
            a = new XMLHttpRequest;
        } catch (b) {
            a = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return function() {
            return a;
        };
    }();
    m();
    respond.update = m;
    a.addEventListener ? a.addEventListener("resize", w, !1) : a.attachEvent && a.attachEvent("onresize", w);
})(this);