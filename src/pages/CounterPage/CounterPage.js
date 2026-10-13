import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
import { useState, useEffect } from "react"

// TODO: Use useState to manage counter
// TODO: Use useEffect to show a message when counter > 5
// TODO: Use useEffect to reset counter to 0 if it becomes negative
// TODO: Pass counter value to CounterDisplay as a prop
// TODO: Pass increment/decrement functions to CounterControls as props
function CounterPage() {
    const [counter,setCounter] = useState(0);
    const [msg,setMsg] = useState("");

    useEffect(() => {
        if (counter>5) {
            setMsg("You've clicked more than 5 times!")
        } else {
            setMsg("");
        }
        if (counter<0) {
            setCounter(0);
        }
    },[counter])

    const increment = () => {
        setCounter((prevCounter) => prevCounter+1);
    }
    const decrement = () => {
        setCounter((prevCounter) => prevCounter-1);
    }
  return (
    <div>
      <h1>Counter Page</h1>
      <CounterDisplay counter={counter}/>
      <CounterControls 
        increment={increment}
        decrement={decrement}
        />
      {msg && <p>{msg}</p>/* TODO: Show a message when counter > 5 */}
    </div>
  );
}

export default CounterPage;