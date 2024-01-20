export default function Screen2({setCurrentScreen}){
    return (
        <div className='screen-container gift-screen'>
            <p>here's a gift for you</p>
            <p>click on the gift</p>
            <button onClick={()=>setCurrentScreen(3)}>gift</button>
        </div>
    )
}
