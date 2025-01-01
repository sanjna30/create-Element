import React, { useEffect, useState } from 'react';
import "./App.css";
const InsectGenerator = () => {
  const [insects, setInsects] = useState([]);

  useEffect(() => {
    
    const insectCount = 10; 
    const generatedInsects = [];
    for (let i = 0; i < insectCount; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      generatedInsects.push({ x, y });
    }
    setInsects(generatedInsects);
  }, []);

  return (
    <div className="insect-container">
      {insects.map((insect, index) => (
        <div
          key={index}
          className="insect"
          style={{ left: `${insect.x}px`, top: `${insect.y}px` }}
        >
          🦗
        </div>
      ))}
    </div>
  );
};

export default App;
