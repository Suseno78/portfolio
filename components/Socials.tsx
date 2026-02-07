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
      color: 'hover:border-electric-400 hover:shadow-electric',
      iconColor: 'group-hover:text-electric-500 dark:group-hover:text-electric-400',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/6285280546667',
      color: 'hover:border-cyber-400 hover:shadow-cyber',
      iconColor: 'group-hover:text-cyber-600 dark:group-hover:text-cyber-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Suseno78',
      color: 'hover:border-neon-400 hover:shadow-neon',
      iconColor: 'group-hover:text-neon-600 dark:group-hover:text-neon-400',
    },
  ];

  return (
    <section id="socials" className="py-20 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-electric-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-neon-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text">{t.socials.title}</span>
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
                className={`group p-6 cyber-glass rounded-2xl transition-all duration-300 ${social.color}`}
              >
                <Icon className={`w-12 h-12 text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.iconColor}`} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
