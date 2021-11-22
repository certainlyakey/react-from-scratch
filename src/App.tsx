import React from 'react'
import { MyJSComponent } from './components/MyJSComponent'
import { Counter } from './components/Counter'

export function App(): JSX.Element | null {
    return (
        <div>
            <h1>Hello world!</h1>
            <MyJSComponent />
            <Counter />
        </div>
    )
}
