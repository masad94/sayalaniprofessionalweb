/* Code pen Example: https://codepen.io/bechster/pen/jgYzrq */
$('#myCarousel').carousel({
    interval: false
});

$('#carousel-thumbs').carousel({
    interval: false
});

$('[id^=carousel-selector-]').click(function () {
    var id_selector = $(this).attr('id');
    var id = parseInt(id_selector.substr(id_selector.lastIndexOf('-') + 1));
    $('#myCarousel').carousel(id);
});

if ($('#carousel-thumbs .carousel-item').length < 2) {
    $('#carousel-thumbs [class^=carousel-control-]').remove();
    $('.machine-carousel-container #carousel-thumbs').css('padding', '0 5px');
}

$('#myCarousel').on('slide.bs.carousel', function (e) {
    var id = parseInt($(e.relatedTarget).attr('data-slide-number'));
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-' + id + ']').addClass('selected');
});

$('#myCarousel').swipe({
    fallbackToMouseEvents: true,
    swipeLeft: function (e) {
        $('#myCarousel').carousel('next');
    },
    swipeRight: function (e) {
        $('#myCarousel').carousel('prev');
    },
    allowPageScroll: 'vertical',
    preventDefaultEvents: false,
    threshold: 75
});