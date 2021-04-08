import { useState, useEffect } from 'react';

const hasFocus = () => typeof document !== 'undefined' && document.hasFocus();

const useWindowFocus = () => {
  const [focused, setFocused] = useState(hasFocus); // focus for first render

  useEffect(() => {
    setFocused(hasFocus()); // focus for additional renders

    const checkFocus = () => setFocused(hasFocus());

    window.addEventListener('focus', checkFocus);
    window.addEventListener('blur', checkFocus);

    return () => {
      window.removeEventListener('focus', checkFocus);
      window.removeEventListener('blur', checkFocus);
    };
  }, []);

  return focused;
};

export default useWindowFocus;
