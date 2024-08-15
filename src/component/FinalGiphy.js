import React from 'react';

const FinalGiphy = () => {
    // URL GIF dari Giphy
    const giphyUrl = "https://giphy.com/embed/N4AIdLd0D2A9y"; // Ganti dengan URL GIF sesuai kebutuhan

    return (
        <div style={{ textAlign: 'center' }}>
            <iframe
                src={giphyUrl}
                width="480"
                height="480"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title="Final Giphy"
            ></iframe>
            <p><a href={giphyUrl}>via GIPHY</a></p>
        </div>
    );
};

export default FinalGiphy;
