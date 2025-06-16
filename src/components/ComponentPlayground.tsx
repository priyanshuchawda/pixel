
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export const ComponentPlayground = () => {
  const [isDark, setIsDark] = useState(true);
  const [borderRadius, setBorderRadius] = useState([0]);
  const [shadowIntensity, setShadowIntensity] = useState([1]);
  const [fontFamily, setFontFamily] = useState('mono');
  const [buttonSize, setButtonSize] = useState([1]);

  const themeClass = isDark ? 'bg-black text-white' : 'bg-white text-black';
  const borderRadiusValue = borderRadius[0];
  const shadowValue = shadowIntensity[0];
  const fontClass = fontFamily === 'mono' ? 'font-mono' : fontFamily === 'space' ? 'font-space' : 'font-sans';
  const buttonScale = buttonSize[0];

  return (
    <section className="section-spacing bg-electric-cyan text-black">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-ultra font-bold mb-8 font-mono">
            COMPONENT TORTURE CHAMBER
          </h2>
          <p className="text-2xl font-mono max-w-3xl mx-auto">
            BEND COMPONENTS TO YOUR WILL. MAKE THEM SUFFER BEAUTIFULLY.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Controls */}
          <div className="brutal-card p-12 bg-black text-white">
            <h3 className="text-3xl font-bold mb-8 font-mono text-electric-yellow">
              TORTURE CONTROLS
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-electric-pink">DARK MODE</span>
                <Switch checked={isDark} onCheckedChange={setIsDark} />
              </div>

              <div>
                <label className="text-lg font-mono font-bold text-electric-cyan mb-4 block">
                  BORDER RADIUS: {borderRadiusValue}px
                </label>
                <Slider
                  value={borderRadius}
                  onValueChange={setBorderRadius}
                  max={50}
                  min={0}
                  step={1}
                />
              </div>

              <div>
                <label className="text-lg font-mono font-bold text-electric-lime mb-4 block">
                  SHADOW BRUTALITY: {shadowValue}x
                </label>
                <Slider
                  value={shadowIntensity}
                  onValueChange={setShadowIntensity}
                  max={3}
                  min={0}
                  step={0.1}
                />
              </div>

              <div>
                <label className="text-lg font-mono font-bold text-electric-orange mb-4 block">
                  BUTTON SIZE: {buttonScale.toFixed(1)}x
                </label>
                <Slider
                  value={buttonSize}
                  onValueChange={setButtonSize}
                  max={2}
                  min={0.5}
                  step={0.1}
                />
              </div>

              <div>
                <label className="text-lg font-mono font-bold text-electric-pink mb-4 block">
                  FONT PERSONALITY
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['mono', 'space', 'sans'].map((font) => (
                    <Button
                      key={font}
                      onClick={() => setFontFamily(font)}
                      className={`brutal-card font-mono font-bold ${
                        fontFamily === font 
                          ? 'bg-electric-yellow text-black' 
                          : 'bg-electric-pink/20 text-white border-electric-pink border-2'
                      }`}
                    >
                      {font.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className={`p-12 transition-all duration-500 ${themeClass}`} 
               style={{ 
                 borderRadius: `${borderRadiusValue}px`,
                 boxShadow: `${8 * shadowValue}px ${8 * shadowValue}px 0px 0px #FFD700`
               }}>
            <h3 className={`text-3xl font-bold mb-8 ${fontClass}`}>
              LIVE PREVIEW ZONE
            </h3>
            
            <div className="space-y-8">
              <Input 
                placeholder="TYPE SOMETHING RADICAL..." 
                className={`h-16 text-lg ${fontClass} border-4 border-electric-pink`}
                style={{ borderRadius: `${borderRadiusValue}px` }}
              />

              <div className="flex gap-4 flex-wrap">
                {['PRIMARY', 'SECONDARY', 'DANGER'].map((label, index) => (
                  <Button
                    key={label}
                    className={`${fontClass} font-bold transition-all duration-300`}
                    style={{ 
                      borderRadius: `${borderRadiusValue}px`,
                      transform: `scale(${buttonScale})`,
                      backgroundColor: index === 0 ? '#FFD700' : index === 1 ? '#FF00FF' : '#FF4500',
                      color: index === 1 ? 'white' : 'black',
                      boxShadow: `${4 * shadowValue}px ${4 * shadowValue}px 0px 0px ${isDark ? '#00FFFF' : '#000'}`
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </div>

              <Card 
                className={`p-8 ${themeClass} border-4 border-electric-cyan`}
                style={{ 
                  borderRadius: `${borderRadiusValue}px`,
                  boxShadow: `${6 * shadowValue}px ${6 * shadowValue}px 0px 0px #00FF00`
                }}
              >
                <h4 className={`text-xl font-bold mb-4 ${fontClass}`}>
                  SAMPLE CARD
                </h4>
                <p className={fontClass}>
                  This card adapts to your torture settings. 
                  Notice how personality changes with each tweak.
                </p>
              </Card>

              <div className="text-center">
                <div className={`text-sm ${fontClass} opacity-70`}>
                  Current Config: 
                  radius({borderRadiusValue}px) 
                  shadow({shadowValue}x) 
                  font({fontFamily}) 
                  size({buttonScale.toFixed(1)}x)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
