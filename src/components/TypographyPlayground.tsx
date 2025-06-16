
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const TypographyPlayground = () => {
  const [fontScale, setFontScale] = useState([1]);
  const [spacing, setSpacing] = useState([1]);
  const [isBrutalSpacing, setIsBrutalSpacing] = useState(false);

  const scaleFactor = fontScale[0];
  const spacingFactor = spacing[0] * (isBrutalSpacing ? 3 : 1);

  return (
    <section className="section-spacing bg-electric-pink text-black">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <h2 className="text-ultra font-bold mb-8 font-mono">
            TYPOGRAPHY CHAOS LAB
          </h2>
          <p className="text-2xl font-mono max-w-3xl">
            DESTROY CONVENTIONAL TYPOGRAPHY. MAKE IT SCREAM.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Controls */}
          <div className="brutal-card p-12 bg-black text-white">
            <h3 className="text-3xl font-bold mb-8 font-mono text-electric-yellow">
              TYPOGRAPHY WEAPONS
            </h3>
            
            <div className="space-y-8">
              <div>
                <label className="text-lg font-mono font-bold text-electric-cyan mb-4 block">
                  FONT SCALE DESTRUCTION: {scaleFactor.toFixed(2)}x
                </label>
                <Slider
                  value={fontScale}
                  onValueChange={setFontScale}
                  max={3}
                  min={0.5}
                  step={0.1}
                  className="brutal-card"
                />
              </div>

              <div>
                <label className="text-lg font-mono font-bold text-electric-lime mb-4 block">
                  SPACING CHAOS: {spacingFactor.toFixed(2)}x
                </label>
                <Slider
                  value={spacing}
                  onValueChange={setSpacing}
                  max={3}
                  min={0.5}
                  step={0.1}
                  className="brutal-card"
                />
              </div>

              <Button
                onClick={() => setIsBrutalSpacing(!isBrutalSpacing)}
                className={`brutal-card w-full py-6 text-lg font-bold font-mono ${
                  isBrutalSpacing 
                    ? 'bg-electric-yellow text-black animate-brutal-bounce' 
                    : 'bg-electric-pink text-white'
                } hover:animate-shake`}
              >
                {isBrutalSpacing ? 'SPACING IS INSANE!' : 'ACTIVATE BRUTAL SPACING'}
              </Button>
            </div>
          </div>

          {/* Live Preview */}
          <div className="space-y-8">
            {/* Mock Blog Card */}
            <motion.div 
              className="brutal-card p-8 bg-white text-black"
              style={{
                transform: isBrutalSpacing ? 'rotate(-2deg)' : 'rotate(0deg)',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 
                className="font-bold font-mono mb-4 text-electric-pink"
                style={{ 
                  fontSize: `${2 * scaleFactor}rem`,
                  marginBottom: `${1 * spacingFactor}rem`
                }}
              >
                BRUTAL BLOG POST TITLE
              </h3>
              <p 
                className="font-mono"
                style={{ 
                  fontSize: `${1.2 * scaleFactor}rem`,
                  lineHeight: `${1.6 * spacingFactor}`,
                  marginBottom: `${1 * spacingFactor}rem`
                }}
              >
                This is what body text looks like when it refuses to be boring. 
                Typography should make people FEEL something, not put them to sleep.
              </p>
              <div 
                className="flex gap-4"
                style={{ marginTop: `${2 * spacingFactor}rem` }}
              >
                <Button className="brutal-card bg-electric-cyan text-black font-mono font-bold">
                  READ MORE
                </Button>
                <Button className="brutal-card bg-electric-lime text-black font-mono font-bold">
                  SHARE CHAOS
                </Button>
              </div>
            </motion.div>

            {/* Mock UI Card */}
            <motion.div 
              className="brutal-card p-8 bg-electric-yellow text-black"
              style={{
                transform: isBrutalSpacing ? 'rotate(1deg)' : 'rotate(0deg)',
                transition: 'all 0.3s ease'
              }}
            >
              <h4 
                className="font-bold font-mono mb-4"
                style={{ 
                  fontSize: `${1.5 * scaleFactor}rem`,
                  marginBottom: `${0.5 * spacingFactor}rem`
                }}
              >
                COMPONENT PREVIEW
              </h4>
              <p 
                className="font-mono mb-4"
                style={{ 
                  fontSize: `${1 * scaleFactor}rem`,
                  marginBottom: `${1 * spacingFactor}rem`
                }}
              >
                Status: ABSOLUTELY UNHINGED
              </p>
              <div 
                className="flex items-center justify-between"
                style={{ marginTop: `${1 * spacingFactor}rem` }}
              >
                <span 
                  className="font-mono font-bold"
                  style={{ fontSize: `${0.9 * scaleFactor}rem` }}
                >
                  POWER LEVEL: 9000
                </span>
                <div className="w-4 h-4 bg-electric-pink animate-brutal-bounce" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
