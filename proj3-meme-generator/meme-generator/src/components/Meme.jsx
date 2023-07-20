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

    function clickHandler() {
        // randomly choose the data from the allMemesImages
        const memesArray = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let newData = memesArray[randomNumber]
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: newData.url
            }
        })
    }

    // const handleClick = () => console.log("I was clicked");
    return (
        <main>
            <form className="meme__form">
                <input className="meme__input" type="text" placeholder={meme.topText}/>
                <input className="meme__input" type="text" placeholder={meme.bottomText}/>

                <button 
                onMouseEnter={clickHandler} className="meme__button">Get a new meme image</button>
                <img src={meme.randomImage} className="meme__image"/>
            </form>
        </main>
    )
}