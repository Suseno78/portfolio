'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '@/lib/translations';
import { ProjectData } from '@/lib/data';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ProjectsProps {
  t: Translations;
  projects: ProjectData[];
}

export default function Projects({ t, projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text">{t.projects.title}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="cyber-glass rounded-2xl overflow-hidden cursor-pointer flex flex-col group hover:border-cyber-500/50 hover:shadow-cyber-lg transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Neon overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 dark:from-dark-900/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-cyber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-cyber-600 dark:group-hover:text-cyber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack as neon pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-cyber-500/10 border border-cyber-500/30 text-cyber-700 dark:text-cyber-400 text-xs font-semibold rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 bg-neon-500/10 border border-neon-500/30 text-neon-700 dark:text-neon-400 text-xs font-semibold rounded-full">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>

                <button className="text-cyber-600 dark:text-cyber-400 font-semibold hover:text-cyber-500 dark:hover:text-cyber-300 mt-auto transition-all">
                  {t.projects.viewDetails} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 dark:bg-dark-900/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white/95 dark:bg-dark-400/95 backdrop-blur-xl rounded-3xl shadow-cyber-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-cyber-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white/95 dark:bg-dark-400/95 backdrop-blur-xl border-b border-cyber-500/20 p-6 flex justify-between items-center z-10">
                <h3 className="text-2xl font-bold text-cyber-700 dark:text-cyber-400">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-cyber-500/20 rounded-full transition-colors border border-cyber-500/30 hover:border-cyber-500/60"
                >
                  <X className="w-6 h-6 text-cyber-600 dark:text-cyber-400" />
                </button>
              </div>

              <div className="p-6">
                <div className="aspect-video relative overflow-hidden rounded-2xl mb-6 border border-cyber-500/20">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyber-700 dark:text-cyber-400 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-cyber-500/10 border border-cyber-500/30 text-cyber-700 dark:text-cyber-400 font-semibold rounded-full hover:bg-cyber-500/20 hover:border-cyber-500/50 transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
