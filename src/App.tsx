import { useState, useRef } from "react";


export default function App(): JSX.Element {
    const [soundPermission, setSoundPermission] = useState(true);


    const editSoundPermission = (bool: boolean) => {
        setSoundPermission(bool);
        if (bool) {
            const audio = new Audio('/sound/mute.mp3');
            audio.play();
        }
    };
    const playSound_Primary = () => {
        if (soundPermission) {
            const audio = new Audio('/sound/primary.mp3');
            audio.play();
        }
    };
    const playSound_Bell = () => {
        if (soundPermission) {
            const audio = new Audio('/sound/bell.mp3');
            audio.play();
        }
    };
    const playSound_Swipe = () => {
        if (soundPermission) {
            const audio = new Audio('/sound/swipe.mp3');
            audio.play();
        }
    };
    const playSound_Wind = () => {
        if (soundPermission) {
            const audio = new Audio('/sound/wind.mp3');
            audio.play();
        }
    };
    const playSound_Keyboard = () => {
        if (soundPermission) {
            const audio = new Audio('/sound/keyboard.mp3');
            audio.play();
        }
    };
    const playSound_Backspace = () => {
        if (soundPermission) {
            const audio = new Audio('/sound/backspace.mp3');
            audio.play();
        }
    };
    const playSound_Hover = () => {
        if (soundPermission) {
            const audio = new Audio('/sound/hover.mp3');
            audio.play();
        }
    };
    const playSound_Loading = (
        audioRef: React.MutableRefObject<HTMLAudioElement | null>
    ) => {
        audioRef.current = new Audio('/sound/loading.mp3');
        if (soundPermission) {
            audioRef.current.loop = true;
            audioRef.current.play().catch((error) => {
                if (error.name !== 'AbortError') {
                    console.error('Audio play failed:', error);
                }
            });
        }
    };
    const pauseSound_Loading = (
        audioRef: React.MutableRefObject<HTMLAudioElement | null>
    ) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
    };


    // Reference for the loading sound to be paused and resumed
    const loadingAudioRef = useRef<HTMLAudioElement | null>(null);


    return (
        <div>
            <h1>Sound Effects</h1>

            <button onClick={() => editSoundPermission(true)}>
                Enable Sound
            </button>
            <button onClick={() => editSoundPermission(false)}>
                Disable Sound
            </button>

            <h2>Play Sounds</h2>
            <button onClick={playSound_Primary}>Play Primary Sound</button>
            <button onClick={playSound_Bell}>Play Bell Sound</button>
            <button onClick={playSound_Swipe}>Play Swipe Sound</button>
            <button onClick={playSound_Wind}>Play Wind Sound</button>
            <button onClick={playSound_Keyboard}>Play Keyboard Sound</button>
            <button onClick={playSound_Backspace}>Play Backspace Sound</button>
            <button onClick={playSound_Hover}>Play Hover Sound</button>

            <h2>Loading Sound</h2>
            <button onClick={() => playSound_Loading(loadingAudioRef)}>
                Play Loading Sound
            </button>
            <button onClick={() => pauseSound_Loading(loadingAudioRef)}>
                Pause Loading Sound
            </button>
        </div>
    );
}