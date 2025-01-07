import React, { useState } from "react";
import "./App.css";

function App() {
  const [insects, setInsects] = useState([]);

  const addInsect = () => {
    const id = Math.random().toString(36).substr(2, 9);
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 30 + 20;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    setInsects([...insects, { id, x, y, size, color }]);
  };

  const removeInsect = (id) => setInsects(insects.filter((insect) => insect.id !== id));

  return (
    <div className="app">
      <button className="generate-button" onClick={addInsect}>Generate Insect</button>
      {insects.map(({ id, x, y, size, color }) => (
        <div
          key={id}
          className="insect"
          onClick={() => removeInsect(id)}
          style={{ top: y, left: x, width: size, height: size, backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default App;
