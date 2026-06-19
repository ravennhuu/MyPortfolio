import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "outline" | "filled" | "dot";
  className?: string;
  dotColor?: string; // e.g. "bg-green-500"
}

export const Badge = ({
  children,
  variant = "outline",
  className = "",
  dotColor = "bg-emerald-500",
  ...props
}: BadgeProps) => {
  const baseStyle = "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-full font-medium transition-colors";
  
  const variants = {
    outline: "border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-50/50 dark:bg-neutral-900/30",
    filled: "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900",
    dot: "border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-950",
  };

  return (
    <span
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {variant === "dot" && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
