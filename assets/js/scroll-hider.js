var b = $('html');

    $('.aside-bar-scroller').hover(function() {
        var s = b.scrollTop();    
        b.css('overflow', 'hidden');
        b.scrollTop(s);
    }, function() {
        var s = b.scrollTop();   
        b.css('overflow', 'auto');
        b.scrollTop(s);
    });