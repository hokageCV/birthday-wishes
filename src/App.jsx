import { useState } from 'react';
import './App.css';
import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import Screen3 from './components/screen3';
import Screen4 from './components/screen4';

function App() {
    const [currentScreen, setCurrentScreen] = useState(1);


    const renderCurrentScreen = () => {
        switch (currentScreen) {
            case 1:
                return <Screen1 setCurrentScreen={setCurrentScreen} />;
            case 2:
                return <Screen2 setCurrentScreen={setCurrentScreen} />;
            case 3:
                return <Screen3 setCurrentScreen={setCurrentScreen} />;
            case 4:
                return <Screen4 />;
            default:
                return null;
        }
    };

    return <>{renderCurrentScreen()}</>;
}

export default App;
