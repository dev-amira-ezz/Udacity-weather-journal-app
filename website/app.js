/* Global Variables */
const apiKey = '9d816cd4d0ff1f8dfeabd7fd80f91b00';
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Add event listener to generate button
document.getElementById('generate').addEventListener('click', performAction);

//Successfuly get weather data from API

function performAction(e){
    const newZip = document.getElementById('zip').value;
    getWeather(baseURL, newZip, apiKey);
}

//Get weather from API
const getWeather = async (baseURL, newZip, apiKey) => {

    const res = await fetch(`${baseURL}${newZip}&units=metric&appid=${apiKey}`);
    try {
      const weatherData = await res.json();
      console.log(weatherData);
      console.log(projectData);
      return weatherData;
    } catch (error) {
      console.log('error', error)
    }
}