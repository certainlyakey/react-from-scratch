import React, { useState } from 'react'
import './style.css'

export const Counter = () => {
    const [inputValue, setInputValue] = useState(4)

    return (
        <div>
            <h3>dd</h3>
            <br />
            <div>
                <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
            </div>
        </div>
    )
}
