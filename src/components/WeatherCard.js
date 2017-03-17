import React from 'react'
import './styles/WeatherCard.css'

class WeatherCard extends React.Component {
  render () {
    return (
      <div className='card'>
        <div className='card-description'>
          <div className='card-descriptionText'>
            {this.props.degrees}°
          </div>
        </div>
        <div className='card-place'>
          {this.props.city}
        </div>
      </div>
    )
  }
}

export default WeatherCard
