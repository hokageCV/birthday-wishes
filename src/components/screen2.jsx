import giftImage from '../assets/gift.png';
import Zoom from 'react-reveal/Zoom';

export default function Screen2({ setCurrentScreen }) {
    return (
        <div className='screen-container gift-screen'>
            <div>
                <Zoom duration={1500}>
                    <h3 className='text-blur-bg'>Here's a gift for you</h3>
                </Zoom>
                <Zoom delay={2000}>
                    <h3 className='text-blur-bg'>Click on the gift to open it</h3>
                </Zoom>
            </div>
            <img className='gift-img' src={giftImage} onClick={() => setCurrentScreen(3)} />
        </div>
    );
}
