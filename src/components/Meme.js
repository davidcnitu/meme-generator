import React from 'react';
import dataset from '../memesData';

export default function Meme() {

    const [memeUrl, setMemeUrl] = React.useState("");

    function getMemeImage() {
        const memeArray = dataset.data.memes;
        const randomNumber = Math.floor((Math.random() * dataset.data.memes.length));
        const { url } = memeArray[randomNumber];
        setMemeUrl(url);
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {memeUrl && <img
                src={memeUrl}
                alt="Meme"
                className="meme--img"
            />}
        </main>
    )
}