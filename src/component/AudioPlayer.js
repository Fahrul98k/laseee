import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const AudioPlayer = forwardRef((props, ref) => {
    const audioRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play: () => {
            if (audioRef.current) {
                console.log('Playing audio'); // Debugging
                return audioRef.current.play();
            } else {
                console.log('Audio element is null'); // Debugging
            }
        },
    }));

    return (
        <audio
            ref={audioRef}
            src="/lagu.mp3"
            preload="auto"
            onCanPlay={() => console.log('Audio can play')} // Debugging
            onError={(e) => console.log('Audio error:', e)} // Debugging
        />
    );
});

export default AudioPlayer;
