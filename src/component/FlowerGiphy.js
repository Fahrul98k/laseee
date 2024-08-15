// Giphy.js
import React from 'react';

const FlowerGiphy = ({ type }) => {
    // URL GIF dari Giphy
    const giphyUrl = "https://giphy.com/embed/qCH3Pqkc1T6NAJtTZs/video"; // Ganti dengan URL GIF sesuai kebutuhan

    return (
        <div>
            <iframe
                allow="fullscreen"
                frameBorder="0"
                height="360"
                src={giphyUrl}
                width="480"
                title="Giphy"
            ></iframe>
        </div>
    );
};

export default FlowerGiphy;
