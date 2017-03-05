import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Weather from './components/Weather'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      city: '',
      degrees: 0,
    }
  }

  handleButtonPress = (event) => {
    this.setState({ city: this.textInput.value })
    this.fetchWeather(this.textInput.value)
  }

  fetchWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=76deb9243afb0cb5277a40b4f8b77bf8&units=metric`)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        degrees: res.main.temp
      })
    })
    .catch(error => {
      this.setState({
        degrees: 0
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
          <Weather degrees={this.state.degrees} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
