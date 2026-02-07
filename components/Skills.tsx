'use client';

import { motion } from 'framer-motion';
import { Translations } from '@/lib/translations';
import Image from 'next/image';

interface SkillsProps {
  t: Translations;
}

interface Skill {
  name: string;
  category: string;
  logo: string;
}

export default function Skills({ t }: SkillsProps) {
  const skills: Skill[] = [
    { name: 'VS Code', category: 'Code Editor', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git', category: 'Version Control', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Laravel', category: 'Backend Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'PHP', category: 'Programming Language', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'JavaScript', category: 'Programming Language', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'MySQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Tailwind CSS', category: 'CSS Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', category: 'Frontend Library', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML/CSS', category: 'Web Technologies', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'API Integrations', category: 'System Integration', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'n8n', category: 'AI Workflow Automation', logo: 'https://n8n.io/favicon.ico' },
  ];

  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text">{t.skills.title}</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cyber-glass rounded-xl p-4 flex items-center gap-4 hover:border-cyber-500/50 hover:shadow-cyber transition-all duration-300 group"
              >
                <div className="relative w-12 h-12 flex-shrink-0 p-2 bg-gray-100 dark:bg-dark-600/50 rounded-lg border border-cyber-500/20 group-hover:border-cyber-500/40 group-hover:shadow-cyber transition-all">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyber-600 dark:group-hover:text-cyber-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
