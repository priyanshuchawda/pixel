
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

interface ColorPaletteProps {
  handleToast: (message: string) => void;
}

export const ColorPalette = ({ handleToast }: ColorPaletteProps) => {
  const brutalistColors = [
    { name: 'ELECTRIC YELLOW', value: '#FFD700', bg: 'bg-electric-yellow' },
    { name: 'CYBER PINK', value: '#FF00FF', bg: 'bg-electric-pink' },
    { name: 'NEON CYAN', value: '#00FFFF', bg: 'bg-electric-cyan' },
    { name: 'ACID LIME', value: '#00FF00', bg: 'bg-electric-lime' },
    { name: 'FIRE ORANGE', value: '#FF4500', bg: 'bg-electric-orange' },
  ];

  return (
    <section className="section-spacing bg-black">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-ultra font-bold mb-8 font-mono text-stroke">
            <span className="text-electric-yellow">EXTREME</span>{' '}
            <span className="text-electric-pink">COLORS</span>
          </h2>
          <p className="text-2xl font-mono text-muted-foreground max-w-3xl">
            WE DON'T DO SUBTLE. THESE COLORS WILL BURN YOUR RETINAS IN THE BEST WAY POSSIBLE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {brutalistColors.map((color, index) => (
            <motion.div
              key={color.name}
              className="brutal-card p-0 overflow-hidden bg-white cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: Math.random() * 10 - 5,
                zIndex: 10 
              }}
              onClick={() => {
                navigator.clipboard.writeText(color.value);
                handleToast(`${color.value} STOLEN!`);
              }}
            >
              <div 
                className="h-48 w-full relative overflow-hidden"
                style={{ backgroundColor: color.value }}
              >
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 flex items-center justify-center"
                  whileHover={{ opacity: 0.8 }}
                >
                  <Eye className="w-12 h-12 text-white neon-glow" />
                </motion.div>
              </div>
              <div className="p-6 bg-black">
                <h3 className="text-xl font-bold font-mono text-white mb-2">
                  {color.name}
                </h3>
                <p className="font-mono text-electric-yellow text-lg font-bold">
                  {color.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
