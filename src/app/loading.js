import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#010D50]">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#0328EE]"></div>
        <p className="mt-4 text-white text-lg">Chargement en cours...</p>
      </div>
    </div>
  );
}
