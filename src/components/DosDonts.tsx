
import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const examples = [
  {
    category: 'BUTTONS',
    good: {
      title: 'BRUTAL & PROUD',
      description: 'High contrast, bold typography, clear hover states',
      component: (
        <Button className="brutal-card bg-electric-yellow text-black font-mono font-bold text-lg py-4 px-8 hover:bg-electric-pink hover:text-white">
          CLICK ME OR DIE
        </Button>
      )
    },
    bad: {
      title: 'boring button',
      description: 'Generic, timid, forgettable',
      component: (
        <button className="bg-gray-400 text-gray-600 px-4 py-2 rounded text-sm hover:bg-gray-300">
          click me maybe
        </button>
      )
    }
  },
  {
    category: 'COLORS',
    good: {
      title: 'ELECTRIC ASSAULT',
      description: 'Unapologetic, memorable, energetic',
      component: (
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-electric-yellow border-4 border-black"></div>
          <div className="w-12 h-12 bg-electric-pink border-4 border-black"></div>
          <div className="w-12 h-12 bg-electric-cyan border-4 border-black"></div>
        </div>
      )
    },
    bad: {
      title: 'corporate gray nightmare',
      description: 'Safe, bland, soul-crushing',
      component: (
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-gray-300 border border-gray-400"></div>
          <div className="w-12 h-12 bg-gray-400 border border-gray-500"></div>
          <div className="w-12 h-12 bg-gray-500 border border-gray-600"></div>
        </div>
      )
    }
  },
  {
    category: 'TYPOGRAPHY',
    good: {
      title: 'SCREAMING HEADLINES',
      description: 'Bold, impactful, impossible to ignore',
      component: (
        <div className="font-mono">
          <div className="text-4xl font-bold text-electric-pink mb-2">BRUTAL TITLE</div>
          <div className="text-lg text-electric-cyan">Subtitle that matters</div>
        </div>
      )
    },
    bad: {
      title: 'whisper text',
      description: 'Timid, forgettable, puts users to sleep',
      component: (
        <div className="font-sans">
          <div className="text-xl text-gray-600 mb-2">Generic Title</div>
          <div className="text-sm text-gray-500">subtitle if you care</div>
        </div>
      )
    }
  }
];

export const DosDonts = () => {
  return (
    <section className="section-spacing bg-black text-white">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-ultra font-bold mb-8 font-mono">
            <span className="text-electric-lime">DO'S</span>{' '}
            <span className="text-white">&</span>{' '}
            <span className="text-red-500">DON'TS</span>
          </h2>
          <p className="text-2xl font-mono text-muted-foreground max-w-3xl mx-auto">
            LEARN THE DIFFERENCE BETWEEN BORING AND BRUTAL
          </p>
        </motion.div>

        <div className="space-y-16">
          {examples.map((example, index) => (
            <motion.div
              key={example.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* DO */}
              <div className="brutal-card p-12 bg-electric-lime text-black relative overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-electric-lime border-4 border-black rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <Check className="w-8 h-8 text-black" strokeWidth={4} />
                </motion.div>
                
                <div className="mb-8">
                  <div className="text-sm font-mono font-bold text-black/70 mb-2">
                    {example.category} ✓ DO
                  </div>
                  <h3 className="text-3xl font-bold font-mono mb-4">
                    {example.good.title}
                  </h3>
                  <p className="text-lg font-mono mb-8">
                    {example.good.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-center p-8 bg-black/10 border-4 border-black">
                  {example.good.component}
                </div>
              </div>

              {/* DON'T */}
              <div className="brutal-card p-12 bg-red-500 text-white relative overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-red-500 border-4 border-black rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: -360 }}
                >
                  <X className="w-8 h-8 text-white" strokeWidth={4} />
                </motion.div>
                
                <div className="mb-8">
                  <div className="text-sm font-mono font-bold text-white/70 mb-2">
                    {example.category} ✗ DON'T
                  </div>
                  <h3 className="text-3xl font-bold font-mono mb-4">
                    {example.bad.title}
                  </h3>
                  <p className="text-lg font-mono mb-8">
                    {example.bad.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-center p-8 bg-white/10 border-4 border-black">
                  {example.bad.component}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mt-20"
        >
          <div className="brutal-card p-16 bg-electric-yellow text-black">
            <h3 className="text-4xl font-bold font-mono mb-8">
              REMEMBER THE RULE
            </h3>
            <p className="text-2xl font-mono max-w-2xl mx-auto leading-relaxed">
              IF YOUR DESIGN DOESN'T MAKE PEOPLE FEEL SOMETHING,
              <br />
              <span className="text-electric-pink font-bold">
                YOU'RE DOING IT WRONG.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
