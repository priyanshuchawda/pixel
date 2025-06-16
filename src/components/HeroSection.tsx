
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeroStats } from './HeroStats';
import { HeroBackground } from './HeroBackground';

interface HeroSectionProps {
  handleToast: (message: string) => void;
}

export const HeroSection = ({ handleToast }: HeroSectionProps) => {
  return (
    <section className="section-spacing pt-32 diagonal-section relative min-h-screen flex items-center">
      <div className="container-brutal text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <h1 className="text-mega font-bold mb-12 font-mono text-stroke">
            <span className="block text-electric-yellow animate-brutal-bounce">DESIGN</span>
            <span className="block text-electric-pink" style={{ animationDelay: '0.5s' }}>SYSTEMS</span>
            <span className="block text-electric-cyan animate-color-shift" style={{ animationDelay: '1s' }}>FOR REBELS</span>
          </h1>
          
          <motion.p 
            className="text-2xl font-mono max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            FORGET EVERYTHING YOU KNOW ABOUT BORING DESIGN SYSTEMS.
            <br />
            THIS IS FOR DEVELOPERS WHO DARE TO BE DIFFERENT.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <Button 
                size="lg" 
                className="brutal-card bg-electric-yellow text-black font-mono text-xl font-bold py-6 px-12"
                onClick={() => handleToast('Welcome to the rebellion!')}
              >
                START REVOLUTION
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="brutal-card border-4 border-electric-pink text-electric-pink font-mono text-xl py-6 px-12 hover:bg-electric-pink hover:text-black"
                onClick={() => window.open('https://github.com/priyanshuchawda', '_blank')}
              >
                VIEW CODE
              </Button>
            </motion.div>
          </div>

          <HeroStats />
        </motion.div>
      </div>

      <HeroBackground />
    </section>
  );
};
