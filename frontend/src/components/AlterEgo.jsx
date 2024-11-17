import React, { useState } from 'react';

const AlterEgo = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'One',
            content: (
                <div className='text-[#939393] flex flex-col gap-2 h-[120px] pdl:h-[220px] ttl:h-[240px] tdn:h-[280px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque consequatur eius ea. Dignissimos quam ut impedit qui suscipit, at vitae! Repellendus repudiandae deserunt dignissimos architecto amet maiores aliquid pariatur.</p>
                    <h3 className='flex flex-row gap-2'><span className='font-bold text-[#D1D1D1]'>[The Smart]</span>
                        <img className='w-5 mt-[1.8px]' src='/m-symbol.svg' /></h3>
                </div>
            ),
        },
        {
            title: 'Two',
            content: (
                <div className='text-[#939393] flex flex-col gap-2 h-[120px] pdl:h-[220px] ttl:h-[240px] tdn:h-[280px]'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum voluptatum maxime, sequi quia quis nulla aspernatur velit quibusdam temporibus culpa placeat vel. Accusamus tempora, consequuntur magnam corrupti laboriosam facere eius.</p>
                    <p className='flex flex-row gap-2'><span className='font-bold text-[#D1D1D1]'>[The Programmer]</span>
                        <img className='w-5 mt-[1.8px]' src='/m-symbol.svg' /></p>
                </div>
            ),
        },
        {
            title: 'Three',
            content: (
                <div className='text-[#939393] flex flex-col gap-2 h-[120px] pdl:h-[220px] ttl:h-[240px] tdn:h-[280px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit porro dicta animi ullam expedita incidunt iste voluptates rem provident doloribus tempore aliquam sapiente mollitia, autem adipisci. Incidunt, libero porro.</p>
                    <p className='flex flex-row gap-2'>
                        <span className='text-[#D1D1D1] font-bold'>[The Writer]</span>
                        <img className='w-7 mt-[2.2px]' src='/mf-symbol.svg' />
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full  mx-auto border rounded-lg p-3">
            <h1 className='text-[#D1D1D1] text-2xl font-bold'>Alter Ego</h1>
            <div className="flex justify-center border-b pdl:mt-6">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`font-bold px-4 py-2 focus:outline-none transition-colors duration-300 rounded-t-lg ${activeTab === index ? 'bg-[#313131] text-[#FFFFFF]' : 'bg-white text-black'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className=" p-4 transition-opacity duration-300 ease-in-out">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default AlterEgo;