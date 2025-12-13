'use client';

import { motion } from 'framer-motion';
import { Translations } from '@/lib/translations';

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.about.title}
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center leading-relaxed"
          >
            {t.about.bio}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
