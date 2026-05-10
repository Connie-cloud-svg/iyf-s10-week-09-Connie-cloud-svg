import { useState, useEffect } from 'react';

// Task 18.1 — useLocalStorage Hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Keep localStorage in sync whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error('Could not save to localStorage');
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;