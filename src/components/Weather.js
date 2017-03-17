import React from 'react'
import { VictoryLine, VictoryChart} from 'victory'
import WeatherCard from './WeatherCard'
import './styles/Weather.css'

let data = [
  { name: '00', temp: 0, label: '0'},
  { name: '01', temp: 0, label: '0'},
]

class Weather extends React.Component {

  componentWillReceiveProps = (nextProps) => {
    data = []
    for(let i = 0; i<24; i++) {
      let temp = {
        name: String(i),
        temp: nextProps.forecast.forecastday[0].hour[i].temp_c,
      }
      data.push(temp)
    }
  }

  render () {
    let weather = null;
    if(this.props.city !== ' ') {
      weather =
      <div className='weather-card'>
        <WeatherCard degrees={this.props.degrees} city={this.props.city}/>
      </div>

    }
    return (
      <div>
        {weather}
        <h2>
          Today's temperature chart
        </h2>
        <VictoryChart
        domainPadding={20}
        width={600}
        >
          <VictoryLine
            interpolation='natural'
            data={data}
            x="name"
            y={(hour) => hour.temp}
          />
        </VictoryChart>
      </div>
    )
  }
}

export default Weather
