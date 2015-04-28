function switchActive(){
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".bigImage").attr("src",$(this).attr('data-tag'));
}
$('.nikeList > li:nth-of-type(n+2)').hover(
    switchActive
);

$('.nikeList > li:nth-of-type(n+2)').click(
    switchActive
);

$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;
    var trigger2 = $('.menu')

    trigger.click(function (trigger2) {
        burgerTime(trigger2);
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            trigger2.removeClass('open');
            trigger2.addClass('close');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            trigger2.removeClass('close');
            trigger2.addClass('open');
            isClosed = true;
        }
    }
});
