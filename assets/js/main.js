window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$('.nav-link').click(function(e) {
    let sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top-50
        }, 800);
    e.stopPropagation();
    e.preventDefault();
});


$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    if ($(this).scrollTop() > 50) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

$('.scrollToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
});

$('.navbar-collapse .nav-link').click(function() {
	$('.navbar-collapse').toggleClass('show');
});

$('.nav-pills a').click(function(){
   $(this).tab('show');
})