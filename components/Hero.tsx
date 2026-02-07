'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Translations } from '@/lib/translations';

interface HeroProps {
  t: Translations;
  scrollToSection: (id: string) => void;
}

export default function Hero({ t, scrollToSection }: HeroProps) {
  const portraits = [
    's1.jpg',
    's7.jpg',
    's2.jpg',
    's4.jpg',
    's6.jpg'
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Animated cyber background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cyber grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Animated glow orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-cyber-500/20 dark:bg-cyber-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-neon-500/20 dark:bg-neon-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="neon-text">{t.hero.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyber-600 to-cyber-500 hover:from-cyber-500 hover:to-cyber-400 text-white font-bold rounded-xl shadow-cyber hover:shadow-cyber-lg transform hover:scale-105 transition-all duration-300"
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/80 dark:bg-dark-400/60 backdrop-blur-sm border border-neon-500/30 hover:border-neon-500/60 text-gray-800 dark:text-gray-100 font-semibold rounded-xl hover:shadow-neon transform hover:scale-105 transition-all duration-300"
              >
                {t.hero.cta2}
              </button>
            </motion.div>
          </motion.div>

          {/* Portrait Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {portraits.map((portrait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`${index === 2 ? 'col-span-3 row-span-2' : ''
                    } relative overflow-hidden rounded-2xl bg-white/60 dark:bg-dark-400/60 backdrop-blur-sm border border-cyber-500/30 hover:border-cyber-500/60 shadow-lg hover:shadow-cyber-lg transition-all duration-300 group`}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={`/${portrait}`}
                      alt={`Portrait ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Neon overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyber-500/50 rounded-full flex justify-center pt-2 shadow-cyber"
          >
            <div className="w-1 h-3 bg-cyber-500 rounded-full animate-glow-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
