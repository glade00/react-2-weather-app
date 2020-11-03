import Resume from './Resume'
import Previsions from './Previsions'
import React, { Component } from 'react'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWeather: null,
      date: new Date(),
      updateWeather: 10000,
      isLoading: false
    }
    this.fetchData = this.fetchData.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(e) {
    this.setState({
      updateWeather: e.target.value,
    });
  }
  fetchData() {
    this.setState({ isLoading: true });
    fetch('https://www.prevision-meteo.ch/services/json/rochelle-17')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          dataWeather: data,
          date: new Date()
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  componentDidMount() {
    this.fetchData();
    this.setUpTime();
  }
  setUpTime() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.fetchData(), this.state.updateWeather);
  }
  handleClick(value) {
    this.setState({ updateWeather: value }, this.setUpTime());
  }

  render() {
    console.log(this.state.dataWeather)

    return (
      <div>
        {Resume(this.state.dataWeather)}


        <h2>Dernière mise à jour à {this.state.date.toLocaleTimeString()} heures.</h2>
        <input type="text" value={this.state.updateWeather} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Modifier</button>
        <h3>Les prévisions pour les jours prochains : </h3>
        {Previsions(this.state.dataWeather)}


      </div >


    )
  }
}
