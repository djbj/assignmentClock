import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  pauseClock = () => {
    clearInterval(this.timerID)
  }

  startClock = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is</h2>
        <h2 className="display">{this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.startClock}>START</button>
        {/* <br/> */}
        <button onClick={this.pauseClock}>PAUSE</button>
      </div>

    )
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
