import React, { useRef, useEffect } from 'react';

const BeatContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Any additional JavaScript logic can be added here if needed
  }, []);

  return (
    <div ref={containerRef} className=" mt-[-40px] w-56 h-16 relative">
      <div className="pulse"></div>
    </div>
  );
};

export default BeatContainer;