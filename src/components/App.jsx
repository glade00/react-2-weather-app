import React, { Component } from 'react'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWeather: null,
    }

  };



  componentDidMount() {
    fetch('http://localhost:3000/rochelle-17.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ dataWeather: data });

      })
  }

  render() {
    console.log(this.state.dataWeather)
    return (
      <div>


        <h1>{this.state.dataWeather ?.city_info.name}</h1>
        <h2>{this.state.dataWeather ?.current_condition.date}</h2>
        <p>Le temps est {this.state.dataWeather ?.current_condition.condition}</p>
        <p>Le temps est humide à {this.state.dataWeather ?.current_condition.humidity}</p>
        <p>Le température est à {this.state.dataWeather ?.current_condition.tmp}</p>


      </div>

    )
  }
}
