# dynamic-progressbar-php-ajax-jquery
This is an example to implementing a dynamic progress bar using Ajax, PHP and jQuery.

# Using

Let's create a progress bar for a div id="sla-bar"

Create a simple progress bar
```
$("#sla-bar").pb();
```

Create a progress bar passing the url
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



# Demo
http://rdtecnologia.com.br/dynamic-progressbar-php-ajax-jquery/