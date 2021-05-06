import React from 'react'
import Ticker from 'react-ticker'

function NewsTicker() {
    return (

    <div class="bg-blue-800 h-16 p-2 text-5xl">
        <Ticker offset="run-in" speed={2}>
        {({ index }) => (
            <>
                <h1>This is the Headline of element #{index}!</h1>
                <img src="www.my-image-source.com/" alt=""/>
            </>
        )}
    </Ticker>
    </div>
    )
}

export default NewsTicker
