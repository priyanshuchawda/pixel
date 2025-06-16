
import React from 'react';
import { Moon, Sun, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderActionsProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const HeaderActions = ({ darkMode, setDarkMode }: HeaderActionsProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => window.open('https://linkedin.com/in/priyanshuchawda', '_blank')}
        className="brutal-card hover:bg-electric-pink/20 font-mono text-lg"
      >
        <Linkedin className="w-5 h-5 neon-glow" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => window.open('https://github.com/priyanshuchawda', '_blank')}
        className="brutal-card hover:bg-electric-cyan/20 font-mono text-lg"
      >
        <Github className="w-5 h-5 neon-glow" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setDarkMode(!darkMode)}
        className="brutal-card hover:bg-electric-pink/20 font-mono text-lg"
      >
        {darkMode ? <Sun className="w-6 h-6 neon-glow" /> : <Moon className="w-6 h-6 neon-glow" />}
        {darkMode ? 'LIGHT' : 'DARK'}
      </Button>
      
      <Button 
        size="lg" 
        className="brutal-card bg-electric-yellow text-black font-mono text-lg font-bold hover:bg-electric-pink hover:text-white"
        onClick={() => window.open('https://github.com/priyanshuchawda', '_blank')}
      >
        <Download className="w-6 h-6 mr-2" />
        GET CODE
      </Button>
    </div>
  );
};
