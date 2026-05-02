"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-2.5 rounded-lg font-medium text-sm md:text-base transition-colors duration-200",
        variant === "primary" && "bg-accent text-primary hover:bg-accent/90",
        variant === "outline" && "border border-accent text-accent hover:bg-accent hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
