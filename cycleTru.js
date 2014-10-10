(function($) {

	$.cycleThru = {
		defaults: {
			delay: 3000,

		}
	}
    $.fn.extend({
        cycleThru:function(config) {
            var config = $.extend({}, $.cycleThru.defaults, config);
			return this.each(function() {
				var delay = config.delay;
				var ulid = $(this).attr("id");
				var j = 0;
				var jmax = $(this).children("li").length -1;

				function cyclee(){
					$("ul#" + ulid + " li:eq(" + j + ")")
						.animate({"opacity" : "1"} ,400)
						.animate({"opacity" : "1"}, delay)
						.animate({"opacity" : "0"}, 400, function(){
							(j == jmax) ? j=0 : j++;
							cyclee();
					});
				};
				cyclee();
            })
        }
    })
})(jQuery);
