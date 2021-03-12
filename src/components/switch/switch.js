import React from 'react'
import logo from './logo.png'
import '../../styles/switch.scss'

export const SwitchComponent = () => {

    const [enabled, setEnabled] = React.useState(false)
    const inputRef = React.createRef()
    const spanRef = React.createRef()
    
    const handleInput = () => {
        if (enabled === true) {
            setEnabled(false)
            spanRef.current.style.background = '#9c9c9c'
        } else {
            setEnabled(true)
            spanRef.current.style.background = '#3eb281'
        } 
    }
    
    return (
        <div className="switch-container">
            <div className="switch-wrapper">
                <img src={logo} alt="logo icon" />
                <h2>YOTPO</h2>
                <label className="switch-box">
                    <input checked={enabled} onChange={e => handleInput(e)} ref={inputRef} type="checkbox" />
                    <span ref={spanRef} className="switch round"></span>
                </label>
            </div>
        </div>
    )
}