import { useWindowSize } from '@uidotdev/usehooks';
import Confetti from 'react-confetti';
import Tada from 'react-reveal/Tada';

export default function Screen3({ setCurrentScreen }) {
    const size = useWindowSize();

    return (
        <div className='screen-container gift-screen'>
            <Tada delay={1000}>
                <p>
                    Have a nice day, &nbsp;
                    <span onClick={() => setCurrentScreen(4)}>bye bye 👋</span>
                </p>
            </Tada>
            <Confetti width={size.width} height={size.height} />
        </div>
    );
}
