
import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  isGlitching: boolean;
  rotate: any;
  glitchTrigger: () => void;
}

export const Header = ({ isGlitching, rotate, glitchTrigger }: HeaderProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => window.open('https://priyanshutech.xyz', '_blank')}
        className="brutal-card hover:bg-electric-cyan/20 font-mono text-lg"
      >
        <Home className="w-6 h-6 neon-glow" />
        HOME
      </Button>
      
      <motion.div 
        className="flex items-center space-x-4"
        whileHover={{ scale: 1.1 }}
        onClick={glitchTrigger}
      >
        <motion.div 
          className="w-12 h-12 bg-brutal-gradient border-4 border-black"
          style={{ rotate }}
        />
        <span 
          className={`text-3xl font-bold font-mono ${isGlitching ? 'glitch-text' : 'animate-color-shift'}`}
          data-text="BRUTALIST.DEV"
        >
          BRUTALIST.DEV
        </span>
      </motion.div>
    </div>
  );
};
