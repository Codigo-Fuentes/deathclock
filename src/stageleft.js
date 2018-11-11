import React from 'react'
import Styles from'./styles.css'

export default class StageLeft extends React.Component {

  chooseDisplay() {
    if (this.props.gameOver === false) return null
    else return this.displayTable()
  }

  displayTable() {
    return (
      <div>
      <img id="clock-logo" src="deathclock-logo.png" alt="logo"></img>
      <div class="table">
        <div class="cell" id="cell-a"></div>
        <div class="cell" class="column-b">Human</div>
        <div class="cell" class="column-c">AI</div>
        <div class="cell">Lifespan: </div>
        <div class="cell" class="column-b">{displayTime(Math.floor(this.props.humanLifeSpan))}</div>
        <div class="cell" class="column-c">{displayTime(Math.floor(this.props.cpuLifeSpan))}</div>
        <div class="cell">Remaining:</div>
        <div class="cell" class="column-b">{displayTime(Math.floor(this.props.playerClock))}</div>
        <div class="cell" class="column-c">{displayTime(Math.floor(this.props.cpuClock))}</div>
      </div>
    </div>
    )
  }

  render() {
    return (
      this.displayTable()
    )
  }
}

const displayTime = (time) => {
  var minutes = Math.floor(time / 60)
  var seconds = time - minutes * 60
  if (time <= 0 || isNaN(time)) {
    return '???';
  }
  else {
    if (seconds < 10) return `${String(minutes)}:0${String(seconds)}`
    else return `${String(minutes)}:${String(seconds)}`
  }
}

