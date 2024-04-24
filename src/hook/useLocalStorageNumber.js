import { useEffect, useState } from "react";

export default function useLocalStorageNumber(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const prev = Number(window.localStorage.getItem(key));
    const next = value;

    console.log(`prev: ${prev}`);
    console.log(`next: ${next}`);

    if (prev > next) {
      setValue(prev);
    } else if (prev < next) {
      window.localStorage.setItem(key, String(next));
    }
  }, [key, value]);

  return [value, setValue];
}
