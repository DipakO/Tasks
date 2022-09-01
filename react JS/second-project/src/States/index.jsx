import "./states.css"

import {useState}  from "react";
// const { useState } = require("react");



const State = () =>{
    const [name , setName] = useState("Dipti");
    const[counter,setData] = useState(50);
    const ChangeData = () =>{
        setName("Mehajabeen")
        }

    const Increase = () =>{
        setData(counter+1)
    }
    const Decrease = () =>{
        setData(counter-1)
    }
        
    
    // const count = ()=>{
    //     counter+1
    // }
    return(
        
        
        <div id="states">
        <h2>The Name Is : {name}</h2>
        <h3>{counter}</h3>
        <button id="btn" onClick={ChangeData}> Change</button>
        <button id="btn" onClick={Increase}>Increase Counter</button>
        <button id="btn" onClick={Decrease}>Decrease Counter</button>
        </div>
    );
}

export default State;