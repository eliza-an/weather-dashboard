var today = document.getElementById("todayTemp")
var today = document.getElementById("todayWind")
var today = document.getElementById("todayHumidity")
var today = document.getElementById("todayDate")


$("#buttonz").on("click", function() {


    var city = document.getElementById("search-input").value
    let city_name = city.toString()
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city_name + "&id=524901&appid=0945405117e26db68fe98d879a5aa5a3&units=metric"

    
    $.ajax({
        url:queryURL,
        method: "GET"
    })
   
    .then(function(response) {


        var chosenCity= response.city.name
        todayDate.append(chosenCity)

        var todaysdate= response.list[0].dt_txt;

        todayDate.append("    " + todaysdate)

        
    
      var todaystemp = response.list[0].main.temp;
      let stringtodaystemp = JSON.stringify(todaystemp);
        todayTemp.append(stringtodaystemp)

        console.log(response)

        var todayswind= response.list[0].wind.speed;
        let stringtodayswind = JSON.stringify(todayswind);
        todayWind.append(stringtodayswind)

        var todayshumid= response.list[0].main.humidity;
        let stringtodayshumid = JSON.stringify(todayshumid);
        todayHumidity.append(stringtodayshumid)

    })

})
  
