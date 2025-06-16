
import React from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

export const CustomCursor = ({ mousePosition }: CustomCursorProps) => {
  return (
    <motion.div
      className="fixed w-6 h-6 bg-electric-yellow rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 500,
      }}
    />
  );
};
