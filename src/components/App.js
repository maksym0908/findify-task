import React from 'react'
import '../styles/index.scss'
import { SliderComponent } from './slider/slider'
import { SwitchComponent } from './switch/switch'

export const App = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h1>What are your monthly online sales?</h1>
                <span className="title">(approximately)</span>
                <SliderComponent /> 
            </div>
            <SwitchComponent />
        </div>
    )
}