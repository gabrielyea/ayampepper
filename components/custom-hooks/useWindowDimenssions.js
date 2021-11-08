import { useEffect, useState } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const { innerWidth: x, innerHeight: y } = window;
    setWindowDimensions({ x, y });
    function handleResize() {
      setWindowDimensions({ x, y });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
