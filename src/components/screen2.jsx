import giftImage from '../assets/gift.png';
import Zoom from 'react-reveal/Zoom';

export default function Screen2({ setCurrentScreen }) {
    return (
        <div className='screen-container gift-screen'>
            <div>
                <Zoom duration={1500}>
                    <p>Here's a gift for you</p>
                </Zoom>
                <Zoom delay={2000}>
                    <p>Click on the gift to open it</p>
                </Zoom>
            </div>
            <img className='gift-img' src={giftImage} onClick={() => setCurrentScreen(3)} />
        </div>
    );
}
