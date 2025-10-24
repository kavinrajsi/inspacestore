// components/layout/CustomCursor.tsx
"use client";

import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor: React.FC = () => (
  <AnimatedCursor
    innerSize={8}
    outerSize={35}
    color="0, 0, 0" 
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={2}
    clickables={[
      "a",
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      "label[for]",
      "select",
      "textarea",
      "button",
      ".link",
    ]}
  />
);

export default CustomCursor;
