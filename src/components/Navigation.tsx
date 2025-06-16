
import React from 'react';
import { Header } from './Header';
import { HeaderActions } from './HeaderActions';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  isGlitching: boolean;
  rotate: any;
  glitchTrigger: () => void;
}

export const Navigation = ({ darkMode, setDarkMode, isGlitching, rotate, glitchTrigger }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background border-b-4 border-electric-yellow">
      <div className="container-brutal flex items-center justify-between h-20 px-8">
        <Header 
          isGlitching={isGlitching}
          rotate={rotate}
          glitchTrigger={glitchTrigger}
        />
        
        <HeaderActions 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </nav>
  );
};
