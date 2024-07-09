"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";


export function AnimatedTooltipPreview({ techstack }: { techstack: any[] }) {
  return (
    <div className="flex flex-row items-center gap-3 justify-center mb-10 w-11/12">
      <AnimatedTooltip items={techstack} />
    </div>
  );
}
