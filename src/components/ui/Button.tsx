import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "px-4 py-2 rounded-lg text-sm font-medium transition-all";

  const styles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    outline: "border border-white/30 text-white hover:bg-white/10",
  };

  return (
    <button
      {...props}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
