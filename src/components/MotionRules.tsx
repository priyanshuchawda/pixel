
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const easingTypes = [
  { name: 'SHARP SNAP', value: [0.25, 0.46, 0.45, 0.94], duration: 0.3 },
  { name: 'LIQUID EASE', value: [0.4, 0, 0.2, 1], duration: 0.8 },
  { name: 'BRUTAL BOUNCE', value: [0.68, -0.55, 0.265, 1.55], duration: 1.2 },
  { name: 'ELASTIC CHAOS', value: [0.175, 0.885, 0.32, 1.275], duration: 1.5 },
];

export const MotionRules = () => {
  const [activeEasing, setActiveEasing] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = (index: number) => {
    setActiveEasing(index);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), easingTypes[index].duration * 1000);
  };

  return (
    <section className="section-spacing bg-background">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-ultra font-bold mb-8 font-mono animate-color-shift text-stroke">
            MOTION REBELLION
          </h2>
          <p className="text-2xl font-mono text-muted-foreground max-w-3xl mx-auto">
            ANIMATIONS THAT REFUSE TO BE BORING. HOVER TO ACTIVATE CHAOS.
          </p>
        </motion.div>

        {/* Easing Previews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {easingTypes.map((easing, index) => (
            <motion.div
              key={easing.name}
              className="brutal-card p-8 bg-black text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => triggerAnimation(index)}
            >
              <h3 className="text-xl font-bold font-mono text-electric-yellow mb-4">
                {easing.name}
              </h3>
              
              {/* Easing Graph Visualization */}
              <div className="h-24 bg-electric-pink/20 border-2 border-electric-pink mb-4 relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    d={`M 0,100 C ${easing.value[0] * 100},${100 - easing.value[1] * 100} ${easing.value[2] * 100},${100 - easing.value[3] * 100} 100,0`}
                    fill="none"
                    stroke="#00FFFF"
                    strokeWidth="2"
                    className="neon-glow"
                  />
                </svg>
              </div>

              {/* Animation Preview Ball */}
              <div className="h-8 bg-electric-cyan/20 border border-electric-cyan relative">
                <motion.div
                  className="w-6 h-6 bg-electric-cyan rounded-full absolute top-1 left-1"
                  animate={
                    isAnimating && activeEasing === index
                      ? { x: '300%' }
                      : { x: 0 }
                  }
                  transition={{
                    duration: easing.duration,
                    ease: easing.value as any,
                  }}
                />
              </div>

              <p className="text-sm font-mono text-electric-lime mt-4">
                Duration: {easing.duration}s
              </p>
            </motion.div>
          ))}
        </div>

        {/* Motion Tokens */}
        <div className="brutal-card p-12 bg-electric-yellow text-black">
          <h3 className="text-3xl font-bold mb-8 font-mono">
            ANIMATION TOKENS
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold font-mono mb-4 text-electric-pink">
                TIMING
              </h4>
              <div className="space-y-2 font-mono">
                <div>motion.instant: 0.1s</div>
                <div>motion.fast: 0.3s</div>
                <div>motion.normal: 0.5s</div>
                <div>motion.slow: 0.8s</div>
                <div>motion.glacial: 2s</div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold font-mono mb-4 text-electric-cyan">
                SPRING
              </h4>
              <div className="space-y-2 font-mono">
                <div>spring.tight: bounce 0.2</div>
                <div>spring.normal: bounce 0.4</div>
                <div>spring.loose: bounce 0.6</div>
                <div>spring.chaos: bounce 0.8</div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold font-mono mb-4 text-electric-lime">
                EFFECTS
              </h4>
              <div className="space-y-2 font-mono">
                <div>glitch.intensity: 10px</div>
                <div>shake.force: 5px</div>
                <div>bounce.height: 20px</div>
                <div>spin.speed: 360deg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
