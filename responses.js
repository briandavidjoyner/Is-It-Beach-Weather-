function is_it_beach_weather(callback){
	var current_temp = parseInt(beachweather.weather.main.temp),
		clouds = beachweather.weather.clouds.all,
		wind = parseInt(beachweather.weather.wind.speed),
		city = beachweather.ip_data.city,
		text = '',
		callback = callback,
		background_image = '';
		alert(city);
			
	// Temperature 80
	if ( current_temp > 75 ){

		if ( clouds > 50 ){
			//background_image = 'http://www.publicdomainpictures.net/pictures/70000/velka/beach-and-cloudy-sky.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s kinda beach weather... it\'s '+current_temp+'F out there, but cloudy and there\'s a stiff '+wind+' MPH wind.  Sorry Bro.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s kinda beach weather... it\'s '+current_temp+'F out there, but cloudy and a bit windy.  Sorry Bro.';
			} else {
				text = 'You\'re near '+city+'!  It\'s kinda beach weather... it\'s '+current_temp+'F out there, but cloudy.  Sorry Bro.';
			}

		} else if ( clouds > 34 ){
			//background_image = 'http://archwall.xyz/wp-content/uploads/2015/09/bridges-flags-waiving-pier-clouds-sea-beach-wind-free-desktop-background.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s kinda beach weather... it\'s '+current_temp+'F out there, but a bit cloudy and there\'s a stiff '+wind+' MPH wind.  Sorry Bro.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s kinda beach weather... it\'s '+current_temp+'F out there, but a bit cloudy and a bit windy.  Sorry Bro.';
			} else {
				text = 'You\'re near '+city+'!  It\'s kinda beach weather... it\'s '+current_temp+'F out there, but a bit cloudy.  Sorry Bro.';
			}

		} else {
			//background_image = 'http://archwall.xyz/wp-content/uploads/2015/09/bridges-flags-waiving-pier-clouds-sea-beach-wind-free-desktop-background.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s almost beach weather bro! It\'s '+current_temp+'F out there, but there\'s a stiff '+wind+' MPH wind.  Sorry Bro.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s beach weather bro! It\'s '+current_temp+'F out there with a few clouds and a gentle breeze.  Get out there!';
			} else {
				text = 'You\'re near '+city+'!  It\'s beach weather bro! Right now it\'s '+current_temp+'F out there with clear skies.  Head on out!';
			}
		}

	// Temperature 65 - 79
	} else if ( current_temp > 65 ){

		if ( clouds > 50 ){
			//background_image = 'http://www.rifuture.org/wp-content/uploads/east-beach-dune.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there... plus it\'s cloudy and there\'s a stiff '+wind+' MPH wind.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there... plus it\'s cloudy and there\'s a light '+wind+' MPH wind.';
			} else {
				text = 'You\'re near '+city+' bro!  It\'s not beach weather... it\'s '+current_temp+'F out there... plus it\'s cloudy.';
			}

		} else if ( clouds > 34 ){
			//background_image = 'http://www.rifuture.org/wp-content/uploads/east-beach-dune.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s almost weather bro... it\'s '+current_temp+'F out there and kinda cloudy, but there\'s a stiff '+wind+' MPH wind.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s almost beach weather bro... it\'s '+current_temp+'F out there, kinda cloudy, and there\'s a light '+wind+' MPH wind.';
			} else {
				text = 'You\'re near '+city+'!  It\'s so close to being beach weather bro! it\'s '+current_temp+'F out there with a few clouds';
			}

		} else {
			//background_image = 'http://www.rifuture.org/wp-content/uploads/east-beach-dune.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It is kinda beach weather... it\'s '+current_temp+' F out there, but there\'s a stiff '+wind+' MPH wind.  Sorry Bro.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It is almost beach weather... it\'s '+current_temp+' F out there with a nice breeze.  Do you dare to head out?';
			} else {
				text = 'You\'re near '+city+'!  It\'s so close to being beach weather... it\'s '+current_temp+' F out there, not a cloud in the sky, and just a few gentle breezes.';
			}

		}

	// Temperature 32 - 64
	} else if ( current_temp > 32 ){

		if ( clouds > 50 ){
		//background_image = 'http://1.bp.blogspot.com/-0nUuPFd_Pgk/Tupbein4b1I/AAAAAAAACBs/8RV5eMzGXRI/s1600/Winter+Beach+View.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there... plus it\'s cloudy and there\'s a chilly '+wind+' MPH wind.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there... plus it\'s cloudy and there\'s a light '+wind+' MPH wind.';
			} else {
				text = 'You\'re near '+city+' bro!  It\'s not weather bro... it\'s '+current_temp+'F out there and it\'s cloudy.';
			}

		} else if ( clouds > 34 ){
		//background_image = 'http://1.bp.blogspot.com/-0nUuPFd_Pgk/Tupbein4b1I/AAAAAAAACBs/8RV5eMzGXRI/s1600/Winter+Beach+View.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there, kinda cloudy, and there\'s a chilly '+wind+' MPH wind.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there, kinda cloudy, and there\'s a light '+wind+' MPH wind.';
			} else {
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there and kinda cloud\'y.';
			}

		} else {
		//background_image = 'http://1.bp.blogspot.com/-0nUuPFd_Pgk/Tupbein4b1I/AAAAAAAACBs/8RV5eMzGXRI/s1600/Winter+Beach+View.jpg';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there and there\'s a chilly '+wind+' MPH wind.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there and there\'s a light '+wind+' MPH wind.';
			} else {
				text = 'You\'re near '+city+'!  It\'s not beach weather bro... it\'s '+current_temp+'F out there. But at least there are clear skies and no wind.';
			}

		}

	// Temperature Less Than 32
	} else {

		if ( clouds > 50 ){
			//background_image = 'http://www.philip-lutzak.com/weather/SEA%20ICE%20FROM%20VERSOIX/05%20cars%20trees.JPG';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there... plus it\'s cloudy and there\'s a cold '+wind+' MPH wind.  Bummer.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there... plus it\'s cloudy and there\'s a light '+wind+' MPH wind.';
			} else {
				text = 'You\'re near '+city+' bro!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there and it\'s cloudy.  Have you considered moving?';
			}

		} else if ( clouds > 34 ){
			//background_image = 'http://www.philip-lutzak.com/weather/SEA%20ICE%20FROM%20VERSOIX/05%20cars%20trees.JPG';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there, kinda cloudy, and there\'s a chilly '+wind+' MPH wind.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there, kinda cloudy, and there\'s a light '+wind+' MPH wind.';
			} else {
				text = 'You\'re near '+city+'!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there and kinda cloud\'y.  You should consider moving.';
			}

		} else {
			//background_image = 'http://www.philip-lutzak.com/weather/SEA%20ICE%20FROM%20VERSOIX/05%20cars%20trees.JPG';
			if ( wind > 10 ){
				text = 'You\'re near '+city+'!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there and there\'s a chilly '+wind+' MPH wind.';
			} else if ( wind > 5 ){
				text = 'You\'re near '+city+'!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there and there\'s a light '+wind+' MPH wind.';
			} else {
				text = 'You\'re near '+city+'!  It\'s so not beach weather bro... it\'s a frigid '+current_temp+'F out there. Seriously... consider moving.';
			}
		}
	}	
	if (typeof callback === "function") {
     callback(text);
    } else {
    	console.log('not a function');
    }
}

