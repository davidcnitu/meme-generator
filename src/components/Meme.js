import React from 'react';
import dataset from '../memesData';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(dataset.data.memes);

    function getMemeImage() {
        const randomNumber = Math.floor((Math.random() * dataset.data.memes.length));
        const { url } = allMemeImages[randomNumber];
        setMeme(prevMeme => ({ ...prevMeme, randomImage: url }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    name="topText"
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    name="bottomText"
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}