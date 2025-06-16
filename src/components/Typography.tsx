
import React from 'react';
import { motion } from 'framer-motion';

export const Typography = () => {
  return (
    <section className="section-spacing diagonal-section bg-electric-yellow text-black">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-20"
        >
          <h2 className="text-ultra font-bold mb-8 font-mono">
            TYPOGRAPHY THAT SCREAMS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            className="brutal-card p-12 bg-black text-white"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ rotate: 2 }}
          >
            <h3 className="text-3xl font-bold mb-8 font-mono text-electric-yellow">
              HEADINGS
            </h3>
            <div className="space-y-6">
              <div className="text-6xl font-bold font-mono text-electric-pink">H1 MASSIVE</div>
              <div className="text-5xl font-bold font-mono text-electric-cyan">H2 HUGE</div>
              <div className="text-4xl font-bold font-mono text-electric-lime">H3 BIG</div>
              <div className="text-3xl font-bold font-mono text-electric-orange">H4 MEDIUM</div>
            </div>
          </motion.div>

          <motion.div
            className="brutal-card p-12 bg-electric-pink text-black"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ rotate: -2 }}
          >
            <h3 className="text-3xl font-bold mb-8 font-mono">
              BODY TEXT
            </h3>
            <div className="space-y-6">
              <div className="text-2xl font-mono">LARGE BODY - FOR WHEN YOU NEED TO SHOUT</div>
              <div className="text-xl font-mono">REGULAR BODY - STILL LOUD ENOUGH</div>
              <div className="text-lg font-mono">SMALL TEXT - BUT NOT TOO SMALL TO IGNORE</div>
              <div className="text-base font-mono bg-black text-electric-yellow p-4 border-4 border-black">
                CODE BLOCKS - BECAUSE WE'RE DEVELOPERS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
