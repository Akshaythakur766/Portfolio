import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export default function HeroOrbit({
  children,
  size,
  rotation,
  orbitDuration,
  shouldSpin =false,
  spinDuration,
  shouldOrbit = false
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldSpin?:boolean
  spinDuration?:string
  shouldOrbit?:boolean
}>) {
  return (
    <div className="absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2   ">
      <div className={twMerge(shouldOrbit === true && "animate-spin ")} style={{animationDuration:orbitDuration}} >
      <div
        className="flex items-start justify-start  "
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div className={twMerge(shouldSpin===true && "animate-spin")} style={{animationDuration:spinDuration}} >
        <div
          className=" inline-flex  "
          style={{ transform: `rotate(${rotation * -1})deg` }}
        >
          {children}
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
