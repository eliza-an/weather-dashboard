
$("#buttonz").on("click", function() {


    var city = document.getElementById("search-input").value
    let city_name = city.toString()
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city_name + "&id=524901&appid=0945405117e26db68fe98d879a5aa5a3"

    
    $.ajax({
        url:queryURL,
        method: "GET"
    })
   
    .then(function(response) {
      var results = response.data;
     console.log(response)
    })

})
  
