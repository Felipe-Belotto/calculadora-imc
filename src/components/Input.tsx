import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export default function Input({className,...props}: InputHTMLAttributes<HTMLInputElement> & {className: string}) {
  return(
    <input className={cn('block w-full border border-purple-500 rounded p-3 outline-none focus-within:bg-slate-100', className)} autoComplete="none" {...props} />
  )
}