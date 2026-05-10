import { useState } from 'react';

// Task 18.1 — useToggle Hook
// Returns [value, { toggle, setTrue, setFalse }]
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle   = () => setValue(v => !v);
  const setTrue  = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, { toggle, setTrue, setFalse }];
}

export default useToggle;

