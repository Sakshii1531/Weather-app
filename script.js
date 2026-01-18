console.log("hello Sakshi");

let apiKey = "293ccdcefdcc9bed68a0a0eb50cd8338";

async function getWeather(){
    // let latitude = 17.3333;
    // let longitude = 56.0989;

    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

   const data = await response .json();

   console.log("Weather data :->" + data);
}