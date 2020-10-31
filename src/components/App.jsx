import Resume from './Resume'
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
    console.log(this.state.dataWeather)

    return (
      <div>
        {Resume(this.state.dataWeather)}

        <h2>Dernière mise à jour à {this.state.date.getHours()} heures.</h2>
      </div >


    )
  }
}
