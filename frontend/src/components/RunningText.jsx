import React from 'react';

const RunningText = () => {
  return (
    <div className="w-full pdl:w-[345px] tdn:w-[277px] ttl:w-[332px] overflow-hidden h-10 py-4 relative borderx rounded-lg">
      <div className="whitespace-nowrap animate-marquee text-lg mt-[-10px] font-semibold text-[#D1D1D1] absolute flex">
        <div className="flex">
          <span className="mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quos velit ipsa placeat eveniet officia similique ad voluptate doloribus illo cum, voluptatibus tenetur, consequatur, inventore delectus perferendis at ratione provident.</span>
        </div>
      </div>
    </div>
  );
};

export default RunningText;