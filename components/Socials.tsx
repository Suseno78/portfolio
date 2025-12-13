'use client';

import { motion } from 'framer-motion';
import { Translations } from '@/lib/translations';
import { Instagram, MessageCircle, Github } from 'lucide-react';

interface SocialsProps {
  t: Translations;
}

export default function Socials({ t }: SocialsProps) {
  const socials = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/cak_senzzz',
      color: 'hover:bg-pink-500',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/6285280546667',
      color: 'hover:bg-green-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Suseno78',
      color: 'hover:bg-gray-700',
    },
  ];

  return (
    <section id="socials" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          {t.socials.title}
        </motion.h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`group p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300`}
              >
                <Icon className="w-12 h-12 text-gray-900 dark:text-white group-hover:text-white transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
