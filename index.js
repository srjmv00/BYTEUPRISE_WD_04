document.addEventListener("DOMContentLoaded",()=>{
   let cityinfo = document.getElementById("city_info")
   let searchbtn = document.getElementById("search_btn") 
   let cityname = document.getElementById("cityname")
   let temperature = document.getElementById("temperature")
   let weather_description = document.getElementById("weather_description")

   searchbtn.addEventListener("click",()=>{
    let city = cityinfo.value
    if(city){
        getweatherinfo(city)
    }else{
        alert("Please enter your city name")
    }
   })

   async function getweatherinfo(city){
    let apikey = "62b0d65cfeb34ff4d7b809b5aa7ee306"
    let apiurl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        let response = await fetch(apiurl)
        console.log(response)
        data = await response.json()
        console.log(data)
        if(data.cod === 200){
            cityname.innerHTML = `Weather in ${data.name},${data.sys.country}`
            temperature.innerHTML = `Temperature is ${data.main.temp}`
            weather_description.innerHTML = `Weather description is ${data.weather[0].description}`
        }else{
            alert("City not found")
            window.location.reload()
        }
        
    } catch (error) {
        alert("Some error occurred into api",error)
    }

   }

})