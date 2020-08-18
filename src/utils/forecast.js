const request = require('request')

const forecast = (latitude, longitude, callback) => {
      const url = 'http://api.weatherstack.com/current?access_key=8c34b63e825ca8508d481b37f371863f&query='+latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. It feel ' + body.current.feelslike + 'degree outside.')
        }
    })
}

module.exports = forecast