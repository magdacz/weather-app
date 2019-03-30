import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result'

const APIKey = '06abe5d50605bc8894268129e3bff6c0';

class App extends Component {
    
    state = {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        pressure: '',
        wind: '',
        err: false,
    }

handleCitySubmit = (e) => {
   e.preventDefault(); 
   
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
    
    fetch(API)
        .then(response => {
        if(response.ok) {
            return response
        }
        throw Error("błąd")
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const time = new Date().toLocaleString();
            this.setState(prevState => ({
                date: time ,
                city: this.state.value,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                temp: data.main.temp,
                pressure: data.main.pressure,
                wind: data.wind.speed,
                err: false,
            }))
        })
        .catch(err => {
            console.log(err)
            this.setState(prevState => ({
                err: true,
                city: this.state.value
            }))
        })
}

handleInputChange = (e) => {
    
    this.setState({
        value: e.target.value, 
    })
}
    
  render() {
    return (
      <div>
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleCitySubmit}
        />
        <Result weather={this.state}/>
      </div>
    );
  }
}

export default App;
