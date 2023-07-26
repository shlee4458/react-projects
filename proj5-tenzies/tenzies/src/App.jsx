import React from "react"
import Dice from "./components/Dice.jsx"
import {nanoid} from "nanoid"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function App() {

  const [numArray, setNumArray] = React.useState(getRandom())
  const [tenzies, setTenzies] = React.useState(false);
  const { width, height } = useWindowSize();

  // checks if the user has won the game every time the numArray changes
  React.useEffect(() => {
    if (wonGame()) {
      setTenzies(true)
      console.log("won the gmae")
    }
  }, [numArray])

  // check if the user has won the game
  function wonGame() {

    // using filter
    // let firstValue = numArray[0].value
    // numArray.filter((die) => {
    //   die.isHeld && die.value == value
    // })

    // return numArray.length == 10

    // using every
    const isAllHeld = numArray.every(die => die.isHeld)
    const firstValue = numArray[0].value
    const allTheSame = numArray.every(die => die.value = firstValue)
    return isAllHeld && allTheSame
  }

  const diceElements = numArray.map((die) => {
    return <Dice isHeld={die.isHeld} key={die.id} value={die.value} holdDice={() => holdDice(die.id)}/>
  })

  // set the num array with the new` random array
  function rollDice() {
    if (!tenzies) {
      setNumArray(oldNumArray => oldNumArray.map(die => {
        return die.isHeld ? die : generateNewDie() 
      }))
    } else {
      setNumArray(getRandom()) // if user restarts the game
      setTenzies(false)
    }
  }

  // create an array that holds 10 random numbers
  function getRandom() {
    let numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push(generateNewDie())
    }
    return numArray
  }

  // randomly generate a single die
  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    }
  }

  // clickedHandler function 
  // when the user clicks the dice, updates the isHeld to !isHeld
    
  function holdDice(id) {
    setNumArray(oldNumArray => {
      return oldNumArray.map(die => {
        return die.id === id ? {
          ...die, isHeld: !die.isHeld
        } : die
      })
    })
  }

  return (
    <main className="main">
      {tenzies ? <Confetti/> : ""}
      <div className="main__inner">
        <p className="main__title">Tenzies</p>
        <p className="main__instruction">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
        <div className="dice">
          {diceElements}
        </div>
        <button className="main__button" onMouseEnter={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </div>
    </main>
  )
}

