"use client";

import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={id}
        className={cn(
          "rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent",
          className
        )}
        {...props}
      />
    </div>
  );
}
