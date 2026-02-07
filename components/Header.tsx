'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { Language } from '@/lib/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'id', label: 'Bahasa' },
    { code: 'jp', label: '日本語' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl border-b border-cyber-600/20 dark:border-cyber-500/20 shadow-[0_4px_30px_rgba(14,165,233,0.1)] dark:shadow-[0_4px_30px_rgba(0,245,255,0.1)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-cyber-600 dark:text-cyber-500 drop-shadow-[0_0_10px_rgba(14,165,233,0.5)] dark:drop-shadow-[0_0_10px_rgba(0,245,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,245,255,0.8)] transition-all duration-300"
            >
              <rect width="40" height="40" rx="8" fill="currentColor" />
              <text
                x="20"
                y="28"
                fontSize="24"
                fontWeight="bold"
                fill="white"
                textAnchor="middle"
              >
                S
              </text>
            </svg>
            <span className="text-xl font-bold text-cyber-700 dark:text-cyber-400 dark:text-glow">
              Senz
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 rounded-xl bg-gray-100 dark:bg-dark-400/60 backdrop-blur-sm border border-cyber-600/20 dark:border-cyber-500/20 hover:border-cyber-500/50 hover:shadow-cyber transition-all duration-300"
              >
                <Globe className="w-5 h-5 text-cyber-600 dark:text-cyber-400" />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white/90 dark:bg-dark-400/90 backdrop-blur-xl rounded-xl shadow-lg border border-cyber-600/30 dark:border-cyber-500/30 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-cyber-500/20 transition-colors ${language === lang.code
                          ? 'bg-cyber-500/30 text-cyber-700 dark:text-cyber-400 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:text-cyber-600 dark:hover:text-cyber-300'
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-dark-400/60 backdrop-blur-sm border border-cyber-600/20 dark:border-cyber-500/20 hover:border-cyber-500/50 hover:shadow-cyber transition-all duration-300"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-cyber-400" />
              ) : (
                <Moon className="w-5 h-5 text-neon-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
