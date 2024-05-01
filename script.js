let getweather = document.getElementById("search");
let cityinput = document.getElementById("inputcity");
let Temp = document.getElementById("temp");
let Weather = document.getElementById("weather");
let location1 =document.getElementById("cityname");
let Humditity = document.getElementById("humditity");
async function getdata(cityname)
{
    let promise=  await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c8999e9985cc4fe0aec101227242304 &q=${cityname}&aqi=yes`
    );
    return await promise.json();
}
 async function search()
{
    let value =cityinput.value;
    let result = await getdata(value);
    console.log(result);
}
getweather.addEventListener("click",search)
    // let value =cityinput.value;
    // let result = await getdata(value);
   
    // location1.innerText= `${result.location.name}`
    // Temp.innerText=result.current.temp_c;
    // Weather.innerText=result.current.cloud;
    // Humditity.innerText=result.current.humidity;  
//http://api.weatherapi.com/v1/current.json?key=c8999e9985cc4fe0aec101227242304 &q=London&aqi=yes