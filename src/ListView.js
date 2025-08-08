import React, { useState } from "react";

function ListView({ items, onReset }) {
  const [isAscending, setIsAscending] = useState(true);

  const toggleSort = () => {
    setIsAscending(!isAscending);
  };

  const sortedItems = [...items].sort((a, b) =>
    isAscending ? a - b : b - a
  );

  return (
    <div>
      <button className="reset-btn" onClick={onReset}>Reset</button>
      <button className="sort-btn" onClick={toggleSort}>
        Sort {isAscending ? "↓" : "↑"}
      </button>

      <ul className="list-container">
        {sortedItems.map((num, index) => (
          <li key={index} className="list-item">{num}</li>
        ))}
      </ul>

      <p className="total-text">Total numbers: {items.length}</p>
    </div>
  );
}

export default ListView;
