import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// twMerge helps merge conflicting Tailwind classes (like px-4 vs px-6)
export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}
