import React from 'react'

class Weather extends React.Component {
  render () {
    return (
      <div>
        {this.props.degrees}C
      </div>
    )
  }
}

export default Weather
