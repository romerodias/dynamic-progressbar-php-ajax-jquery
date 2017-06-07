/**
 * JQuery plugin to create a dynamic progress bar based on Ajax and jQuery 
 *
 * @author 	Romero Dias
 * @see 	http://rdtecnologia.com.br
 * @see		https://github.com/romerodias/dynamic-progressbar-php-ajax-jquery
 */
 
 
 /**
  * <p>Options</b>
  * 	barColor: is an json object to create style based on values
  * 	url 	: the url to get the data
  * 	interval: interval value to ajax search for a new value
  */
$.extend($.fn, {
	pb: function(options) {
		if(!options) options = {};
		var me = this;
		me.css({
			color: "white", backgroundColor: "white", "width" : "1px"
		});
		/* Default parameters */	
		var defaultParameters = {
			barColor: [{
				"MIN": 0,  "MAX": 30, 	"BGCOLOR": "green",  "FONTCOLOR": "white" 
			},{
				"MIN": 31, "MAX": 60, 	"BGCOLOR": "yellow", "FONTCOLOR": "black" 
			},{
				"MIN": 60, "MAX": 100, "BGCOLOR": "red",    "FONTCOLOR": "white" 
			}],
			url: "pb.php",
			interval: 2000
		};
		options = $.extend(defaultParameters, options);
		/* Handle the bar background colors */
		var defineColor = function(v, element) {
			var color = {};
			$.each(options.barColor, function(k, item){
				if(v >= item.MIN && v <= item.MAX)
					color = item;
			});
			element.css({
				color : color.FONTCOLOR,
				backgroundColor : color.BGCOLOR
			});
		}
		/* Update the bar value */
		var updateValue = function(data) {
			if(data){
				data = $.parseJSON(data);
				var bar = me;
				var time = data.SLA;
				$(bar).html(time + "%");
				$(bar).css({ "width" : time+"px"});
				defineColor(time, bar);
			}
		}
		/* Search for a value on backend*/
		var updateBar = function() {
			$.ajax({
				url: options.url,
				method: 'post',
				type: 'json',
				success: updateValue
			});
		}
		/* Invoke the bar update function for a specific time interval */
		var interval = setInterval(
			function(){ updateBar(); },
			options.interval
		);		
	}
);
