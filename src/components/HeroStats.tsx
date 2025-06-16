
import React from 'react';
import { motion } from 'framer-motion';

export const HeroStats = () => {
  const stats = [
    { number: '∞', label: 'COMPONENTS', color: 'text-electric-yellow' },
    { number: '666', label: 'ANIMATIONS', color: 'text-electric-pink' },
    { number: '100%', label: 'RADICAL', color: 'text-electric-cyan' },
    { number: '0%', label: 'BORING', color: 'text-electric-lime' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          className="brutal-card p-8 text-center bg-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 + index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={`text-6xl font-bold font-mono mb-4 ${stat.color} neon-glow`}>
            {stat.number}
          </div>
          <div className="text-foreground font-mono font-bold">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};
