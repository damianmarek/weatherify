import React from 'react'

class Weather extends React.Component {
  render () {
    return (
      <div>
        {this.props.degrees}°
      </div>
    )
  }
}

export default Weather
