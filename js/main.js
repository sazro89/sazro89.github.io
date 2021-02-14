$(window).on('scroll', function() {
    $('.section').each(function() {
        if($(window).scrollTop() >= $(this).offset().top - $(window).height() / 2) {
            let id = $(this).attr('id');
            $('.navigation a').removeClass('active');
            $('.navigation a[href=#' + id + ']').addClass('active');
        }
    });
});