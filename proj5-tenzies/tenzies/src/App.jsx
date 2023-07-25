import React from "react"
import Dice from "./components/Dice.jsx"
import {nanoid} from "nanoid"


export default function App() {
  function rollDice() {
    setNumArray(getRandom())
  }

  // create an array that holds 10 random numbers
  function getRandom() {
    let numArray = [];
    for (let i = 0; i < 10; i++) {
      let randNum = Math.floor(Math.random() * 6) + 1;
      numArray.push({
        value: randNum,
        isHeld: false,
        id: nanoid()
      })
    }
    return numArray
  }

  const [numArray, setNumArray] = React.useState(getRandom())
  const diceElements = numArray.map((die) => {
    return <Dice key={die.id} value={die.value}/>
  })

  return (
    <main className="main">
      <div className="main__inner">
        <p className="main__title">Tenzies</p>
        <p className="main__instruction">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
        <div className="dice">
          {diceElements}
        </div>
        <button className="main__button" onMouseEnter={rollDice}>Roll</button>
      </div>
    </main>
  )
}

