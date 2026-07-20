'use client'

import { ReactLenis } from "lenis/react";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ duration: 1.2, anchors: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
