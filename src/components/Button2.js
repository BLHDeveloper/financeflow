import React from "react";

const Button = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex justify-center items-center gap-[4px] px-[32px] py-[27px] rounded-[80px] bg-[rgba(255,255,255,0.10)] hover:bg-[#0328EE] cursor-pointer ${className}`}
    >
      <span className="text-white text-center font-['DM_Sans'] text-[16px] font-bold leading-[16px] tracking-[1.6px] uppercase">
        {label}
      </span>
    </button>
  );
};

export default Button;
