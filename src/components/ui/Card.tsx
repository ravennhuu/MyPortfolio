import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  colSpan?: string; // e.g. "md:col-span-2"
  rowSpan?: string; // e.g. "md:row-span-2"
  clickable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", colSpan = "", rowSpan = "", clickable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          bg-white dark:bg-neutral-950 
          border border-neutral-150 dark:border-neutral-900 
          rounded-2xl p-4 sm:p-6 
          flex flex-col 
          relative overflow-hidden
          ${colSpan} ${rowSpan}
          ${
            clickable
              ? "cursor-pointer hover:scale-[1.01] active:scale-[0.99] hover:border-neutral-300 dark:hover:border-neutral-800 transition-all duration-300 ease-out"
              : "transition-all duration-300 ease-out"
          }
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
