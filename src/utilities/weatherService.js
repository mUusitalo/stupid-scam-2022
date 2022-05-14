import axios from 'axios'
import faker from '@faker-js/faker'
const API_KEY = 'af5d486d12bda2e8cf9b0738d917d926'

async function getWeather() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      console.log("coords:", latitude, longitude)
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&mode=JSON`)
        .then(response => resolve(response.data))
        .catch(e => reject(new Error('Could not get response from openweathermap')))
    },
    () => console.log("coulndt get current pos") || reject(new Error('An error occurred in geolocation')))
  })
}

export { getWeather }
