import birthdayAudio from '../assets/birthday.mp3';
import birthdayVideo from '../assets/birthdayVideo.mp4';
export default function Screen4() {
    return (
        <div className='screen-container media-screen'>
            <h1 className='text-blur-bg glow'>Happy Birthday Suhaan </h1>
            <audio src={birthdayAudio} autoPlay />
            <div className='video-div'>
                <video src={birthdayVideo} autoPlay muted loop />
            </div>
        </div>
    );
}
