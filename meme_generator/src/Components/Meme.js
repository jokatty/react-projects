import memes from '../memData';
import React, { useState } from 'react';

export default function Meme(){
  let [meme, setMeme] = useState({
    topText:"Some top text",
    bottomText:"someBottomText",
    randomImage:""
  })
  let [allMeme, setAllMeme] = useState(memes)



  function displayMeme(){
    console.log("i got clicked")
    let memeArr = allMeme.data.memes
    let randomIndex = Math.round(Math.random() * 101);
    let randMeme = memeArr[randomIndex];
    let memurl = randMeme.url;
    console.log(memurl)
    setMeme(function(prevState){
      return {
        ...prevState,
        randomImage: memurl 
      }
    })
  }

  return (
    <main>
      <div>
        <input type="text" />
        <input type="text" />
        <button type="submit" onClick={displayMeme}>Submit</button>
      </div>
      <p>{meme.topText}</p>
      <img src={meme.randomImage} alt='meme'/>
      <p>{meme.bottomText}</p>
    </main>
  )
}