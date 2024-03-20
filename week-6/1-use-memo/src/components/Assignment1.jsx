import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  const [counter, setCounter] = useState(0);
  // Your solution starts here

  const expensiveValue = useMemo(() => {
    console.log("hello inside useMemo ");
    let value = 1;
    for (let i = 1; i <= input; i++) {
      value = value * i;
    }
    return value;
  }, [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        click me {counter}
      </button>
    </div>
  );
}
