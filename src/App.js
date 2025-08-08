import React, { useState } from "react";
import Counter from "./Counter";
import ListView from "./ListView";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const addNumber = (num) => {
    if (!list.includes(num)) {
      setList([...list, num]);
    }
  };

  const resetList = () => {
    setList([]);
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>Counter & List App</h2>
        <Counter onAdd={addNumber} />
      </div>

      <div className="card">
        <ListView items={list} onReset={resetList} />
      </div>
    </div>
  );
}

export default App;
