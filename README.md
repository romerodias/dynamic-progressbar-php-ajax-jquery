# dynamic-progressbar-php-ajax-jquery
This is an example to implementing a dynamic progress bar using Ajax, PHP and jQuery.

# Usage

Let's create a progress bar for a div id="sla-bar"

Create a simple progress bar. By default the plugin consider that you have a php script named pb.php
```
$("#sla-bar").pb();
```

Create a progress bar passing a custom url
```
$("#sla-bar").pb({
	url: "sla/getvalue.php"
});
```

Create a progress bar passing the url and the time interval to search for a new value
```
$("#sla-bar").pb({
	url: "sla/getvalue.php",
	interval: 1000
});
```

Create a progress bar using a custom background color
```
$("#sla-bar").pb({
	url: "sla/getvalue.php",
	interval: 1000,
	barColor: [{
		"MIN": 0,  "MAX": 50, "BGCOLOR": "green",  "FONTCOLOR": "white" 
	},{
		"MIN": 51, "MAX": 100, "BGCOLOR": "orange",    "FONTCOLOR": "black" 
	}]
});
```

# Demo
http://rdtecnologia.com.br/dynamic-progressbar-php-ajax-jquery/
