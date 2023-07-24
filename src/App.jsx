import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded p-6">
        <h1 className="text-3xl font-bold mb-4">Click Counter</h1>
        <p className="text-2xl mb-2">Count: {count}</p>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={handleDecrement}
          >
            Subtract
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 w-full bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
