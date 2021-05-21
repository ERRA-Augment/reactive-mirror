import React from 'react'
import Ticker from 'react-ticker'
import RSS from './RSS'

function NewsTicker() {
    return (

    <div className="p-2 text-4xl bg-blue-800 h-14">
        <Ticker offset="run-in" speed={5}>
        {({ index }) => (
            <>
                <div><RSS />{index}!</div>
                <img src="www.my-image-source.com/" alt=""/>
            </>
        )}
    </Ticker>
    </div>
    )
}

export default NewsTicker
