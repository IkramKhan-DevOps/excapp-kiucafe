!function (t) {
    "use strict";
    var a, o, i = 991, n = 991, r = 0, s = 0, l = 0, c = [], d = [], p = "", h = !1;
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (h = !0), /iPhone|iPad|iPod/i.test(navigator.userAgent), t(".image-back-offset-shadow, .vertical-counter, .counter, .progress-bar, .pie-chart-style-01, .pie-chart-style-02").each(function () {
        t(this).appear().trigger("resize")
    }), t("nav.navbar li.dropdown.megamenu").on("touchstart mouseenter click", function (e) {
        var a = N();
        if (a > i) {
            var o = t(this).children(".dropdown-menu");
            o.css({left: ""}), parseInt(o.css("padding-left"));
            var n = t(this).position().left, r = t(this).outerWidth(), s = t(".navbar-collapse").offset().left,
                l = o.outerWidth(), c = n + r / 2 - l / 2, d = a - s;
            c + s < 0 ? c = 30 - s : c + l > d && (c = d - l - 30), o.css({left: c + "px"})
        } else t(this).children(".dropdown-menu").css({right: "", left: ""})
    }), t(".counter").each(function (e) {
        var a = t(this);
        e = t.extend({}, e || {}, a.data("countToOptions") || {}), a.countTo(e)
    }), F(), $(), H(), W(2e3), D(), G(), A(), B(), t(".fit-videos").fitVids(), t("[data-scroll-options]").each(function () {
        var e = t(this), a = e.attr("data-scroll-options") || '{ "theme": "dark" }';
        null != a && (a = t.parseJSON(a), e.mCustomScrollbar(a))
    }), t(document).on("click", ".html-video-play", function () {
        var e = t(this).parents("section").find(".video-bg");
        !1 === t(this).is("[playing]") ? (e.trigger("play"), t(this).attr("playing", "true")) : (e.trigger("pause"), t(this).removeAttr("playing"))
    }), t(".price-filter").length > 0 && (t(".price-filter").slider({
        range: !0,
        animate: !0,
        min: 0,
        max: 4e3,
        step: 1,
        values: [1, 3999],
        slide: function (e, a) {
            t(".price-amount").val("$" + a.values[0] + " - $" + a.values[1]), t(document.body).trigger("price_slider_change", [a.values[0], a.values[1]])
        }
    }), t(".price-amount").val("$" + t(".price-filter").slider("values", 0) + " - $" + t(".price-filter").slider("values", 1))), t(".image-back-offset-shadow").length > 0 && t(document).on("appear", ".image-back-offset-shadow", function (e) {
        t(".image-back-offset-shadow").addClass("active")
    }), t(".vertical-counter").each(function () {
        for (var e = t(this), a = e.attr("data-to"), o = a.toString().split(""), i = a.length, n = 0; n < i; n++) e.append('<span class="vertical-counter-number"><ul><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></span>');
        e.find(".vertical-counter-number").each(function (e) {
            t(this).attr("data-to", o[e])
        })
    }), t(".vertical-counter").length > 0 && t(document).on("appear", ".vertical-counter", function (e) {
        t(window).scrollTop() + z() >= t(".vertical-counter").offset().top && t(this).find(".vertical-counter-number").each(function () {
            var e = t(this), a = e.attr("data-to"), o = e.find("li").height();
            e.height(o), a <= 9 && e.find("ul").css({transform: "translateY(-" + 10 * a + "%)"})
        })
    }), t(".counter").length > 0 && t(document).on("appear", ".counter", function (e) {
        var a = t(this);
        if (!a.hasClass("appear")) {
            var o = a.data("countToOptions") || {};
            a.countTo(o), a.addClass("appear")
        }
    }), t(".progress-bar").length > 0 && t(document).on("appear", ".progress-bar", function (e) {
        if (!t(this).hasClass("appear")) {
            t(this).addClass("appear");
            var a = t(this).attr("aria-valuenow");
            t(this).animate({width: a + "%"}, {
                duration: 300, easing: "swing", progress: function (e, o, i) {
                    var n = parseInt(a * o);
                    t(this).find("span").html(n + "%")
                }
            })
        }
    }), t(".pie-chart-style-01").length > 0 && t(document.body).on("appear", ".pie-chart-style-01", function (e) {
        t(".pie-chart-style-01").easyPieChart({
            trackColor: "#232323",
            scaleColor: "",
            lineCap: "round",
            lineWidth: 10,
            size: 180,
            barColor: function () {
                a = t(this.el).attr("data-start-color") || t(this.el).attr("data-bar-color") || "#000", o = t(this.el).attr("data-end-color") || t(this.el).attr("data-bar-color") || "#000";
                var e = this.renderer.getCtx(), i = this.renderer.getCanvas(),
                    n = e.createLinearGradient(0, 0, i.width, 270);
                return n.addColorStop(.2, a), n.addColorStop(0, o), n
            },
            animate: {duration: 2e3, enabled: !0},
            onStep: function (e, a, o) {
                t(this.el).find(".percent").text(Math.round(o) + "%")
            }
        })
    }), t(".pie-chart-style-02").length > 0 && t(document.body).on("appear", ".pie-chart-style-02", function (e) {
        t(".pie-chart-style-02").easyPieChart({
            trackColor: "#232323",
            scaleColor: "",
            lineCap: "round",
            lineWidth: 10,
            size: 140,
            barColor: function () {
                a = t(this.el).attr("data-start-color") || t(this.el).attr("data-bar-color") || "#000", o = t(this.el).attr("data-end-color") || t(this.el).attr("data-bar-color") || "#000";
                var e = this.renderer.getCtx(), i = this.renderer.getCanvas(),
                    n = e.createLinearGradient(0, 0, i.width, 270);
                return n.addColorStop(.2, a), n.addColorStop(0, o), n
            },
            animate: {duration: 2e3, enabled: !0},
            onStep: function (e, a, o) {
                t(this.el).find(".percent").text(Math.round(o) + "%")
            }
        })
    }), t(document).on("click", ".qty-plus", function (e) {
        e.preventDefault();
        var a = t(this).attr("data-field"),
            o = parseInt(t(this).closest(".quantity").find("input[name=" + a + "]").val());
        isNaN(o) ? t(this).closest(".quantity").find("input[name=" + a + "]").val(0) : t(this).closest(".quantity").find("input[name= " + a + "]").val(o + 1), t(this).closest(".quantity").find(".input-text").trigger("change")
    }), t(document).on("click", ".qty-minus", function (e) {
        e.preventDefault();
        var a = t(this).attr("data-field"),
            o = parseInt(t(this).closest(".quantity").find("input[name= " + a + "]").val());
        !isNaN(o) && o > 0 ? t(this).closest(".quantity").find("input[name=" + a + "]").val(o - 1) : t(this).closest(".quantity").find("input[name=" + a + "]").val(0), t(this).closest(".quantity").find(".input-text").trigger("change")
    }), t('[data-bs-toggle="tooltip"]').length > 0 && [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
        return new bootstrap.Tooltip(e)
    }), t(".tilt-box").length > 0 && !h && t(".tilt-box").each(function () {
        var e = t(this),
            a = e.attr("data-tilt-options") || '{ "maxTilt": 20, "perspective": 1000, "easing": "cubic-bezier(.03,.98,.52,.99)", "scale": 1, "speed": 500, "transition": true, "reset": true, "glare": false, "maxGlare": 1 }';
        null != a && (a = t.parseJSON(a), e.tilt(a))
    }), t(".justified-gallery").length > 0 && t(".justified-gallery").each(function () {
        var e = t(this),
            a = e.attr("data-justified-options") || '{ "rowHeight": 500, "maxRowHeight": false, "captions": true, "margins": 15, "waitThumbnailsLoad": true }';
        null != a && e.imagesLoaded(function () {
            a = t.parseJSON(a), e.justifiedGallery(a)
        })
    }), h || (t(document).on("mousemove", ".jg-entry", function (e) {
        var a = t(this).width(), o = t(this).find(".jg-caption").width(), i = t(this).find(".caption").html(),
            n = t(this).offset(), r = e.pageX - n.left + 20, s = e.pageY - n.top;
        r + o + 30 > a && (r = r - o - 65), t(this).css("overflow", "visible"), t(this).find(".jg-caption").html(i).show().css({
            left: r + "px",
            right: "auto",
            top: s + "px",
            bottom: "auto"
        })
    }), t(document).on("mouseleave", ".jg-entry", function (e) {
        t(this).css("overflow", " "), t(this).find(".jg-caption").hide().css({
            left: " ",
            right: " ",
            top: " ",
            bottom: " "
        })
    })), t(".accordion-event").each(function () {
        var e = t(this), a = e.attr("data-active-icon") || "", o = e.attr("data-inactive-icon") || "";
        t(".collapse", this).on("show.bs.collapse", function () {
            var e = t(this).attr("id");
            t('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), t('a[href="#' + e + '"] .panel-title i').addClass(a).removeClass(o)
        }).on("hide.bs.collapse", function () {
            var e = t(this).attr("id");
            t('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), t('a[href="#' + e + '"] .panel-title i').addClass(o).removeClass(a)
        })
    }), t(".checkout-accordion label input").on("click", function (e) {
        var a = t(this).parent().find("a").attr("href");
        t(this).prop("checked") ? t(a).collapse("show") : t(a).collapse("hide")
    }), t('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        t(".tab-content .accordion-event").each(function () {
            t(".collapse", this).collapse("hide")
        }), M(c, !0)
    }), t(".countdown").each(function () {
        var e = t(this);
        e.countdown(e.attr("data-enddate")).on("update.countdown", function (t) {
            e.html(t.strftime('<div class="countdown-container"><div class="countdown-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="countdown-box"><div class="number">%H</div><span>Hours</span></div><div class="countdown-box"><div class="number">%M</div><span>Minutes</span></div><div class="countdown-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))
        })
    }), t(".wow").length > 0 && (p = new WOW({
        boxClass: "wow",
        animateClass: "animate__animated",
        offset: 30,
        mobile: !1,
        live: !0
    }), t(document).imagesLoaded(function () {
        p.init()
    })), t(".portfolio-wrapper").each(function () {
        var e = t(this);
        !e.find(".wow").length > 0 && e.find(".grid-item").css("visibility", "hidden"), e.imagesLoaded(function () {
            !e.find(".wow").length > 0 ? e.find(".grid-item").css("visibility", "") : h || e.find(".grid-item").css("visibility", "hidden"), e.removeClass("grid-loading"), e.isotope({
                layoutMode: "masonry",
                itemSelector: ".grid-item",
                percentPosition: !0,
                stagger: 0,
                masonry: {columnWidth: ".grid-sizer"}
            }), c.push(e)
        })
    }), t(document).on("click", ".portfolio-filter > li > a", function () {
        var e = t(this), a = e.parents("section");
        a.find(".portfolio-filter > li").removeClass("active"), e.parent().addClass("active");
        var o = e.attr("data-filter"), i = a.find(".portfolio-wrapper");
        return q(i), i.isotope({filter: o}), !1
    }), t(".blog-wrapper").each(function () {
        var e = t(this);
        !e.find(".wow").length > 0 && e.find(".grid-item").css("visibility", "hidden"), e.imagesLoaded(function () {
            !e.find(".wow").length > 0 ? e.find(".grid-item").css("visibility", "") : h || e.find(".grid-item").css("visibility", "hidden"), e.removeClass("grid-loading"), e.isotope({
                layoutMode: "masonry",
                itemSelector: ".grid-item",
                percentPosition: !0,
                stagger: 0,
                masonry: {columnWidth: ".grid-sizer"}
            }), c.push(e)
        })
    }), t(document).on("click", ".blog-filter > li > a", function () {
        var e = t(this), a = e.parents("section");
        a.find(".blog-filter > li").removeClass("active"), e.parent().addClass("active");
        var o = e.attr("data-filter"), i = a.find(".blog-wrapper");
        return q(i), i.isotope({filter: o}), !1
    }), t(".shop-wrapper").each(function () {
        var e = t(this);
        !e.find(".wow").length > 0 && e.find(".grid-item").css("visibility", "hidden"), e.imagesLoaded(function () {
            !e.find(".wow").length > 0 ? e.find(".grid-item").css("visibility", "") : h || e.find(".grid-item").css("visibility", "hidden"), e.removeClass("grid-loading"), e.isotope({
                layoutMode: "masonry",
                itemSelector: ".grid-item",
                percentPosition: !0,
                stagger: 0,
                masonry: {columnWidth: ".grid-sizer"}
            }), c.push(e)
        })
    }), t(document).on("click", ".shop-filter > li > a", function () {
        var e = t(this), a = e.parents("section");
        a.find(".shop-filter > li").removeClass("active"), e.parent().addClass("active");
        var o = e.attr("data-filter"), i = a.find(".shop-wrapper");
        return q(i), i.isotope({filter: o}), !1
    }), document.querySelectorAll(".instafeed-wrapper").forEach(function (e, a) {
        var o = "IGQVJXVDl3ek5tZAUpQLUdpSTVmM0xzREFMSS1FdU1QNGJLRlRGeTNlNDdwbmlQUllya2h2djc4R25YbUlIcG5HUVFydHUzSGNIVFpBdDN5Wlo0TlpSYkNRV1NablJRd04wS0FxTm1UUFFDNlR4RlJyZAgZDZD",
            i = t(e), n = (o = i.attr("data-token") || o, i.attr("data-total") || "6"),
            r = i.attr("data-slider-options"), s = i.html(), l = "";
        null != r && i.html(""), t.ajax({
            url: "https://graph.instagram.com/me/media?fields=id,media_type,media_url,timestamp,permalink,comments_count,like_count&access_token=" + o,
            type: "GET",
            success: function (a) {
                for (var o in l += i.find(".grid-item").length > 0 ? '<li class="grid-sizer"></li>' : "", a.data) if (o < parseInt(n) && "IMAGE" == a.data[o].media_type) {
                    var d = a.data[o].permalink || "", p = a.data[o].media_url || "", u = a.data[o].like_count || "",
                        m = a.data[o].comments_count || "", g = s;
                    g = (g = (g = (g = (g = (g = (g = (g = g.replace(' href="#"', "")).replace(' src="#"', "")).replace("data-href", "href")).replace("data-src", "src")).replace("{{link}}", d)).replace("{{image}}", p)).replace("{{likes}}", u)).replace("{{comments}}", m), l += g
                }
                if (i.html(l), null != r) {
                    var f = t.parseJSON(r), v = e.parentElement;
                    new Swiper(v, f)
                } else !i.find(".wow").length > 0 && i.find(".grid-item").css("visibility", "hidden"), i.imagesLoaded(function () {
                    !i.find(".wow").length > 0 ? i.find(".grid-item").css("visibility", "") : h || i.find(".grid-item").css("visibility", "hidden"), i.removeClass("grid-loading"), i.isotope({
                        layoutMode: "masonry",
                        itemSelector: ".grid-item",
                        percentPosition: !0,
                        stagger: 0,
                        masonry: {columnWidth: ".grid-sizer"}
                    }), c.push(i)
                })
            },
            error: function (e) {
                i.append('<div class="col-12"><span class=text-center>No Images Found</span></div>')
            }
        })
    }), t(".fullscreen-hover-list .hover-list-item").length > 0) {
        var u = h ? "click" : "mouseover";
        t(document).on(u, ".fullscreen-hover-list .hover-list-item a", function (e) {
            if (!t(this).parent().hasClass("active")) return t(".fullscreen-hover-list .hover-list-item").removeClass("active"), t(this).parent().addClass("active"), !1
        })
    }
    if (t(".portfolio-colorful").length > 0) for (var m = t(".portfolio-colorful").find(".grid-item").length, g = t(".portfolio-colorful").attr("data-backgroundcolor") || "#2e94eb", f = t(".portfolio-colorful").attr("data-opacity") || 1, v = (x = g.split(",")).length, b = 0; b < m; b++) {
        var w = x[b],
            y = "rgba(" + parseInt(w.slice(-6, -4), 16) + "," + parseInt(w.slice(-4, -2), 16) + "," + parseInt(w.slice(-2), 16) + "," + f + ")";
        t(".portfolio-colorful").find(".portfolio-hover:eq(" + b + ")").css("background-color", y), v < m && x.push(x[b])
    }
    if (t(".page-title-colorful").length > 0) {
        var C, x = (g = t(".page-title-colorful").attr("data-backgroundcolor") || "#2e94eb").split(","),
            k = (v = (x = g.split(",")).length, 1);
        t(".page-title-colorful").css({"background-color": x[0]}), setInterval(function () {
            C = x[k], t(".page-title-colorful").css({"background-color": C}), ++k === v && (k = 0)
        }, 5e3)
    }
    t(document).on("click", ".search-form-icon", function (e) {
        e.preventDefault(), t(this).parents(".top-bar").length > 0 && t("body").addClass("show-search-popup-mini-header"), t(".search-form-wrapper").addClass("active-form"), t("body").addClass("show-search-popup")
    }), t(document).on("click", ".search-close", function (e) {
        e.preventDefault(), t(".search-form-wrapper").removeClass("active-form"), t(this).parents(".top-bar").length > 0 && t("body").removeClass("show-search-popup-mini-header"), t("body").removeClass("show-search-popup")
    }), t(document).on("click", ".search-button", function () {
        var e = !0, a = t(this).parents("form");
        return a.find("input[type=text]").each(function (o) {
            var i = t(this).val();
            null === i || "" === i ? (a.find("input:eq(" + o + ")").addClass("search-error"), e = !1) : a.find("input:eq(" + o + ")").removeClass("search-error")
        }), e
    }), t(document).on("click", ".header-push-button .push-button", function () {
        t("body").toggleClass("show-menu"), t("body").toggleClass("hamburger-show-menu")
    }), t(document).on("click", ".close-menu", function () {
        O || (O = !0, setTimeout(function () {
            O = !1
        }, 500), t("body").removeClass("show-menu").removeClass("left-classic-mobile-menu"), t(".sub-menu-item").collapse("hide"), t(".menu-list-item.open").removeClass("show"))
    }), t(document).on("touchstart click", ".show-menu", function (e) {
        t(e.target).hasClass("push-button") || t(e.target).closest(".push-button").length || t(e.target).closest(".push-menu").length || t(e.target).closest(".hamburger-menu").length || t(".close-menu").trigger("click")
    }), t(document).on("click", ".side-menu-button", function () {
        t("body").toggleClass("show-menu"), t(".left-sidebar-wrapper").length > 0 && N() <= i && t("body").toggleClass("left-classic-mobile-menu"), t(".sub-menu-item").collapse("hide"), t(".menu-list-item.open").removeClass("show")
    }), t(document).on("keydown", function (e) {
        27 === e.keyCode && (t(".close-menu").trigger("click"), t(window).trigger("closemenu"))
    }), t(document).on("click", ".scroll-top-arrow", function () {
        return t("html, body").animate({scrollTop: 0}, 800), !1
    }), t("a.scrollto").bind("click.smoothscroll", function (e) {
        e.preventDefault();
        var a = this.hash;
        0 !== t(a).length && t("html, body").stop().animate({scrollTop: t(a).offset().top}, 1200, "easeInOutExpo", function () {
            window.location.hash = a
        })
    }), t(".navbar-reverse-scroll").length > 0 ? t(".inner-link").smoothScroll({
        speed: 900,
        offset: 0,
        beforeScroll: function () {
            t(".navbar-collapse.collapse").collapse("hide")
        }
    }) : t(".inner-link").smoothScroll({
        speed: 900, offset: -59, beforeScroll: function () {
            t(".navbar-collapse.collapse").collapse("hide")
        }
    }), t(".section-link").smoothScroll({
        speed: 900, offset: 1, beforeScroll: function () {
            t(".navbar-collapse.collapse").collapse("hide")
        }
    }), t("#subscribe-popup").length > 0 && "shown" != function (e) {
        for (var t = "litho-promo-popup=", a = decodeURIComponent(document.cookie).split(";"), o = 0; o < a.length; o++) {
            for (var i = a[o]; " " == i.charAt(0);) i = i.substring(1);
            if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
        }
        return ""
    }() && setTimeout(function () {
        t.magnificPopup.open({
            showCloseBtn: !1,
            items: {src: "#subscribe-popup"},
            type: "inline",
            mainClass: "my-mfp-zoom-in",
            callbacks: {
                close: function () {
                    t("#newsletter-off").is(":checked") && E("litho-promo-popup", "shown", 30)
                }
            }
        })
    }, 1e3), t(".notify-form-button").magnificPopup({
        mainClass: "mfp-notify",
        closeOnBgClick: !0,
        preloader: !1,
        fixedContentPos: !1,
        removalDelay: 100,
        closeBtnInside: !1,
        callbacks: {
            open: function () {
                setTimeout(function () {
                    t(".notify-input").focus()
                }, 100), t("#notify_form").parent().addClass("notify-popup"), t("#notify_form").parents("body").addClass("show-notify-popup")
            }, close: function () {
                t("body").removeClass("show-notify-popup")
            }
        }
    }), t(".lightbox-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-fade",
        fixedContentPos: !0,
        closeBtnInside: !1,
        gallery: {enabled: !0, navigateByImgClick: !0, preload: [0, 1]}
    });
    var S = {};
    t(".lightbox-group-gallery-item").each(function () {
        var e = t(this).attr("data-group");
        S[e] || (S[e] = []), S[e].push(this)
    }), t.each(S, function () {
        t(this).magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            closeBtnInside: !1,
            fixedContentPos: !0,
            gallery: {enabled: !0}
        })
    }), t(".lightbox-portfolio").magnificPopup({
        delegate: ".gallery-link",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-fade",
        fixedContentPos: !0,
        closeBtnInside: !1,
        closeOnContentClick: !0,
        gallery: {enabled: !0, navigateByImgClick: !1, preload: [0, 1]}
    }), t(".single-image-lightbox").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        fixedContentPos: !0,
        closeBtnInside: !1,
        mainClass: "mfp-no-margins mfp-with-zoom",
        image: {verticalFit: !0},
        zoom: {enabled: !0, duration: 300}
    }), t(".zoom-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: "mfp-with-zoom mfp-img-mobile",
        fixedContentPos: !0,
        closeBtnInside: !1,
        image: {
            verticalFit: !0, titleSrc: function (e) {
                return e.el.attr("title")
            }
        },
        gallery: {enabled: !0},
        zoom: {
            enabled: !0, duration: 300, opener: function (e) {
                return e.find("img")
            }
        }
    }), t(".modal-popup").magnificPopup({
        type: "inline",
        preloader: !1,
        blackbg: !0
    }), t(document).on("click", ".popup-modal-dismiss", function (e) {
        e.preventDefault(), t.magnificPopup.close()
    }), t(".popup-with-zoom-anim").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        blackbg: !0,
        mainClass: "my-mfp-zoom-in"
    }), t(".popup-with-move-anim").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        blackbg: !0,
        mainClass: "my-mfp-slide-bottom"
    }), t(".popup-with-form").magnificPopup({
        type: "inline",
        preloader: !1,
        closeBtnInside: !1,
        fixedContentPos: !0,
        focus: "#name",
        callbacks: {
            beforeOpen: function () {
                N() < 700 ? this.st.focus = !1 : this.st.focus = "#name"
            }
        }
    }), t(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 767,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !0,
        closeBtnInside: !1
    }), t(".popup-googlemap").magnificPopup({
        disableOn: 0,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !0,
        closeBtnInside: !1
    }), t(".ajax-popup").magnificPopup({
        type: "ajax",
        alignTop: !0,
        fixedContentPos: !0,
        closeBtnInside: !1,
        overflowY: "scroll",
        callbacks: {
            open: function () {
                t(".navbar .collapse").removeClass("show"), t(".navbar a.dropdown-toggle").addClass("collapsed")
            }
        }
    }), t(document).on("click", ".submit", function () {
        var e = !1, a = !1, o = t(this), i = o.parents("form"), n = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            r = /[0-9 -()+]+$/, s = (i.attr("action"), i.find(".form-results"), o.attr("data-sitekey") || "");
        i.find('[name="redirect"]').val(), i.find(".required").removeClass("error"), i.find(".required").each(function () {
            var a = t(this), o = a.val();
            "" == o || null == o ? (e = !0, a.addClass("error")) : ("email" != a.attr("type") || n.test(o)) && ("tel" != a.attr("type") || r.test(o)) || (e = !0, a.addClass("error"))
        });
        var l = i.find(".terms-condition");
        return l.length > 0 && (l.is(":checked") || (e = !0, l.addClass("error"))), "undefined" != typeof grecaptcha && null !== grecaptcha && (i.find(".g-recaptcha").length > 0 ? grecaptcha.getResponse().length || (e = !0, i.find(".g-recaptcha").addClass("error")) : "" != s && null != s && (a = !0, i.find("input[name=action],input[name=g-recaptcha-response]").remove(), grecaptcha.ready(function () {
            grecaptcha.execute(s, {action: "subscribe_newsletter"}).then(function (t) {
                i.prepend('<input type="hidden" name="g-recaptcha-response" value="' + t + '">'), i.prepend('<input type="hidden" name="action" value="subscribe_newsletter">'), e || V(o)
            })
        }))), e || a || V(o), !1
    }), t(document).on("blur", ".required", function () {
        var e = t(this).val();
        "" == e || null == e ? t(this).addClass("error") : "email" == t(this).attr("type") && !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e) || "tel" == t(this).attr("type") && !/[0-9 -()+]+$/.test(e) ? t(this).addClass("error") : t(this).removeClass("error")
    }), t(document).on("click", ".terms-condition", function () {
        var e = t(this);
        e.is(":checked") ? e.removeClass("error") : e.addClass("error")
    });
    var I = window.location.href.substr(window.location.href.lastIndexOf("/") + 1),
        P = window.location.hash.substring(1);
    P ? (P = "#" + P, I = I.replace(P, "")) : I = I.replace("#", ""), t(".navbar-nav li a, .menu-list a").each(function () {
        var e = t(this), a = e.attr("href");
        a !== I && a !== I + ".html" || (e.addClass("active"), e.parent().addClass("active"), e.parents("li.dropdown").addClass("active"), e.parents("li.menu-list-item").addClass("active"))
    });
    var _ = t("body").attr("data-mobile-nav-style");
    if (("modern" == _ || "full-screen-menu" == _) && !t(".navbar-" + _ + "-inner").length) {
        if (!t(".box-layout").length > 0 && "modern" == _ ? t("section, footer").wrapAll('<div class="page-layout"></div>') : t("section").wrapAll('<div class="page-layout"></div>'), t(".navbar .navbar-toggler").clone(!0).addClass("navbar-toggler-clone").insertAfter(".page-layout"), t(".navbar .navbar-collapse").clone(!0).addClass("navbar-collapse-clone").attr("id", "navbarNav-clone").insertAfter(".page-layout"), t(".navbar-toggler-clone, .navbar-collapse-clone").wrapAll('<div class="navbar-' + _ + '-inner"></div>'), t(".navbar-toggler").attr("data-bs-target", "#navbarNav-clone").attr("aria-controls", "#navbarNav-clone"), t(".navbar-" + _ + "-inner").find(".dropdown-toggle").addClass("dropdown-toggle-clone"), t(".navbar-collapse-clone").length > 0) {
            var T = t(".navbar-collapse-clone").attr("data-scroll-options") || '{ "theme": "light" }';
            null != T && (T = t.parseJSON(T), t(".navbar-collapse-clone").mCustomScrollbar(T))
        }
        "modern" == _ && t('<div class="navbar-show-modern-bg"></div>').insertAfter(".page-layout")
    }
    t(document).on("touchstart click", "body", function (e) {
        t(e.target).closest(".navbar-nav").length ? t(e.target).parents(".show-menu").length ? t(".close-menu").trigger("click") : t(e.target).parents("body").find(".header-language.open").length ? (t(".header-language").trigger("mouseleave"), t(".header-language").removeClass("show"), t(".header-language").children(".dropdown-menu").removeClass("show")) : t(e.target).parents("body").find(".header-cart-icon.open").length && (t(".header-cart-icon").trigger("mouseleave"), t(".header-cart-icon").removeClass("show"), t(".header-cart-icon").children(".dropdown-menu").removeClass("show")) : (t(e.target).closest(".header-language").length || (t(".header-language").trigger("mouseleave"), t(".header-language").removeClass("show"), t(".header-language").children(".dropdown-menu").removeClass("show")), t(e.target).closest(".header-cart-icon").length || (t(".header-cart-icon").trigger("mouseleave"), t(".header-cart-icon").removeClass("show"), t(".header-cart-icon").children(".dropdown-menu").removeClass("show")), t(".navbar-nav .dropdown").each(function () {
            var e = t(this);
            e.trigger("mouseleave"), e.removeClass("show"), e.children(".dropdown-menu").removeClass("show")
        }), t('[data-mobile-nav-style="classic"] .navbar-collapse').collapse("hide"), !t(e.target).closest(".theme-demos").length && t(".theme-demos").hasClass("active") && (t(".theme-demos").removeClass("active"), t("body").removeClass("overflow-hidden"))), !t(e.target).parents("header") && h && t(".header-language, .header-cart-icon").each(function () {
            var e = t(this);
            e.trigger("mouseleave"), e.removeClass("show"), e.children(".dropdown-menu").removeClass("show")
        }), (0 === t(e.target).closest(".search-form-wrapper").length || t(e.target).is(".form-wrapper")) && (t(".search-form-wrapper").removeClass("active-form"), t("body").removeClass("show-search-popup"))
    }), t('[data-mobile-nav-style="classic"] .navbar-collapse.collapse').on("show.bs.collapse", function () {
        t("body").hasClass("navbar-collapse-show") || t("body").addClass("navbar-collapse-show")
    }).on("hide.bs.collapse", function () {
        t("body").hasClass("navbar-collapse-show") && t("body").removeClass("navbar-collapse-show")
    }), t(".navbar-collapse-clone").on("show.bs.collapse", function () {
        if (t("body").hasClass("navbar-collapse-show")) t(".navbar-modern-inner").length > 0 && setTimeout(function () {
            t(".navbar-show-modern-bg").css("background", "")
        }, 600), t(".navbar-full-screen-menu-inner").length > 0 && setTimeout(function () {
            t(".navbar-full-screen-menu-inner").css("background", "")
        }, 600); else {
            if (t("body").addClass("navbar-collapse-show"), t("html").addClass("overflow-hidden"), t("body").attr("data-mobile-nav-bg-color") && t(".navbar-modern-inner").length > 0) {
                var e = t("body").attr("data-mobile-nav-bg-color");
                t(".navbar-show-modern-bg").css("background", e)
            }
            t("body").attr("data-mobile-nav-bg-color") && t(".navbar-full-screen-menu-inner").length > 0 && (e = t("body").attr("data-mobile-nav-bg-color"), t(".navbar-full-screen-menu-inner").css("background", e))
        }
        var a = R(), o = z();
        t(".navbar-modern-inner").length > 0 || t(".navbar-full-screen-menu-inner").length > 0 ? t(this).css("max-height", o) : t(this).css("max-height", o - a)
    }).on("hide.bs.collapse", function () {
        t("body").hasClass("navbar-collapse-show") && (t("body").removeClass("navbar-collapse-show"), t("html").removeClass("overflow-hidden"))
    }), t(".menu-toggle").each(function (e) {
        var a = t(this);
        a.addClass("collapsed").attr({
            "data-bs-toggle": "collapse",
            "data-bs-target": "#sub-menu-" + e
        }), a.parent().find(".sub-menu-item").attr("id", "sub-menu-" + e).addClass("collapse")
    }), t(".left-sidebar-wrapper").length > 0 && t(".left-sidebar-wrapper .left-sidebar-nav").stick_in_parent({
        recalc: 1,
        bottoming: !1
    }), t(document).on("click", ".menu-list > .menu-list-item > .menu-toggle", function () {
        t(".sub-menu-item").each(function () {
            t(this).collapse("hide")
        }), t(".left-sidebar-wrapper .left-sidebar-nav").parents("body").addClass("left-classic-mobile-menu"), setTimeout(function () {
            t(".left-sidebar-wrapper").trigger("sticky_kit:recalc")
        }, 500)
    }), t(document).on("click", ".sub-menu-item > .menu-list-item > .menu-toggle", function (e) {
        e.preventDefault(), t(this).parent().find(".sub-menu-item");
        var a = t(this).attr("data-bs-target");
        t(this).parent().parent(".sub-menu-item").find(".sub-menu-item").each(function () {
            var e = t(this);
            e.parent().find(".menu-toggle").attr("data-bs-target") != a && e.collapse("hide")
        }), t(".left-sidebar-wrapper .left-sidebar-nav").parents("body").addClass("left-classic-mobile-menu"), setTimeout(function () {
            t(".left-sidebar-wrapper").trigger("sticky_kit:recalc")
        }, 500)
    }), t(document).on("click", "#mobileToggleSidenav", function (e) {
        e.preventDefault(), t(this).closest("nav").toggleClass("sidemenu-open")
    });
    var O = !1;

    function D() {
        var e = t(window).scrollTop(), a = t(".navbar-nav li a");
        a.each(function () {
            var o = t(this), i = o.attr("href").indexOf("#");
            if (i > -1) {
                var n = o.attr("href").substring(i);
                if ("" != n && "#" != n && t(n).length > 0) {
                    var r = t(o.attr("href"));
                    r.position().top <= e + 60 && r.position().top + r.height() > e + 60 && (a.removeClass("active"), o.addClass("active")), e < 1 && o.removeClass("active")
                }
            }
        });
        var o = 0, n = 0;
        t("nav").length > 0 && (o = t("nav").outerHeight()), t(".top-bar").length > 0 && (n = t(".top-bar").outerHeight());
        var s = o + n;
        if (t("header").hasClass("no-sticky") || (e >= s ? (t("header").addClass("sticky"), t(".header-with-topbar .top-bar").is(":hidden") || (t(".header-with-topbar .top-bar").css({top: "-" + n + "px"}), t(".header-with-topbar .fixed-top").css({top: "0px"}))) : e <= s && (t(".header-with-topbar .top-bar").css({top: "0px"}), t(".header-with-topbar .fixed-top").css({top: n + "px"}), t("header").removeClass("sticky"), t("header").hasClass("sticky") || setTimeout(function () {
            U()
        }, 200))), t("nav.header-always-fixed-scroll").length <= 0) {
            var l = e;
            l > r ? (l -= 1, t(".sticky").removeClass("header-appear"), t(".dropdown.on").removeClass("on").removeClass("show").find(".dropdown-menu").fadeOut(100)) : t(".sticky").addClass("header-appear"), (r = l) <= o && t("header").removeClass("header-appear")
        }
        e >= 200 && N() > i && (t(".navbar-collapse").hasClass("show") && t(".navbar-collapse").removeClass("show"), t("body").hasClass("navbar-collapse-show") && (t("body").removeClass("navbar-collapse-show"), t("html").removeClass("overflow-hidden"))), e > 150 ? (t(".scroll-top-arrow").fadeIn("300"), !t(".show-theme-demos").length && N() > 1199 && t(".theme-demos").fadeIn("300")) : t(".scroll-top-arrow").fadeOut("300")
    }

    function j(e) {
        return e < 10 ? "0" + e.toString() : e.toString()
    }

    function N() {
        return t(window).width()
    }

    function z() {
        return t(window).height()
    }

    function A() {
        document.querySelectorAll(".swiper-container:not( .instafeed-wrapper )").forEach(function (e, a) {
            var o = t(e), i = o.attr("data-slider-options");
            if (null != i) {
                i = t.parseJSON(i);
                var r = o.attr("data-slider-md-direction");
                if ("" != r && null != r) {
                    var s = "" != i.direction && null != i.direction ? i.direction : r;
                    i.on = {
                        init: function () {
                            N() <= n ? this.changeDirection(r) : this.changeDirection(s), this.update()
                        }, resize: function () {
                            N() <= n ? this.changeDirection(r) : this.changeDirection(s), this.update()
                        }
                    }
                }
                if ("" != i.thumbs && null != i.thumbs) {
                    var l = o.attr("data-thumb-slider-md-direction");
                    if ("" != l && null != l) {
                        var c = "" != i.thumbs.swiper.direction && null != i.thumbs.swiper.direction ? i.thumbs.swiper.direction : l;
                        i.thumbs.swiper.on = {
                            init: function () {
                                N() <= n ? this.changeDirection(l) : this.changeDirection(c), this.update()
                            }, resize: function () {
                                N() <= n ? this.changeDirection(l) : this.changeDirection(c), this.update()
                            }, click: function () {
                                this.activeIndex == this.clickedIndex ? this.slidePrev() : this.slideNext()
                            }
                        }
                    }
                }
                var p = o.attr("data-slider-number-pagination");
                "" != p && null != p && (i.on.slideChange = function () {
                    t(".swiper-pagination-current").length > 0 && t(".swiper-pagination-current").html(j(this.realIndex + 1)), t(".swiper-pagination-total").length > 0 && t(".swiper-pagination-total").html(j(this.slides.length - 2))
                });
                var h = o.attr("data-slide-change-on-click");
                "" != h && null != h && (i.on = {
                    click: function () {
                        this.activeIndex > this.clickedIndex ? this.slidePrev() : this.activeIndex < this.clickedIndex && this.slideNext()
                    }
                });
                var u = o.attr("data-thumbs");
                "" != u && null != u && null != (u = t.parseJSON(u)) && (i.pagination.renderBullet = function (e, t) {
                    return '<span class="' + t + '" style="background-image: url( ' + u[e] + ' )"></span>'
                });
                var m = new Swiper(e, i);
                d.push(m)
            }
        })
    }

    function B() {
        for (var e = 0; e < d.length; e++) {
            var t = d[e], a = t.$el.attr("data-slider-destroy");
            "" != a && null != a && (N() <= a ? t.destroy(!1, !0) : t.destroyed && (d.splice(e, 1), A()))
        }
    }

    function L() {
        setTimeout(function () {
            for (var e = 0; e < d.length; e++) d[e].update()
        }, 500)
    }

    function q(e) {
        e.find(".grid-item").removeClass("animate__animated").css("visibility", ""), t(".wow").length > 0 && e.find(".grid-item").each(function () {
            var e = t(this);
            p.removeBox(this), e.css("-webkit-animation", "none"), e.css("-moz-animation", "none"), e.css("-ms-animation", "none"), e.css("animation", "none")
        })
    }

    function M(e, t) {
        for (var a = 0; a < e.length; a++) t && q(e[a]), e[a].data("isotope") && e[a].isotope("layout")
    }

    function H() {
        (t(".overlap-section").length > 0 || t(".overlap-section-one-fourth").length > 0 || t(".overlap-section-three-fourth").length > 0) && N() >= 768 ? t(".overlap-section, .overlap-section-one-fourth, .overlap-section-three-fourth").each(function () {
            var e = t(this);
            setTimeout(function () {
                e.imagesLoaded(function () {
                    var t = e.closest("section"), a = parseInt(t.css("padding-top")), o = e.find("*").outerHeight(),
                        i = o + a;
                    i = e.hasClass("overlap-section-one-fourth") ? o / 4 - i : e.hasClass("overlap-section-three-fourth") ? 3 * o / 4 - i : o / 2 - i, e.css("margin-top", i);
                    var n = t.prev("section.overlap-height"), r = n.find(".overlap-gap-section");
                    n.imagesLoaded(function () {
                        if (r.length > 0) {
                            var e = r.outerHeight() + (Math.abs(i) - a);
                            r.parents("section.overlap-height").height(e)
                        }
                    })
                })
            }, 10)
        }) : (t(".overlap-height").height(""), t(".overlap-section, .overlap-section-one-fourth, .overlap-section-three-fourth").css("margin-top", ""))
    }

    function W(e) {
        t(".overlap-section-bottom").length > 0 && N() >= 768 ? t(".overlap-section-bottom").each(function () {
            var a = t(this), o = a.find(".instafeed-wrapper").length > 0 ? e : 10;
            setTimeout(function () {
                a.imagesLoaded(function () {
                    var e = a.outerHeight(), t = e / 2 - e;
                    a.parents("section").next(".overlap-gap-section-bottom").css("margin-top", t), a.parents("section").next(".overlap-gap-section-bottom").css("padding-top", e)
                })
            }, o)
        }) : (t(".overlap-gap-section-bottom").css("margin-top", ""), t(".overlap-gap-section-bottom").css("padding-top", ""))
    }

    function J() {
        window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) || (t("[data-parallax-background-ratio]").each(function () {
            var e = t(this).attr("data-parallax-background-ratio") || .5;
            t(this).parallax("50%", e)
        }), t("[data-parallax-layout-ratio]").each(function () {
            var e = t(this).attr("data-parallax-layout-ratio") || 1;
            t(this).parallaxImg(e)
        }))
    }

    function R() {
        var e = 0;
        return t("header nav.navbar").length > 0 && (e += t("header nav.navbar").outerHeight()), t(".top-bar").length > 0 && (e += t(".top-bar").outerHeight()), t(".sidebar-nav-action").length > 0 && N() <= i && (e += t(".sidebar-nav-action").outerHeight()), t(".side-menu-header").length > 0 && N() <= i && (e += t(".side-menu-header").outerHeight()), e
    }

    function U() {
        var e = R();
        t(".navbar").hasClass("no-sticky") || !t(".navbar").hasClass("top-space") && !t(".navbar").hasClass("mobile-top-space") ? t("body").css("padding-top", "") : t("body").css("padding-top", e + "px"), t(".mobileoff-fullscreen-top-space").length >= 0 && N() > 1023 && t(".mobileoff-fullscreen-top-space").css("height", z() - e + "px"), t(".fullscreen-top-space").length >= 0 && t(".fullscreen-top-space").css("height", z() - e + "px"), (t(".sidebar-nav-action").length > 0 || t(".side-menu-header").length > 0) && (N() <= i ? t("body").css("padding-top", e + "px") : t("body").css("padding-top", ""))
    }

    function F() {
        var e = t(".full-screen"), a = z(), o = R();
        N() <= i ? (t("header nav.navbar").addClass("mobile-top-space"), t(".sidebar-nav-action").addClass("mobile-top-space"), t(".side-menu-header").addClass("mobile-top-space")) : (t("header nav.navbar").removeClass("mobile-top-space"), t(".sidebar-nav-action").removeClass("mobile-top-space"), t(".side-menu-header").removeClass("mobile-top-space")), e.parents("section").imagesLoaded(function () {
            t("section:first.full-screen, section:first .full-screen").length > 0 && (t(".top-space").length > 0 || t(".mobile-top-space").length > 0) ? t("section:first.full-screen, section:first .full-screen").css("height", a - o) : t("header nav.navbar").hasClass("top-space") || t("header nav.navbar").hasClass("mobile-top-space") ? (a -= t("header nav.navbar").outerHeight(), e.css("height", a)) : e.css("height", a)
        })
    }

    function G() {
        if (t(".footer-sticky").length > 0 && t(".footer-sticky").imagesLoaded(function () {
            var e = t(".footer-sticky").outerHeight();
            t(".main-content").css({"margin-bottom": e})
        }), t(".box-layout").length > 0 && t(".footer-sticky").length > 0) {
            var e = t(".box-layout"), a = e.width();
            e.find(".footer-sticky").css({margin: "0 auto", width: a, "max-width": a})
        }
    }

    function E(e, t, a) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3);
        var i = 0 != a && "" != a ? o.toUTCString() : 0;
        document.cookie = e + "=" + t + ";expires=" + i + ";path=/"
    }

    function $() {
        J(), U(), t(".vertical-counter").each(function () {
            var e = t(this), a = e.css("font-size");
            e.css("height", a), e.find(".vertical-counter-number").each(function () {
                var e = t(this), a = e.find("li").height();
                e.height(a)
            })
        })
    }

    function V(e) {
        var a = e.parents("form"), o = a.attr("action"), i = a.find(".form-results"),
            n = a.find('[name="redirect"]').val();
        "" != o && null != o && (e.addClass("loading"), t.ajax({
            type: "POST",
            url: o,
            data: a.serialize(),
            success: function (o) {
                console.log(o), e.removeClass("loading"), "" != n && null != n ? window.location.href = n : (null != o && (o = t.parseJSON(o)), a.find("input[type=text],input[type=email],input[type=tel],input[type=password],textarea").each(function () {
                    t(this).val(""), t(this).removeClass("error")
                }), a.find(".g-recaptcha").removeClass("error"), a.find("input[type=checkbox],input[type=radio]").prop("checked", !1), a.find(".g-recaptcha").length > 0 && grecaptcha.reset(), a.find("input[name=action],input[name=g-recaptcha-response]").remove(), i.removeClass("alert-success").removeClass("alert-danger").hide(), i.addClass(o.alert).html(o.message), i.removeClass("d-none").fadeIn("slow").delay(4e3).fadeOut("slow"))
            }
        }))
    }

    t(document).on("click", ".navbar-toggle", function () {
        N() > i && (O ? !t(".navbar-collapse").has(e.target).is(".navbar-collapse") && t(".navbar-collapse ul").hasClass("show") && (t(".navbar-collapse").find("a.dropdown-toggle").addClass("collapsed"), t(".navbar-collapse").find("ul.dropdown-menu").removeClass("show"), t(".navbar-collapse a.dropdown-toggle").removeClass("active")) : (O = !0, setTimeout(function () {
            O = !1
        }, 500), t("body").addClass("show-menu")))
    }), t(".dropdown").on("mouseenter touchstart", function (e) {
        var a = t(this);
        a.siblings(".dropdown").removeClass("open"), a.parents(".navbar-nav").siblings(".navbar-nav").find(".dropdown").removeClass("open"), a.addClass("open"), N() > i && (function (e) {
            var t = N();
            if (e.hasClass("simple-dropdown")) {
                s = e, l = e.find("a.nav-link");
                var a = t - 30 - (e.offset().left + e.children(".dropdown-menu").outerWidth());
                a < 0 && e.children(".dropdown-menu").css("left", a)
            }
            if (e.parent().hasClass("dropdown-menu") && e.parents(".simple-dropdown")) {
                var o = 0, i = 0, n = 0, r = 0;
                o = e.outerWidth() - l.outerWidth(), e.find(".dropdown-menu").each(function () {
                    var t = [];
                    e.find("li").hasClass("dropdown") ? (o += e.outerWidth(), e.find("li.dropdown").each(function () {
                        var a = e.closest(".dropdown-menu");
                        t.push(a.outerWidth())
                    }), i = n + Math.max.apply(Math, t), n = i, o += i, r += 1) : r < 1 && (o += e.outerWidth())
                });
                var c = t - (s.offset().left + s.outerWidth());
                if (o > c) {
                    if (e.find(".dropdown-menu").length > 0) {
                        var d = e.position().top, p = e.find(".dropdown-menu"), h = d + p.outerHeight() + R(), u = z();
                        h > u && p.css("top", "-" + (h - u) + "px")
                    }
                    e.addClass("menu-left")
                }
            }
        }(a), t(e.target).siblings(".dropdown-menu").length && e.preventDefault())
    }).on("mouseleave", function (e) {
        var a = t(this);
        a.removeClass("menu-left"), a.removeClass("open")
    }), t(document).on("click", ".gdpr-policy-button", function () {
        t(".gdpr-wrapper").fadeOut().remove(), E("litho-gdpr-policy", "shown", 30)
    }), t("body:not( .landing )").append(), t(document).on("click", ".all-demo", function () {
        var e = t(this).parents(".theme-demos");
        if (e.hasClass("active")) e.removeClass("active"), t("body").removeClass("overflow-hidden"); else {
            e.addClass("active"), t("body").addClass("overflow-hidden");
            var a = e.find(".demos-wrapper"), o = a.attr("data-scroll-options") || '{ "theme": "dark" }';
            null != o && (o = t.parseJSON(o), a.mCustomScrollbar(o))
        }
    }), t("img:not([data-at2x])").each(function () {
        t(this).attr("data-no-retina", "")
    }), t(window).on("load", function () {
        J(), t(".page-loader").length > 0 && t(".page-loader").fadeOut(), M(c, !1), L(), G(), t(".rev-nav-ares-effect").length > 0 && setTimeout(function () {
            t(".rev-nav-ares-effect .ares").css({opacity: "1"})
        }, 2e3), H(), W()
    }), t(window).resize(function () {
        F(), B(), L(), G(), setTimeout(function () {
            M(c, !0)
        }, 300), setTimeout(function () {
            $(), H(), W(100), D()
        }, 500)
    }), t(window).on("orientationchange", function (e) {
        t(".close-menu").trigger("click"), t(window).trigger("closemenu")
    }), t(window).on("closemenu", function (e) {
        t(".dropdown").each(function () {
            var e = t(this);
            e.trigger("mouseleave"), e.removeClass("show"), e.children(".dropdown-menu").removeClass("show")
        }), t(".navbar-collapse").hasClass("show") && t(".navbar-collapse").removeClass("show"), t("body").hasClass("navbar-collapse-show") && (t("body").removeClass("navbar-collapse-show"), t("html").removeClass("overflow-hidden")), t(".search-close").trigger("click"), t(".theme-demos").hasClass("active") && t(".all-demo").trigger("click")
    }), t(window).on("scroll", D)
}(jQuery);