import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const currentTime = new Date().toLocaleTimeString('en-GB', options);
      setTime(currentTime);
    };

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-baseline ttl:w-[332px] tdn:w-[277px] justify-center w-full pdl:w-[345px] borderx rounded-lg gap-2">
      <div className="text-6xl pdl:text-4xl font-mono text-[#828282]">
        {time}
      </div>
      <h3 className='font-bold text-[#828282]'>UTC+7</h3>
    </div>
  );
};

export default Clock;