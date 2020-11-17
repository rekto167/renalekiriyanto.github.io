$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    },1250,'easeInOutCirc');
   
    e.preventDefault();
   });

//    about
$(window).on('load', function() {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});
// parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });

    // portfolio
    if( wScroll > $('.portfolio').offset().top - 300 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });

    }
    if( wScroll < $('.portfolio').offset().top - 300 ) {
        $('.portfolio .thumbnail').removeClass('muncul');
    }
}) ;