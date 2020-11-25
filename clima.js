$(document).ready(function () {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=c142b44a32455c4b66ecf4afba0c7c56"
    }).then(function (data) {
        console.log(data)
        $("#ciudad_bogota").append(`<h1 class="p-1"><i class="fas fa-map-marker-alt"></i> ${data.name} D.C.</h1>`)
        $("#clima_bogota").append(`<h1>${data.main.temp - 273.15}°C</h1>`)
        $("#icon_bogota").append(`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`)
    });
});