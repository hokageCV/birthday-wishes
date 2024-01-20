import { useState, useEffect } from 'react';

const TEXT_CHANGE_DELAY = 5;
const NEXT_SCREEN_CHANGE_DELAY = 5;
const INITIAL_TEXT = 'Hi, Suhaan';
const NEW_TEXT = 'Its your birthday!';

export default function Screen1({ setCurrentScreen }) {
    const [displayText, setDisplayText] = useState(INITIAL_TEXT);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const changeText = async () => {
        await delay(TEXT_CHANGE_DELAY * 1000);
        setDisplayText(NEW_TEXT);
    };

    const changeScreen = async () => {
        await delay(NEXT_SCREEN_CHANGE_DELAY * 1000);
        setCurrentScreen(2);
    };

    useEffect(() => {
        changeText().then(changeScreen);
    }, []);

    return (
        <div className='screen-container'>
            <h1>{displayText}</h1>
        </div>
    );
}
