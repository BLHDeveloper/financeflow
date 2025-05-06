import React from 'react';
import Button from '../Button';

const ErrorDisplay = ({ message, onRetry, title = "Une erreur est survenue", className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-10 bg-[#010D50] rounded-[20px] text-center ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="64" 
        height="64" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-red-500 mb-4"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white mb-6">{message}</p>
      {onRetry && (
        <Button 
          label="Réessayer" 
          onClick={onRetry} 
          className="mt-4"
        />
      )}
    </div>
  );
};

export default ErrorDisplay;
