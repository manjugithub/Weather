import { useState, useEffect } from 'react';

export function useDebounce(value: String, delay: number){
  const [debouncedValue, setDebouncedValue] = useState<String>(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  
  return debouncedValue;
}