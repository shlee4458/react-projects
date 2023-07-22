import React from "react";
import '../index.css'
import data from '../meme.js'

export default function Meme() {

    // state, setstate(1 - set the state with the return value of the callback funtion, 2 - set the state with the given value)
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemesImages, setAllMemesImages] = React.useState(data);

    function clickHandler(event) {
        // randomly choose the data from the allMemesImages
        const memesArray = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let newData = memesArray[randomNumber]
        const { name, value, type } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: type == "submit" ? newData.url : value
            }
        })
    }

    // const handleClick = () => console.log("I was clicked");
    return (
        <main>
            <form className="meme__form">
                <input onChange={clickHandler} className="meme__input" type="text" placeholder={meme.topText} name="topText" value={meme.topText}/>
                <input onChange={clickHandler} className="meme__input" type="text" placeholder={meme.bottomText} name="bottomText" value={meme.bottomText}/>

                <button 
                onMouseEnter={clickHandler} className="meme__button" name="randomImage">Get a new meme image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage}  className="meme__image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}