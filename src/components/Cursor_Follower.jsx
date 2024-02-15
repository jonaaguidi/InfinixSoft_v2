// CursorFollower.js
import { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
    className='blur-[56px]'
      style={{
        position: 'fixed',
        top: position.y - 100, // Adjust these values as needed
        left: position.x - 100,
        width: '200px',
        height: '200px',
        backgroundColor: 'rgba(219, 57, 87, 0.3)', // Adjust the opacity as needed
        borderRadius: '999px',
        pointerEvents: 'none', // Make sure it doesn't interfere with other elements
        zIndex: 0, 
    
      }}
    />
  );
};

export default CursorFollower;
