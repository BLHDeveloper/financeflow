import React from 'react';

const LoadingSpinner = ({ message = "Chargement..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-t-[#0328EE] border-r-[#0328EE] border-b-[#0328EE] border-l-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-white text-lg">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
