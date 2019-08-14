let result = ''
const main = () => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q='
  const city = document.querySelector('#input').value
  const apikey = '&APPID=3434bc4513b87fa0bd2d62558903e72b'
  const units = '&units=imperial'
  result = url + city + apikey + units
  console.log(result)
  // fetch to get the data
  fetch(result)
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(data => {
      console.log(data)
      document.querySelector('#temp').textContent = data.main.temp
      document.querySelector('#humid').textContent = data.main.humidity
      document.querySelector('#high-temp').textContent = data.main.temp_max
      document.querySelector('#low-temp').textContent = data.main.temp_min
    })
}
document.querySelector('.search-button').addEventListener('click', main)
