import React from 'react'
import '../../styles/graph.scss'

export const Graph = () => {
    return (
        <>
        <div className="graph-wrapper">
            <span className="part1"></span>
            <span className="part2"></span>
            <span className="part3"></span>
            <span className="part4"></span>
        </div>
        <div className="dollars-wrapper">
            <span>$0 -$30,000</span>
            <span>$30,000 - $200,000</span>
            <span>$200,000 -$1million</span>
            <span>$1million &amp; up</span>
        </div>
        </>
    )
}