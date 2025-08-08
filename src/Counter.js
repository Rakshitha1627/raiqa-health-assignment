import React, { useState } from "react";

function Counter({ onAdd }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToList = () => {
    if (count > 0) {
      onAdd(count);
      setCount(0);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span className="counter-value">{count}</span>
      <button onClick={increment}>+</button>
      <br />
      <button className="add-btn" onClick={addToList}>Add to List</button>
    </div>
  );
}

export default Counter;
