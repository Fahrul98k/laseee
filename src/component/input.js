import React, { useState, useRef, useEffect } from 'react';
import FlowerGiphy from './FlowerGiphy'; // Import FlowerGiphy component
import FinalGiphy from './FinalGiphy';   // Import FinalGiphy component
import axios from 'axios'; // Ensure axios is installed and imported

function Input() {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showFinalGiphy, setShowFinalGiphy] = useState(false); // State to determine which Giphy to show
    const [rejectPosition, setRejectPosition] = useState({ top: '60px', left: '150px' }); // Initial position next to "Ambil"
    const audioRef = useRef(null);
    
    const handleSubmit = async () => {
        try {
            await axios.post('/submit', { uname: name });
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting name:', error);
        }
    };

    const handleReject = () => {
        // Move the reject button to a random position
        setRejectPosition({
            top: `${Math.random() * 300}px`, // Random top position
            left: `${Math.random() * 300}px`, // Random left position
        });
    };

    const handleAccept = () => {
        setShowFinalGiphy(true); // Show the final Giphy and hide other content
    };

    useEffect(() => {
        if (submitted && audioRef.current) {
            console.log('Attempting to play audio');
            audioRef.current.play().then(() => {
                console.log('Audio playback started');
            }).catch((error) => {
                console.log('Playback error:', error);
            });
        }
    }, [submitted]);

    return (
        <div className="main" style={{ textAlign: 'center', padding: '20px' }}>
            {!submitted ? (
                <>
                    <input
                        type="text"
                        placeholder="uname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: '10px', fontSize: '16px' }}
                    />
                    <button
                        onClick={handleSubmit}
                        style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
                    >
                        Submit
                    </button>
                </>
            ) : (
                !showFinalGiphy ? (
                    <div className="result" style={{ position: 'relative', display: 'inline-block' }}>
                        <h1>Halo {name}</h1>
                        <p>This is for you</p>
                        <audio
                            ref={audioRef}
                            src="/lagu.mp3"
                            preload="auto"
                            onCanPlay={() => console.log('Audio can play')}
                            onError={(e) => console.log('Audio error:', e)}
                        />
                        <FlowerGiphy />
                        <div style={{ position: 'relative', marginTop: '20px' }}>
                            <button
                                onClick={handleReject}
                                style={{
                                    position: 'absolute',
                                    top: rejectPosition.top,
                                    left: rejectPosition.left,
                                    padding: '10px',
                                    fontSize: '16px'
                                }}
                            >
                                Tolak
                            </button>
                            <button
                                onClick={handleAccept}
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    padding: '10px',
                                    fontSize: '16px'
                                }}
                            >
                                Ambil
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="final-giphy">
                        <FinalGiphy />
                    </div>
                )
            )}
        </div>
    );
}

export default Input;
