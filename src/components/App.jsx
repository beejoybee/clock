import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function getTime() {
    const newNow = new Date().toLocaleTimeString();
    setTime(newNow);
    setInterval(getTime, 1000);
  }

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
