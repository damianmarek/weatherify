import React from 'react'

class Weather extends React.Component {
  render () {
    let weather = null;
    if(this.props.city !== ' ') {
      weather = <div>
        {this.props.degrees}° in {this.props.city}, {this.props.country}
      </div>
    }
    return (
      <div>
        {weather}
      </div>
    )
  }
}

export default Weather
