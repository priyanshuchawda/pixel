
import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { ColorPalette } from '../components/ColorPalette';
import { Typography } from '../components/Typography';
import { TypographyPlayground } from '../components/TypographyPlayground';
import { MotionRules } from '../components/MotionRules';
import { ComponentPlayground } from '../components/ComponentPlayground';
import { InteractiveComponents } from '../components/InteractiveComponents';
import { DosDonts } from '../components/DosDonts';
import { ExportTokens } from '../components/ExportTokens';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const { toast } = useToast();
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleToast = (message: string) => {
    toast({
      title: "SYSTEM ACTIVATED",
      description: message,
    });
  };

  const glitchTrigger = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor mousePosition={mousePosition} />

      <Navigation 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isGlitching={isGlitching}
        rotate={rotate}
        glitchTrigger={glitchTrigger}
      />

      <HeroSection handleToast={handleToast} />
      <ColorPalette handleToast={handleToast} />
      <TypographyPlayground />
      <Typography />
      <MotionRules />
      <ComponentPlayground />
      <InteractiveComponents 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleToast={handleToast}
      />
      <DosDonts />
      <ExportTokens />
      <Footer />
    </div>
  );
};

export default Index;
