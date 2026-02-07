'use client';

import { motion } from 'framer-motion';
import { Translations } from '@/lib/translations';

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="neon-text">{t.about.title}</span>
          </h2>

          {/* Cyber glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="cyber-glass rounded-2xl p-8 hover:border-cyber-500/40 hover:shadow-cyber transition-all duration-300"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              {t.about.bio}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
