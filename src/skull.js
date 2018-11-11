import React from 'react'
import Styles from'./styles.css'

class Skull extends React.Component { 
  
  render() {
    return (
      <div>
        <a href="https://deathclock.life"><img id="head-logo" src="deathclock-logo.png" alt="logo"></img></a>
        <p id="death-quotes">{deathQuotes[ran]}</p>
      </div>
    )
  }
}

const deathQuotes = [
  "When people don't express themselves, they die one piece at a time.", // - Laurie Halse Anderson
  "Six feet of earth makes us all equal.", // - Italian saying
  "Death never takes a wise man by surprise.", // - Jean de la Fontaine
  "The first breath is the beginning of death.", // - Thomas Fuller
  "Certain is death for the born.", // - Bhagavad Gita
  "Man suffers a paralyzing fear...A fear of time running out.", // - Mitch Albom
  "The grey rain-curtain of this world rolls back...and then you see it." // - Tolkien
]

const ran = Math.floor(Math.random() * deathQuotes.length) // to pick a random quote

export default Skull // 'Skull' because it's the head...

