import React from "react"
import useInput from "./useInput.js"
import Display from "./display.js"

const Dashboard = () => {
 const [balls, setBall, handleBall] = useInput(0)
 const [strikes, setStrike, handleStrike] = useInput(0)
 const [fouls, setFoul, handleFoul] = useInput(0)
 const [hits, setHit, handleHit] = useInput(0)
 const [outs, setOut, handleOut] = useInput(0)

    return (
    <div className="display-page">
        <div>
        <Display balls={balls} strikes={strikes} hits={hits} outs={outs}/>
        </div>
        
        <div className="button-container">
            <div className="strike-button-container">
                <button className="strike-button button" onClick = {() => {
                if (strikes < 2){
                    setStrike(strikes + 1)
                } else if (outs < 2) {
                    setOut(outs+1)
                    setStrike(0)
                } else {
                    setOut(0)
                    setStrike(0)
                }
                
                }
                }   > 
                Strike </button>
            </div>
            <div className="ball-button-container">
                <button className="ball-button button" onClick = {() => {
                if (balls < 3){
                    setBall(balls + 1)
                } else {
                    setBall(0)
                }}
                }> 
                Ball </button>
            </div>
            <div className="foul-button-container">
                <button className="foul-button button" onClick = {() => {
                if (strikes < 2){
                    setStrike(strikes + 1)
                } else {
                    setStrike(2)
                }}
                }> 
                Foul Ball </button>
            </div>
            <div className="hit-button-container">
                <button className="hit-button button" onClick = {() => {
                setStrike(0);
                setBall(0);
                setHit(hits +1);
                }}> 
                Hit </button>
            </div>
            <div className="out-button-container">
                <button className="out-button button" onClick = {() => {
                if (outs < 2) {
                    setOut(outs+1)
                } else {
                    setOut(0)
                }
                
                }}> 
                Out </button>
            </div>
        
        </div>
    </div>
    )
}

export default Dashboard