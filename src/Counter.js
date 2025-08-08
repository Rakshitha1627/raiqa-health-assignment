import React, { useState } from "react";

function Counter({ onAdd }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const addToList = () => {
    if (count > 0) {
      onAdd(count);
      setCount(0);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "320px",
        width: "100%",
        margin: "0 auto",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "12px" }}>Counter</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          marginBottom: "12px",
        }}
      >
        <button
          onClick={decrement}
          disabled={count === 0}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #ccc",
            backgroundColor: count > 0 ? "#f0f0f0" : "#e8e8e8",
            cursor: count > 0 ? "pointer" : "not-allowed",
            fontSize: "18px",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) =>
            count > 0 && (e.target.style.backgroundColor = "#e6e6e6")
          }
          onMouseOut={(e) =>
            count > 0 && (e.target.style.backgroundColor = "#f0f0f0")
          }
        >
          –
        </button>

        <span style={{ fontSize: "26px", fontWeight: "700" }}>{count}</span>

        <button
          onClick={increment}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #ccc",
            backgroundColor: "#f0f0f0",
            cursor: "pointer",
            fontSize: "18px",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e6e6e6")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
        >
          +
        </button>
      </div>

      <button
        onClick={addToList}
        style={{
          backgroundColor: "#2979ff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          fontSize: "14px",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1c5ed6")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2979ff")}
      >
        Add to List
      </button>
    </div>
  );
}

export default Counter;
