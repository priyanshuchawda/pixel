
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="section-spacing bg-black text-white border-t-8 border-electric-yellow">
      <div className="container-brutal">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4 mb-8 md:mb-0"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-16 h-16 bg-brutal-gradient border-4 border-electric-yellow animate-brutal-bounce" />
            <div className="flex flex-col">
              <span className="text-4xl font-bold font-mono animate-color-shift">
                PRIYANSHUTECH.XYZ
              </span>
              <span className="text-sm font-mono text-electric-cyan">
                BY PRIYANSHU CHAWDA
              </span>
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="brutal-card bg-electric-pink text-black font-mono font-bold hover:bg-electric-lime"
                onClick={() => window.open('https://linkedin.com/in/priyanshuchawda', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LINKEDIN
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="brutal-card bg-electric-cyan text-black font-mono font-bold hover:bg-electric-lime"
                onClick={() => window.open('https://github.com/priyanshuchawda', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GITHUB
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="brutal-card bg-electric-yellow text-black font-mono font-bold hover:bg-electric-lime"
                onClick={() => window.open('https://priyanshutech.xyz', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                PORTFOLIO
              </Button>
            </div>
            
            <div className="text-lg font-mono text-electric-pink font-bold">
              MADE WITH 🔥 AND ZERO RESTRAINT
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-4 border-electric-yellow text-center">
          <p className="font-mono text-lg">
            © 2025 PRIYANSHU CHAWDA • DESIGN SYSTEM • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};
