import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import ListView from "./ListView";

function App() {
  const [numbers, setNumbers] = useState([]);

  // load numbers from localStorage when component mounts
  useEffect(() => {
    const savedNumbers = localStorage.getItem("numbers");
    if (savedNumbers) {
      try {
        setNumbers(JSON.parse(savedNumbers));
      } catch (e) {
        console.error("Failed to parse saved numbers:", e);
      }
    }
  }, []);

  // save to localStorage whenever numbers array changes
  useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(numbers));
  }, [numbers]);

  const addNumber = (num) => {
    setNumbers(prevNumbers => {
      // only add positive numbers that aren't already in the list
      if (num > 0 && !prevNumbers.includes(num)) {
        return [...prevNumbers, num];
      }
      return prevNumbers;
    });
  };

  const resetList = () => {
    setNumbers([]);
  };

  const removeNumber = (numberToRemove) => {
    setNumbers(prevNumbers => 
      prevNumbers.filter(num => num !== numberToRemove)
    );
  };

  const containerStyle = {
    backgroundColor: "#e8f0fe",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    maxWidth: "400px",
    marginTop: "8px"
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "18px"
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        Counter & List App
      </h2>

      <div style={contentStyle}>
        <Counter onAdd={addNumber} />
        <ListView
          items={numbers}
          onReset={resetList}
          onRemove={removeNumber}
        />
      </div>
    </div>
  );
}
export default App;

export default App;