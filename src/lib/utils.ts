import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function convertToAscii(inputString: string) {
  // replace non ASCII characters with an empty string
  const asciiString = inputString.replace(/[^\x00-\x7F]+/g, "");
  
  // replace spaces with underscores
  return asciiString.replace(/\s+/g, "_");
}