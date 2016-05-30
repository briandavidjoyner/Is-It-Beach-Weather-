(function(){
	var beachweather = {};
	window.beachweather = beachweather;
	// Update Site
	function text_update(text){
		jQuery('#text').css('font-size','2em');
		jQuery('#text').text(text);
		jQuery('#container').fadeIn('slow');

	}
	// Get Weather - located in responses.js
	function get_weather(){
			jQuery.get('http://api.openweathermap.org/data/2.5/weather',{

				lat : beachweather.latitude,
				lon : beachweather.longitude,
				units : 'imperial',
				appid: '05c1e42d2c46111dc72bf2bb728125fc'

			}, function(data){
				beachweather.weather = data;
				is_it_beach_weather(function(text){
					text_update(text);
					});
				}
			);
	}
	// Get Geolocation
	function geolocation(){
			$.getJSON('http://ipinfo.io', function(data){
					if (data && data.city.length > 0){
						var d = data.loc.split(',');
			  			beachweather.latitude = d[0],
			  			beachweather.longitude = d[1],
			  			beachweather.ip_data = data;
			  			get_weather();
		  			} else {
		  				jQuery('#text').text('Looks Like We Can\'t Find You... Bummer.');
		  				jQuery('#container').fadeIn();
		  			} 
			});
	}
	// Click Listernerclick_listenter
	 function click_listenter(){
	 		jQuery('#button').click(function(){
				jQuery('#button_text, #container').fadeOut("slow", function(){geolocation();});
	 		});
	 	}
	click_listenter();
})();