import React from "react";

// TODO: Receive counter value as prop and display it
// Description: Shows the current value of the counter
function CounterDisplay({ counter }) {
  return (
  <div>
    <h2>Counter: {counter}</h2>
  </div>
  );
}

export default CounterDisplay;