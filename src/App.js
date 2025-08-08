import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import ListView from "./ListView";

function App() {
  const [numbers, setNumbers] = useState([]);

  // Load saved list from localStorage on first render
  useEffect(() => {
    const savedNumbers = localStorage.getItem("numbers");
    if (savedNumbers) {
      setNumbers(JSON.parse(savedNumbers));
    }
  }, []);

  // Save list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(numbers));
  }, [numbers]);

  const handleAdd = (num) => {
    setNumbers((prev) => {
      if (num > 0 && !prev.includes(num)) {
        return [...prev, num];
      }
      return prev;
    });
  };

  const handleReset = () => {
    setNumbers([]);
  };

  const handleRemove = (numToRemove) => {
    setNumbers(numbers.filter((num) => num !== numToRemove));
  };

  return (
    <div
      style={{
        backgroundColor: "#e8f0fe",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "18px" }}>
        Counter & List App
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "100%",
          maxWidth: "400px",
          marginTop: "8px",
        }}
      >
        <Counter onAdd={handleAdd} />
        <ListView
          items={numbers}
          onReset={handleReset}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
}
export default App;
export default App;
