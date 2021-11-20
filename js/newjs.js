/*$.fn.changeColor =function(c){
    $(this).css('color',c);
}*/
(function($){
    $.fn.changeColor =function(c){
        $(this).css('color',c);
        return(this);
    }
}(jQuery));