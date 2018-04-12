import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.startTimer()
    this.timeOfTheDay()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  stopTimer = () => {
    clearInterval(this.timerID)
  }

  startTimer = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  timeOfTheDay = () => {
    const hours = this.state.date.getHours()
    const container = document.getElementById("container")
    if (hours < 20 && hours > 7) {
      container.classList.toggle("day-style")
    } else {
      container.classList.toggle("night-style")
    }
  }

  render() {
    return (
      <div id="container" className="container">
        <img className="sun-img" src="./sun.png" alt="sun" />
        <img className="moon-img" src="./moon.png" alt="moon" />
        <h1>The time is:</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.stopTimer} className="button stop-button">Stop the time</button>
        <button onClick={this.startTimer} className="button start-button">Start the time</button>
      </div>
    )
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"))
