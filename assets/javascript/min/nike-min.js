function switchActive(){$(".active").removeClass("active"),$(this).addClass("active"),$(".bigImage").attr("src",$(this).attr("data-tag"))}$(".nikeList > li:nth-of-type(n+2)").hover(switchActive),$(".nikeList > li:nth-of-type(n+2)").click(switchActive),$("document").ready(function(){function s(){1==i?(e.removeClass("is-open"),e.addClass("is-closed"),t.removeClass("open"),t.addClass("close"),i=!1):(e.removeClass("is-closed"),e.addClass("is-open"),t.removeClass("close"),t.addClass("open"),i=!0)}var e=$("#hamburger"),i=!0,t=$(".menu");e.click(function(e){s(e)})});