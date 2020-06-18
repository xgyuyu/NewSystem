import React, { useState, useEffect, Fragment } from "react"

function App() {
    return (
      <div>哈哈哈</div>
    )
}


export default function Functional() {
    const [randomNumber, setRandomNumber] = useState()
    const [isLoading, setIsLoading] = useState(false)

    function fetchRandom() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setRandomNumber((Math.random() * 100) | 0)
        }, 2000)
    }

    function handleClick() {
        if (isLoading) return
        fetchRandom()
    }

    useEffect(() => {
        document.title = `randomNumber  is ${randomNumber}`
    }, [randomNumber])

    return (
        <div>
            <h1>functional component</h1>
            {randomNumber !== undefined ? <Fragment>randomNumber: {randomNumber}</Fragment> : null}
            <br />
            <button disabled={isLoading} onClick={handleClick}>
                {isLoading ? "loading..." : "refresh"}
            </button>
        </div>
    )
}

