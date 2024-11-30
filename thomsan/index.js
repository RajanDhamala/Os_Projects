const button = document.querySelector('#button');
button.addEventListener('click', () => {
    apicall();
});

const apicall = async () => {
    const apikey = 'paste ur api key'; // unique key 
    const city = document.querySelector('#city').value; // Get city name from input
    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`; // API URL just str and var concat garya to call that endpoint

    try {
        const response = await fetch(url); // calling the api promise return garxa so we use await can use .then syntax also
        const data = await response.json(); // just changing the reponse in json so we can access data easily 
        console.log(data);// this is actual data which should be displayed in frontend


        //just accessing those varibale and setting in forntend for user to see
        document.getElementById("weather-info").style.display = "block";
        document.getElementById("city-name").textContent = `${data.location.name}`;
        document.getElementById("country-name").textContent = `Country: ${data.location.country}`;
        document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
        document.getElementById("icon").src = `https:${data.current.condition.icon}`;
        document.getElementById("feels-like").textContent = `Feels like: ${data.current.feelslike_c}°C`;
        document.getElementById("wind-speed").textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
        document.getElementById("last-updated").textContent = `Last Updated: ${data.current.last_updated}`;
        
    } catch (err) {
        console.log("Error while calling API", err);
    alert("City not found");
    } 
};
