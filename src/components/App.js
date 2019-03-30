import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result'

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
        err: '',
    }

handleCitySubmit = (e) => {
   e.preventDefault(); 
   
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=06abe5d50605bc8894268129e3bff6c0`;
    
    fetch(API)
        .then(response => {
        if(response.ok) {
            return response
        }
        throw Error("błąd")
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
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
        <Result />
      </div>
    );
  }
}

export default App;
