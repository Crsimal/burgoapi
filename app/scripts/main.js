$(document).ready(function() {
    $('#menu-toggle').on('click',function() {
        $('#mainNav').slideToggle(800);
    });

    $('*[data-url]').on('click',function(e) {
        e.preventDefault();
        var element = $(this).attr('data-url');

        if (element == '#burgoinvert' || element == '#burgofonda' || element == '#burgoapi68' ) {
            if (element == '#burgoinvert') {
               $('#burgofonda').fadeOut('fast', function() {
                  $('#burgoapi68').fadeOut('fast', function() {
                    $(element).fadeIn(400);
                  });
               });
            } else if (element == '#burgofonda') {
               $('#burgoinvert').fadeOut('fast', function() {
                  $('#burgoapi68').fadeOut('fast', function() {
                    $(element).fadeIn(400);
                  });
               });
            } else {
                $('#burgoinvert').fadeOut('fast', function() {
                  $('#burgofonda').fadeOut('fast', function() {
                    $(element).fadeIn(400);
                  });
               });
            }

            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, 1000);

            
        } else {
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, 1000);
        }
     
    });
});