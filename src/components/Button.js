import React from "react";
import Link from "next/link";

/**
 * Button component with various style options
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Button text
 * @param {string} [props.variant="primary"] - Visual style: "primary" | "secondary" | "outline"
 * @param {string} [props.href] - Optional URL to make button a link
 * @param {function} [props.onClick] - Click handler function
 * @param {React.ReactNode} [props.leftIcon] - Optional icon before text
 * @param {React.ReactNode} [props.rightIcon] - Optional icon after text
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.fullWidth] - Whether button should take full width
 * @param {boolean} [props.disabled] - Disabled state
 */
const Button = ({
  label,
  variant = "primary",
  href,
  onClick,
  leftIcon,
  rightIcon,
  className = "",
  fullWidth = false,
  disabled = false,
  ...props
}) => {
  // Base button styles
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider rounded-[80px] transition-all duration-200 cursor-pointer px-[32px] py-[27px] text-center text-[16px] leading-[16px] tracking-[1.6px]";

  // Variants
  const variants = {
    primary: "bg-[#0328EE] hover:bg-[#0220c9] text-white",
    secondary: "bg-white/10 hover:bg-[#0328EE] text-white",
    outline: "bg-white hover:bg-[#031FB4] hover:text-white text-[#0328EE]",
  };

  // Combine classes
  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  // If href is provided, render a link, otherwise a button
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {leftIcon && <span className="button-icon">{leftIcon}</span>}
        {label}
        {rightIcon && <span className="button-icon">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
      {...props}
    >
      {leftIcon && <span className="button-icon">{leftIcon}</span>}
      {label}
      {rightIcon && <span className="button-icon">{rightIcon}</span>}
    </button>
  );
};

export default Button;
