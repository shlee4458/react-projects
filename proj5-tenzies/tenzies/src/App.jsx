import React from "react"
import Main from "./components/Main.jsx"



export default function App() {
  function clickHandler() {
    console.log("clicked")
  }

  // create an array that holds 10 random numbers
  const numArray = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div>
      <Main
      numArray={numArray}
      clickHandler={clickHandler}
      />
    </div>
  )
}

