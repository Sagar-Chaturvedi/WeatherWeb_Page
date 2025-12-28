
    function SerachClick()
{
    var cityName = document.getElementById("inputcityName").value;

    var API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8d9010f6a1ae1a796bac86be9176959f&units=metric`;

    fetch(API_URL)
    .then(function(response)
    {
          return response.json();
    })

    .then(function(weatherObj)
{
    document.getElementById("cityName").innerHTML = `${weatherObj.name},${weatherObj.sys.country}`;
    document.getElementById("temprature").innerHTML = `${weatherObj.main.temp}&deg;C`;
    document.getElementById("windspeed").innerHTML=`${weatherObj.wind.speed}`;
    document.getElementById("Humidity").innerHTML=`${weatherObj.main.humidity}`;
    document.getElementById("sunny").innerHTML=`${weatherObj.main.feels_like}`;
    document.getElementById("cloud").innerHTML=`${weatherObj.clouds.all}%`;
})

 

}
