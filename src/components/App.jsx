import React, { Component } from 'react'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWeather: null,
      date: new Date()
    };


  };



  componentDidMount() {
    this.timerID = setInterval(fetch('https://www.prevision-meteo.ch/services/json/rochelle-17')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          dataWeather: data,
          date: new Date()
        });

      }),
      10000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render() {
    return (
      <div>


        <h1>{this.state.dataWeather ?.city_info.name}</h1>
        <h2>{this.state.dataWeather ?.current_condition.date}</h2>
        <p>Le temps est {this.state.dataWeather ?.current_condition.condition}</p>
        <p>Le temps est humide à {this.state.dataWeather ?.current_condition.humidity}</p>
        <p>Le température est à {this.state.dataWeather ?.current_condition.tmp} °C</p>

        <h2>Dernière mise à jour à {this.state.date.getHours()} heures.</h2>



      </div>


    )
  }
}
