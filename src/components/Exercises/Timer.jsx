import { useState, useEffect } from 'react';

// Timer using useEffect with interval and cleanup
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Task 17.1 — useEffect with setInterval and cleanup
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]); 

  const formatTime = (s) => {
    const mins = String(Math.floor(s / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="exercise-box">
      <h3>⏱ Timer — Day 1</h3>
      <p className="counter-display">{formatTime(seconds)}</p>
      <div className="counter-buttons">
        <button
          className="btn btn-primary btn-small"
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="btn btn-secondary btn-small"
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="btn btn-danger btn-small"
          onClick={() => { setIsRunning(false); setSeconds(0); }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;