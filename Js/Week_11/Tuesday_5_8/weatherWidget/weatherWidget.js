$(document).ready(()=>{
	$(`#weather-form`).submit((event)=>{
		event.preventDefault(); //by default the browser will try to submit this form
		
		//const userCity = document.getValuebyId('city').value
		const userCity = $(`#city`).val();

		const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}`

		// console.log(weatherUrl);
		$.getJSON(weatherUrl, (weatherData)=>{
			// console.log(weatherData);
			// $(`#weather-info`).innerHTML = weatherData;
			const currentTemp = weatherData.main.temp;
			const icon = weatherData.weather[0].icon;
			const high = weatherData.main.temp_max;
			const weatherHTML = `
				<div>
					<img src="http://openweathermap.org/img/w/${icon}.png" />
					<div class="col-sm-3">
						The temp in ${weatherData.name} is ${currentTemp}
					</div>
					<div class="col-sm-3">
						The high is forecasted at ${high}
					</div>
				</div>
				`
			$(`#weather-info`).html(weatherHTML);
		})
	})
})