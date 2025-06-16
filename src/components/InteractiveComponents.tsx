
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Triangle, Square, Star } from 'lucide-react';

interface InteractiveComponentsProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  handleToast: (message: string) => void;
}

export const InteractiveComponents = ({ darkMode, setDarkMode, handleToast }: InteractiveComponentsProps) => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-ultra font-bold mb-8 font-mono animate-color-shift text-stroke">
            INTERACTIVE MADNESS
          </h2>
          <p className="text-2xl font-mono text-muted-foreground max-w-3xl mx-auto">
            COMPONENTS THAT FIGHT BACK. HOVER AT YOUR OWN RISK.
          </p>
        </motion.div>

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-16 h-16">
            <TabsTrigger value="buttons" className="brutal-card font-mono text-lg font-bold">
              BUTTONS
            </TabsTrigger>
            <TabsTrigger value="inputs" className="brutal-card font-mono text-lg font-bold">
              INPUTS
            </TabsTrigger>
            <TabsTrigger value="cards" className="brutal-card font-mono text-lg font-bold">
              CARDS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buttons" className="space-y-12">
            <div className="brutal-card p-12 bg-black">
              <h3 className="text-3xl font-bold mb-8 font-mono text-electric-yellow">
                BUTTON ARSENAL
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'PRIMARY', color: 'bg-electric-yellow text-black', hover: 'hover:bg-electric-pink' },
                  { label: 'SECONDARY', color: 'bg-electric-pink text-white', hover: 'hover:bg-electric-cyan hover:text-black' },
                  { label: 'DANGER', color: 'bg-red-500 text-white', hover: 'hover:animate-shake' },
                  { label: 'CHAOS', color: 'bg-brutal-gradient text-black', hover: 'hover:animate-spin' },
                ].map((btn, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`brutal-card w-full py-6 text-lg font-bold font-mono ${btn.color} ${btn.hover}`}
                      onClick={() => handleToast(`${btn.label} BUTTON ACTIVATED!`)}
                    >
                      {btn.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inputs" className="space-y-12">
            <div className="brutal-card p-12 bg-black">
              <h3 className="text-3xl font-bold mb-8 font-mono text-electric-cyan">
                INPUT CHAOS
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <Input 
                    placeholder="TYPE SOMETHING RADICAL..." 
                    className="brutal-card h-16 text-lg font-mono border-electric-yellow border-4 bg-black text-white placeholder:text-electric-yellow/50"
                  />
                  <Textarea 
                    placeholder="DESCRIBE YOUR MANIFESTO..." 
                    className="brutal-card min-h-32 text-lg font-mono border-electric-pink border-4 bg-black text-white placeholder:text-electric-pink/50"
                  />
                  <div className="space-y-4">
                    <label className="text-lg font-mono font-bold text-electric-lime">
                      CHAOS LEVEL
                    </label>
                    <Slider 
                      defaultValue={[100]} 
                      max={100} 
                      step={1} 
                      className="brutal-card"
                    />
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex items-center justify-between brutal-card p-6 bg-electric-yellow text-black">
                    <span className="font-mono font-bold text-lg">DARK MODE</span>
                    <Switch 
                      checked={darkMode} 
                      onCheckedChange={setDarkMode}
                      className="scale-150"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {['REACT', 'TYPESCRIPT', 'TAILWIND', 'FRAMER'].map((tech) => (
                      <Badge 
                        key={tech}
                        className="brutal-card bg-electric-pink text-black font-mono text-lg font-bold py-2 px-4"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cards" className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Triangle, title: 'COMPONENT A', color: 'bg-electric-yellow text-black' },
                { icon: Square, title: 'COMPONENT B', color: 'bg-electric-pink text-white' },
                { icon: Star, title: 'COMPONENT C', color: 'bg-electric-cyan text-black' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`brutal-card p-12 cursor-pointer ${item.color}`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: Math.random() * 20 - 10,
                    zIndex: 10 
                  }}
                  onClick={() => handleToast(`${item.title} CLICKED!`)}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <item.icon className="w-16 h-16 mb-6 neon-glow" />
                  </motion.div>
                  <h4 className="text-2xl font-bold font-mono mb-4">
                    {item.title}
                  </h4>
                  <p className="font-mono text-lg">
                    THIS CARD REFUSES TO BE IGNORED. CLICK ME IF YOU DARE.
                  </p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
