"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Native HTML range slider styled to match the KC Mobile dark/gold theme.
 *
 * Pure controlled component. Accepts:
 *  - value, min, max, step, onValueChange
 *  - disabled, className passes through to the input
 *
 * The thumb / track are styled via dedicated CSS variables on the wrapper, so
 * the component cleanly inherits brand tokens without polluting global CSS.
 */
export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "type"> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
}

export function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  className,
  disabled,
  ...rest
}: SliderProps) {
  // Compute fill % for the track gradient (from start → thumb position).
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("relative flex w-full items-center", className)}>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(e) => onValueChange?.(Number(e.target.value))}
        className={cn(
          "kc-slider h-7 w-full cursor-pointer appearance-none bg-transparent focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
        )}
        style={{
          // Compose a CSS variable so the WebKit/Firefox track styles below can
          // both consume the same value.
          ["--kc-slider-pct" as string]: `${pct}%`,
        }}
        {...rest}
      />
      <style>{`
        .kc-slider {
          /* Track */
        }
        .kc-slider::-webkit-slider-runnable-track {
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(
            to right,
            var(--kc-gold) 0%,
            var(--kc-gold) var(--kc-slider-pct),
            color-mix(in srgb, var(--kc-line) 70%, transparent) var(--kc-slider-pct),
            color-mix(in srgb, var(--kc-line) 70%, transparent) 100%
          );
        }
        .kc-slider::-moz-range-track {
          height: 6px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--kc-line) 70%, transparent);
        }
        .kc-slider::-moz-range-progress {
          height: 6px;
          border-radius: 999px;
          background: var(--kc-gold);
        }
        .kc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 999px;
          background: var(--kc-gold);
          border: 2px solid var(--kc-black);
          box-shadow: 0 0 0 1px var(--kc-gold), 0 2px 6px rgba(0, 0, 0, 0.4);
          margin-top: -6px;
          cursor: grab;
          transition: transform 120ms ease;
        }
        .kc-slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 999px;
          background: var(--kc-gold);
          border: 2px solid var(--kc-black);
          box-shadow: 0 0 0 1px var(--kc-gold), 0 2px 6px rgba(0, 0, 0, 0.4);
          cursor: grab;
          transition: transform 120ms ease;
        }
        .kc-slider:focus-visible::-webkit-slider-thumb,
        .kc-slider:hover::-webkit-slider-thumb {
          transform: scale(1.12);
        }
        .kc-slider:focus-visible::-moz-range-thumb,
        .kc-slider:hover::-moz-range-thumb {
          transform: scale(1.12);
        }
      `}</style>
    </div>
  );
}
