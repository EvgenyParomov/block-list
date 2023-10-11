import { useEffect, useState } from "react";

export function useDebauncedValue<T>(value: T, timeout = 0) {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauncedValue(value);
    }, timeout);

    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debauncedValue;
}
