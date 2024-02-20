// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setIsLoaded(true)
            setImage(data.message)
        })
    }, [])

    return (
        <div>
            {isLoaded ? (
                <img src={image} alt="A Random Dog" />
            ) : (
                <p>Loading...</p>    
            )}
        </div>
    )
}

export default App