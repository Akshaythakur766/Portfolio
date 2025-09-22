import { cn } from "@/utils/cn";
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "destructive" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        {
          // Variants
          "bg-primary text-white hover:bg-primary/90": variant === "default",
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
            variant === "outline",
          "bg-destructive text-white hover:bg-destructive/90":
            variant === "destructive",
          "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          "underline-offset-4 hover:underline text-primary": variant === "link",

          // Sizes
          "h-9 px-4 py-2 text-sm": size === "sm",
          "h-10 px-5 py-2.5 text-base": size === "md",
          "h-11 px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
