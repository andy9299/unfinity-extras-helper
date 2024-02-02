import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultValue) {

  const [state, setState] = useState(() => {
    let val = window.localStorage.getItem(key) || defaultValue;
    return val;
  });

  useEffect(() => {
    if (state) {
      window.localStorage.setItem(key, state);
    }
    else {
      window.localStorage.removeItem(key);
    }
  }, [key, state]);
  return [state, setState];

}

export default useLocalStorageState;