"use client";
import React from "react";
import Button from "@/components/Button";

export default function GlobalError() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center py-[80px]">
        <div className="absolute filter  blur-[200px] w-[874px] h-[674px] flex-shrink-0 fill-[#010D50]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="874"
            height="737"
            viewBox="0 0 874 737"
            fill="none"
          >
            <path
              d="M437 874C678.348 874 874 678.348 874 437C874 195.652 678.348 0 437 0C195.652 0 0 195.652 0 437C0 678.348 195.652 874 437 874Z"
              fill="#010D50"
            />
          </svg>
        </div>
        <div className="relative flex flex-col items-center justify-center text-center px-4 py-16">
          <h1 className="text-[#0328EE] text-center text-[180px] max-sm:text-[120px] font-bold leading-[160px] max-sm:leading-[120px] mb-[15px] max-sm:mb-[32px] relative">
            404
          </h1>
          <h1 className="text-white text-center text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[36px] tracking-[-0.42px] mb-[16px]">
            Page Not Found
          </h1>
          <p className="text-white text-center text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] w-[557px] max-sm:w-[327px]  mb-[40px] max-sm:mb-[32px]">
            The page you&apos;re looking for can&apos;t be found. Double-check
            the URL and try again. Or click the button below.
          </p>
          <div className="flex sm:w-[365px] sm:h-[70px] flex-shrink-0 gap-[23px]  max-sm:flex-col max-sm:items-start max-sm:gap-4 max-sm:w-full">
            <Button label="View Pricing" className="max-sm:w-full" />
            <Button
              label="Go Home"
              variant="secondary"
              className="max-sm:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
