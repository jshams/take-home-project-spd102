/* eslint-disable react/jsx-indent-props */
/* eslint-disable semi */
import React, { Component } from 'react';
import './App.css';
import Weather from './Weather'
const storage = window.localStorage

class App extends Component {
  constructor(props) {
    super(props)
    storage.setItem(JSON.stringify('keys'), JSON.stringify([]))
    // console.log(JSON.parse(storage.getItem('keys')))

    this.state = {
      inputValue: '', // Used to hold value entered in the input field
      weatherData: null, // Used to hold data loaded from the weather API
      mood: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    // ! Get your own API key !
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    // Get the zip from the input
    const { inputValue: zip } = this.state
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apikey}`
    // Get data from the API with fetch
    fetch(url).then(res => {
      return res.json()
    }).then((json) => {
      // If the request was successful assign the data to component state
      this.setState({
        weatherData: json
      })
    }).catch((err) => {
      // If there is no data 
      this.setState({
        weatherData: null
      }) // Clear the weather data we don't have any to display
      // Print an error to the console. 
      console.log('-- Error fetching --')
      console.log(err.message)
    })
  }

  displayOneMood(date, note) {
    return (
      <div>
        <p>{date} : {note}</p>
      </div>
    )
  }

  displayMoods() {
    if (JSON.parse(storage.getItem(JSON.stringify('keys'))).length === 0) return
    let keys = JSON.parse(storage.getItem(JSON.stringify('keys')))
    let moods = []
    for (let i = 0; i < keys.length; i++) {
      moods.push(this.displayOneMood(keys[i], JSON.parse(storage.getItem(JSON.stringify(keys[i])))))
    }
    return moods
  }


  handleMood(e) {
    e.preventDefault()
    const { mood: currentMood } = this.state
    let keys = JSON.parse(storage.getItem(JSON.stringify('keys')))
    const now = new Date().toDateString()
    if (keys.includes(now) === false) keys.push(now)
    console.log(JSON.parse(storage.getItem(JSON.stringify("Tue Aug 13 2019"))))
    console.log(keys)
    storage.setItem(JSON.stringify('keys'), JSON.stringify(keys))
    storage.setItem(JSON.stringify(now), JSON.stringify(currentMood))
    this.displayMoods()
  }

  renderWeather() {
    if (this.state.weatherData == null) return
    const weatherDatas = this.state.weatherData.list.slice(0, 1).map((data) => {
      return (< Weather weatherData={data} />)
    })
    return weatherDatas
  }

  render() {
    console.log(this.state.weatherData)
    return (<div className="App" >
      {
        /** This input uses the controlled component pattern */
      } < form onSubmit={
        e => this.handleSubmit(e)
      } > {
        } <input value={
          this.state.inputValue
        }
          onChange={
            e => this.setState({
              inputValue: e.target.value
            })
          }
          type="text"
          pattern="(\d{5}([\-]\d{4})?)"
          placeholder="enter zip" />
        <button type="submit" > Submit </button>
      </form>

      <div className="weathers" > {
        this.renderWeather()
      } </div>

      <div>
        <form onSubmit={e => this.handleMood(e)}>
          <input value={this.state.mood} onChange={e => this.setState({
            mood: e.target.value
          })} type="text" placeholder="enter mood" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="moods" >
        <h1>Moods</h1>
        {this.displayMoods()}
      </div>
    </div>
    );
  }
}

export default App;