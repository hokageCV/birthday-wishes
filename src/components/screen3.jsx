export default function Screen3({ setCurrentScreen }) {
    return (
        <div className='screen-container gift-screen'>
            <p>
                Have a nice day,
                <span onClick={() => setCurrentScreen(4)}>bye bye 👋</span>
            </p>
        </div>
    );
}
