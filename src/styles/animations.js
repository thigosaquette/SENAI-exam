import { keyframes } from "@stitches/react";

const scaleUp = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.2)' },
});

const scaleDown = keyframes({
  '0%': { transform: 'scale(0.8)' },
  '100%': { transform: 'scale(1)' },
});

export const animations = {
  scaleUp,
  scaleDown,
};
