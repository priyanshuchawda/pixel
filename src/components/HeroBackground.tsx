
import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-8 h-8 ${
            i % 3 === 0 ? 'bg-electric-yellow' : 
            i % 3 === 1 ? 'bg-electric-pink' : 'bg-electric-cyan'
          }`}
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            rotate: 0 
          }}
          animate={{ 
            rotate: 360,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}
    </div>
  );
};
