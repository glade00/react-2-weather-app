import React, { Component } from 'react'
export default class App extends Component {
  fetchData() {
    fetch('http://localhost:3000/rochelle-17.json')
      .then((response) => {
        // L'objet response renvoyé par fetch possède une méthode .json()
        // qui retourne une Promise, et qui convertit la réponse JSON
        // en objet Javascript.
        return response.json()
      })
      .then((obj) => {
        console.log('Javascript object: ', obj)
      })
  }
  render() {
    return (
      <div>
        Hello world !
        <button onClick={() => this.fetchData()}>button</button>
      </div>

    )
  }
}
