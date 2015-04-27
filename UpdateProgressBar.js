/**
 * JQuery plugin to create a dynamic progress bar based on ajax 
 *
 * @author Romero Dias
 */
 
 
 /**
  * <p>Options</b>
  * barColor : is an json object to create style based on values
  * url : the url to get the data
  * interval : interval value to ajax search for a new value
  */
$.extend($.fn, {
	pb: function(options) {
		
			if(!options) 
				options = {};
			
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
				url: "sla.php",
				interval: 2000
			};
			options = $.extend(defaultParameters, options);
		
		
			/* Manipula as cores da barra */
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
			

			/* Atualizar valor da barra de progresso */
			var updateValue = function(data) {
				if(data){
					data = $.parseJSON(data);
					console.log(me);
					var bar = me;
					var time = data.SLA;
					//bar.style.width = time + "px";
					$(bar).html(time + "%");
					$(bar).css({ "width" : time + "px"});
					
					defineColor(time, bar);
					
					/* Quando atigir 100 para de rodar a função interval*/
					if(time >= 100)
						clearInterval(interval);
				}
			}
		
			/* Atualiza a barra de progresso de acordo com resultado PHP (sla.php)*/
			var updateBar = function() {
				$.ajax({
					url: options.url,
					method: 'post',
					type: 'json',
					success: updateValue
				});
			}
			
			/* Chama a função updateBar() por um intervalo de 2 segundos */
			var interval = setInterval(function(){ updateBar(); },options.interval);		
		}
});
 
 

 
$(document).ready(function() {
	$("#sla-bar").pb();
});
