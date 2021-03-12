import React from 'react'
import '../../styles/slider.scss'
import { Graph } from './graph'

export class SliderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderValue: 1,
            maxSliderValue: 100
        }
        this.inputRef = React.createRef()
        this.bubleRef = React.createRef()
        this.handleSliderValue = this.handleSliderValue.bind(this)
    }
    handleSliderValue = e => {
        this.setState({ sliderValue: e.target.value })
        let calculated = Number(((e.target.value - e.target.min) * 100) / (e.target.max - e.target.min))
        this.bubleRef.current.style.left = `calc(${calculated}% + (${8 - calculated * 0.25}px) - 5px)`
    }

    formatNumber(num) {
        if (num < 26) {
            return num * (30000 / 25)
        } else if (num >= 26 && num < 51) {
            return num * (200000 / 50)
        } else if (num >= 51 && num < 76) {
            return Math.ceil(num * (1000000 / 75))
        } else if (num >= 76 && num < 101) {
            return Math.ceil(num * (2000000 / 100))
        }
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    render() {

        return (
            <div className="slider">
                <span htmlFor="range" ref={this.bubleRef} className="bubble">
                    <section >
                        <span>
                            {`$ ${this.formatNumber(this.state.sliderValue)}`}
                        </span>
                    </section>
                </span>
                <input
                    onChange={this.handleSliderValue}
                    ref={this.inputRef}
                    type="range"
                    min="1"
                    max={this.state.maxSliderValue}
                    defaultValue={this.state.sliderValue} />
                <Graph />
            </div>
        )
    }
}