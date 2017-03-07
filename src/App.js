import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Weather from './components/Weather'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      degrees: 0,
      city: ' ',
      country: ' ',
      forecast: { },
    }
  }

  componentDidMount = () => {
    document.title = 'Weatherify'
  }

  handleButtonPress = (event) => {
    this.fetchWeather(this.textInput.value)
  }

  fetchWeather = (city) => {
    fetch(`https://api.apixu.com/v1/forecast.json?key=${process.env.REACT_APP_APIXU_API_KEY}&q=${city}&days=7`)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        degrees: res.current.temp_c,
        city: res.location.name,
        country: res.location.country,
        forecast: res.forecast,
      })
    })
    .catch(error => {
      this.setState({
        degrees: 0,
        city: ' ',
        country: ' ',
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='weather-div'>
          <p className="App-intro">
            Show a temperature in your city
          </p>
          <input className='weather-input' ref={(input) => { this.textInput = input }} />
          <button className='weather-button' onClick={() => {this.handleButtonPress()}} >
            Show
          </button>
          <Weather degrees={this.state.degrees} city={this.state.city} country={this.state.country} forecast={this.state.forecast}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
