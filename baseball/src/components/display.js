import React from "react"

const Display = props => {
    return (
    <div className="display">
        <div className="balls">
            {props.balls} Balls
        </div>
        <div className="strikes">
            {props.strikes} Strikes
        </div>
        <div className="hits">
            {props.hits} Hits
        </div>
        <div className="outs">
            {props.outs} Outs
        </div>
    </div>
    )
}

export default Display