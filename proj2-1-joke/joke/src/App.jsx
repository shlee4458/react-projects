import React from "react"
import Joke from "./Joke.jsx"
import jokesData from "./jokesdata.js"

export default function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke 
      setup={joke.setup}
      punchline={joke.punchline}
    />
  })
  return (

    <div>
      {jokeElements}
    </div>
    // <div>
    //   <Joke 
    //     setup={jokesData[0].setup}
    //     punchline={jokesData[0].punchline}
    //     isPun={true}
    //   />
    //   <Joke 
    //     setup="How did the hacker escape the police?"
    //     punchline="He just ransomware!"
    //     isPun={false}
    //     upvote={10}
    //     downvote={2}
    //     comments={[{author: "", body: "", title: ""}]}
    //   />
    //   <Joke 
    //     setup="Why don't pirates travel on mountain roads?"
    //     punchline="Scurvy."
    //   />
    // </div>
  )
}


