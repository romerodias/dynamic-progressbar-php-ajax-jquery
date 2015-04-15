$(document).ready(function() {

	/* Configurações de cores da barra */
	var barColor = [
		{"MIN": 0,  "MAX": 30, 	"BGCOLOR": "green",  "FONTCOLOR": "white" },
		{"MIN": 31, "MAX": 60, 	"BGCOLOR": "yellow", "FONTCOLOR": "black" },
		{"MIN": 60, "MAX": 100, "BGCOLOR": "red",    "FONTCOLOR": "white" }
	];
	
	/* Manipula as cores da barra */
	var defineColor = function(v, element) {
		var color = {};
		$.each(barColor, function(k, item){
			if(v >= item.MIN && v <= item.MAX)
				color = item;
		});
		element.style.color = color.FONTCOLOR;
		element.style.backgroundColor = color.BGCOLOR;
	}

	/* Atualizar valor da barra de progresso */
	var updateValue = function(data) {
		if(data){
			data = $.parseJSON(data);
			var bar = document.getElementById("sla-bar");
			var time = data.SLA;
			bar.style.width = time + "px";
			bar.innerHTML = time + "%";
			defineColor(time, bar);
			
			/* Quando atigir 100 para de rodar a função interval*/
			if(time >= 100)
				clearInterval(interval);
		}
	}
	
	/* Atualiza a barra de progresso de acordo com resultado PHP (sla.php)*/
	var updateBar = function() {
		$.ajax({
			url: 'sla.php',
			method: 'post',
			type: 'json',
			success: updateValue
		});
	}
	
	/* Chama a função updateBar() por um intervalo de 2 segundos */
	var interval = setInterval(function(){ updateBar(); }, 2000);
});
