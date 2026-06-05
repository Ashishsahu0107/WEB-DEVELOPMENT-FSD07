import { useState } from 'react'

const Hero = () => {
    const [ userName, setUserName ] = useState("");
    const [ city, setCity ] = useState("");
    return (
        <>
            <input type="text" name='userName' onChange={(e) => setUserName(e.target.value)}/>
            <div >
                This is my name {userName}
            </div>
            <div>
                This is my city {city}
            </div>
            <input type="text" name='city' onChange={(element) => setCity(element.target.value)} />
        </>
    )
}

export default Hero