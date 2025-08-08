import React, { useState } from "react";

function ListView({ items, onReset, onRemove }) {
  const [isAscending, setIsAscending] = useState(true);

  const toggleSort = () => {
    setIsAscending(!isAscending);
  };

  const sortedItems = [...items].sort((a, b) =>
    isAscending ? a - b : b - a
  );

  return (
    <div
      style={{
        background: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
        width: "350px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "700", margin: 0 }}>
          Numbers List
        </h3>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={onReset}
            style={{
              background: "white",
              color: "red",
              border: "1px solid red",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "red";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "red";
            }}
          >
            Reset
          </button>

          <button
            onClick={toggleSort}
            style={{
              background: "#2979ff",
              color: "white",
              border: "none",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "13px",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#1c5ed6")}
            onMouseOut={(e) => (e.target.style.background = "#2979ff")}
          >
            Sort {isAscending ? "↓" : "↑"}
          </button>
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {sortedItems.map((num, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 12px",
              marginBottom: "6px",
              borderRadius: "6px",
              background: "#f8f8f8",
              fontSize: "14px",
              transition: "background-color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#f0f0f0")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f8f8f8")}
          >
            <span>
              {num}{" "}
              <small style={{ color: "#888", fontSize: "12px", marginLeft: "6px" }}>
                #{index + 1}
              </small>
            </span>
            <button
              onClick={() => onRemove(num)}
              style={{
                background: "transparent",
                border: "none",
                color: "#888",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#ff4d4d")}
              onMouseOut={(e) => (e.target.style.color = "#888")}
              aria-label={`Remove ${num}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "8px",
          padding: "8px",
          fontSize: "13px",
          color: "#2979ff",
          background: "#eaf2ff",
          borderRadius: "6px",
          textAlign: "center",
        }}
      >
        Total numbers: {items.length}
      </div>
    </div>
  );
}

export default ListView;
