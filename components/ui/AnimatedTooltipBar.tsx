"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";
const techstack = [
//   {
//     id: 1,
//     name: "React",
//     designation: "",
//     image:
//       "/re.svg",
//   },
  {
    id: 2,
    name: "Next",
    designation: "",
    image:
      "next.svg",
  },
  {
    id: 3,
    name: "TailWindCSS",
    designation: "",
    image:
      "/tail.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    designation: "",
    image:
      "/ts.svg",
  },
  {
    id: 5,
    name: "AWS DynamoDB",
    designation: "",
    image:
      "/DynamoDB.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center gap-3 justify-center mb-10 w-11/12">
      <AnimatedTooltip items={techstack} />
    </div>
  );
}
