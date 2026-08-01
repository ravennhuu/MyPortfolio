import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "outline" | "filled" | "dot";
  className?: string;
  dotColor?: string; // e.g. "bg-green-500"
  icon?: React.ReactNode;
}

export const Badge = ({
  children,
  variant = "outline",
  className = "",
  dotColor = "bg-emerald-500",
  icon,
  ...props
}: BadgeProps) => {
  const hasRounded = className.includes("rounded");
  const baseStyle = `group relative inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium transition-all duration-300 select-none cursor-default hover:-translate-y-0.5 ${
    hasRounded ? "" : "rounded-full"
  }`;

  const variants = {
    outline:
      "border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/90 dark:hover:bg-neutral-800/80 hover:shadow-xs",
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
      {icon && (
        <span className="inline-flex items-center justify-center mr-1.5 shrink-0 sm:max-w-0 sm:opacity-0 sm:-ml-1 sm:mr-0 sm:group-hover:max-w-[20px] sm:group-hover:opacity-100 sm:group-hover:ml-0 sm:group-hover:mr-1.5 sm:transition-all sm:duration-300 sm:ease-out sm:overflow-hidden">
          <span className="flex items-center justify-center text-sm sm:scale-50 sm:group-hover:scale-100 sm:transition-transform sm:duration-300 sm:ease-out">
            {icon}
          </span>
        </span>
      )}
      {variant === "dot" && (
        <span className="relative flex h-2 w-2 mr-1.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
