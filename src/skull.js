import React from 'react'

const logoStyle = {
  height: 35,
  width: 140,
  paddingLeft: 10,
  opacity: .3
}

const quoteStyle = {
  textAlign: "center",
  fontFamily: "Garamond",
  fontSize: 18,
  color: "grey"
}

const deathQuotes = [
  "When people don't express themselves, they die one piece at a time.", // --Laurie Halse Anderson
  "Six feet of earth makes us all equal.", // Italian saying
  "Death never takes a wise man by surprise.", // Jean de la Fontaine
  "The first breath is the beginning of death.", // Thomas Fuller
  "Certain is death for the born.", // Bhagavad Gita
  "Man suffers a paralyzing fear...A fear of time running out.", // Mitch Albom
  "The grey rain-curtain of this world rolls back...and then you see it." // Tolkien
]

const ran = Math.floor(Math.random() * deathQuotes.length) // to pick a random quote

const timeLeft = (time) => {
  if (time <= 0) {
    return "met with death"
  }
  else {
    return `had ${time} seconds left to live`
  }
}

class Skull extends React.Component {

  displayQuote() {
    return <p style={quoteStyle}>{deathQuotes[ran]}</p>
  }

  displayTime() {
    return (
      <div>
        <h1 align="center" style={{color:"white"}}>The artificial intelligence {timeLeft(Math.floor(this.props.cpuClock))} </h1>
        <h1 align="center" style={{color:"white"}}>The user {timeLeft(Math.floor(this.props.playerClock))} </h1>
      </div>
    )
  }

  chooseDisplay() {
    if (this.props.gameOver === false) return this.displayQuote()
    else return this.displayTime()
  }
  
  render() {
    return (
      <div>
        <img src="deathclock-logo.png" alt="logo" style={logoStyle} href="http://deathclock.life"></img>
        {this.chooseDisplay()}
      </div>
    )
  }
}

export default Skull // 'Skull' because it's the head...

