(function($){
    $.fn.extend({
        center: function (options) {
            var options =  $.extend({ // Default values
                position:'absolute', //Position (to accomodate relative positions)
                inside:this.parent(), // element to center relative to. If this element is positioned statically, it will be changed to a relative position
                transition: 0, // millisecond, transition time
                minX:0, // pixel, minimum left element value
                minY:0, // pixel, minimum top element value
                withScrolling:false, // boolean, add current scroll distance to position, usually to center an object in view
                vertical:true, // boolean, center vertical
                horizontal:true // boolean, center horizontal
            }, options);
            return this.each(function() {
                var props = {position:options.position};
                $(this).css(props);
                if(options.inside.css("position") === "static") options.inside.css("position","relative");
                if (options.vertical) {
                    var top = ($(options.inside).height() - $(this).outerHeight()) / 2;
                    if (options.withScrolling) top += $(options.inside).scrollTop() || 0;
                    top = Math.max(top, options.minY);
                    $.extend(props, {top: top+'px'});
                }
                if (options.horizontal) {
                    var left = ($(options.inside).width() - $(this).outerWidth()) / 2;
                    if (options.withScrolling) left += $(options.inside).scrollLeft() || 0;
                    left = Math.max(left, options.minX);
                    $.extend(props, {left: left+'px'});
                }
                if (options.transition > 0) 
                    $(this).animate(props, options.transition);
                else 
                    $(this).css(props);
                return $(this);
            });
        }
    });
})(jQuery);// JavaScript Document