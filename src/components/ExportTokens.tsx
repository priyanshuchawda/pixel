
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Copy, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const designTokens = {
  colors: {
    electric: {
      yellow: '#FFD700',
      pink: '#FF00FF',
      cyan: '#00FFFF',
      lime: '#00FF00',
      orange: '#FF4500'
    }
  },
  fonts: {
    mono: ['JetBrains Mono', 'monospace'],
    space: ['Space Grotesk', 'system-ui', 'sans-serif']
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem',
    '2xl': '6rem'
  },
  borderRadius: {
    none: '0',
    brutal: '0'
  },
  shadows: {
    brutal: '8px 8px 0px 0px #FFD700',
    'brutal-hover': '12px 12px 0px 0px #FF00FF'
  }
};

const tailwindConfig = `module.exports = {
  theme: {
    extend: {
      colors: {
        electric: {
          yellow: '#FFD700',
          pink: '#FF00FF',
          cyan: '#00FFFF',
          lime: '#00FF00',
          orange: '#FF4500',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'space': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'brutal-bounce': 'brutal-bounce 2s ease-in-out infinite',
        'color-shift': 'color-shift 3s ease-in-out infinite',
      },
      keyframes: {
        'brutal-bounce': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(2deg)' },
          '75%': { transform: 'translateY(-5px) rotate(-1deg)' }
        },
        'color-shift': {
          '0%': { color: '#FFD700' },
          '33%': { color: '#FF00FF' },
          '66%': { color: '#00FFFF' },
          '100%': { color: '#FFD700' }
        }
      }
    }
  }
}`;

export const ExportTokens = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "TOKENS STOLEN!",
      description: `${label} copied to clipboard`,
    });
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(designTokens, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'brutal-design-tokens.json';
    link.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "DOWNLOAD INITIATED!",
      description: "Design tokens are being downloaded",
    });
  };

  const downloadTailwindConfig = () => {
    const dataBlob = new Blob([tailwindConfig], { type: 'text/javascript' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tailwind.config.js';
    link.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "CONFIG STOLEN!",
      description: "Tailwind config downloaded",
    });
  };

  return (
    <section className="section-spacing bg-electric-yellow text-black">
      <div className="container-brutal">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-ultra font-bold mb-8 font-mono">
            STEAL OUR TOKENS
          </h2>
          <p className="text-2xl font-mono max-w-3xl mx-auto">
            TAKE EVERYTHING. WE DARE YOU. MAKE IT YOURS.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Export Options */}
          <div className="space-y-8">
            <motion.div
              className="brutal-card p-12 bg-black text-white"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-3xl font-bold mb-8 font-mono text-electric-yellow">
                EXPORT ARSENAL
              </h3>
              
              <div className="space-y-6">
                <Button
                  onClick={downloadJSON}
                  size="lg"
                  className="brutal-card bg-electric-pink text-white font-mono font-bold text-lg py-6 px-8 w-full hover:bg-electric-cyan hover:text-black"
                >
                  <Download className="w-6 h-6 mr-4" />
                  DOWNLOAD JSON TOKENS
                </Button>

                <Button
                  onClick={downloadTailwindConfig}
                  size="lg"
                  className="brutal-card bg-electric-cyan text-black font-mono font-bold text-lg py-6 px-8 w-full hover:bg-electric-lime"
                >
                  <FileText className="w-6 h-6 mr-4" />
                  GRAB TAILWIND CONFIG
                </Button>

                <Button
                  onClick={() => copyToClipboard(JSON.stringify(designTokens, null, 2), 'Design Tokens')}
                  size="lg"
                  className="brutal-card bg-electric-lime text-black font-mono font-bold text-lg py-6 px-8 w-full hover:bg-electric-orange"
                >
                  <Copy className="w-6 h-6 mr-4" />
                  COPY RAW TOKENS
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="brutal-card p-8 bg-electric-pink text-white"
              whileHover={{ rotate: 1 }}
            >
              <h4 className="text-2xl font-bold font-mono mb-4">
                INSTALLATION BRUTALITY
              </h4>
              <div className="bg-black p-4 border-4 border-white font-mono text-electric-yellow">
                npm i @brutal/system --save-dev
              </div>
              <p className="text-sm font-mono mt-4 opacity-80">
                * Not a real package (yet), but wouldn't that be BRUTAL?
              </p>
            </motion.div>
          </div>

          {/* Token Preview */}
          <div className="brutal-card p-12 bg-black text-white">
            <h3 className="text-3xl font-bold mb-8 font-mono text-electric-cyan">
              TOKEN PREVIEW
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold font-mono mb-4 text-electric-yellow">
                  COLORS
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  {Object.entries(designTokens.colors.electric).map(([name, color]) => (
                    <div key={name} className="text-center">
                      <div 
                        className="w-12 h-12 border-4 border-white mb-2 cursor-pointer"
                        style={{ backgroundColor: color }}
                        onClick={() => copyToClipboard(color, `Color ${name}`)}
                      />
                      <div className="text-xs font-mono">{name.toUpperCase()}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold font-mono mb-4 text-electric-lime">
                  SPACING SCALE
                </h4>
                <div className="space-y-2">
                  {Object.entries(designTokens.spacing).map(([name, value]) => (
                    <div key={name} className="flex items-center gap-4">
                      <div className="w-16 text-sm font-mono">{name}:</div>
                      <div className="flex-1 bg-electric-cyan h-4" style={{ width: value }} />
                      <div className="text-sm font-mono text-electric-yellow">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold font-mono mb-4 text-electric-orange">
                  BRUTAL SHADOWS
                </h4>
                <div className="space-y-4">
                  {Object.entries(designTokens.shadows).map(([name, shadow]) => (
                    <div key={name} className="flex items-center gap-4">
                      <div className="w-24 text-sm font-mono">{name}:</div>
                      <div 
                        className="w-16 h-8 bg-electric-yellow"
                        style={{ boxShadow: shadow }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
