import React, { useState, useEffect } from 'react';
import certificateData from "../utils/certificate";

const Certificate = () => {
  const certificates = certificateData();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (selectedCertificate) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [selectedCertificate]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCertificate(null);
      setIsClosing(false);
    }, 300); // Duration of the slide-down animation
  };

  return (
    <div className="rounded-lg border p-3 flex items-center flex-col">
      <h1 className="text-2xl font-bold mb-4 text-[#D1D1D1] self-start">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="group relative rounded-lg w-full h-48 bg-cover bg-center flex items-end p-4 text-white font-bold transition-transform duration-300 z-10"
            style={{ backgroundImage: `url(${certificate.urlImg})` }}
          >
            <div className="rounded-lg absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 bg-black bg-opacity-35 p-2 rounded w-80">
              <div className="font-bold text-[15px]">{certificate.title}</div>
              <button
                onClick={() => setSelectedCertificate(certificate)}
                className="bg-[#574949] text-white px-4 py-2 rounded mt-2 inline-block hover:bg-[#313131] transition-colors duration-300"
              >
                See Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="fixed ttl:w-[375px] inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300" onClick={handleClose}>
          <div className={`bg-[#828282] p-5 rounded-lg shadow-lg relative max-w-lg w-full transition-transform duration-300 ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`} onClick={(e) => e.stopPropagation()}>
            <button className="absolute mt-[-8px] mr-[-8px] top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedCertificate.urlImg} alt={selectedCertificate.title} className="w-full h-auto mb-4" />
            <p className="text-center underline">
              <a href={selectedCertificate.credential} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition-colors duration-300">
                Credential
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;