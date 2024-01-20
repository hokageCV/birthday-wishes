import giftImage from '../assets/gift.png'
export default function Screen2({ setCurrentScreen }) {
    return (
        <div className='screen-container gift-screen'>
            <div>
                <p>Here's a gift for you</p>
                <p>Click on the gift to open it</p>
            </div>
            <img
                className='gift-img'
                src={giftImage}
                onClick={() => setCurrentScreen(3)}
            />
        </div>
    );
}
