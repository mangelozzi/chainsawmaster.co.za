$(document).ready(function() {
    $(window).scroll(function() {
        navigation.scroll();
    });
});
 
var navigation = {
    settings : {
        offset: 127,
    },
    scroll : function() {
        var scroll_top = $(window).scrollTop(); // current vertical position from the top
 
        if( scroll_top > navigation.settings.offset ) {
            $('nav').css({ 'position': 'fixed', 'top': '0' });
        } else {
            $('nav').css({ 'position': 'absolute', 'top': navigation.settings.offset + 'px' });
        }
    }
};


