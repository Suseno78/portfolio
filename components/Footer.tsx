'use client';

import { Translations } from '@/lib/translations';

interface FooterProps {
  t: Translations;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-dark-900 border-t border-cyber-500/20 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <svg
              width="40"
              height="40"
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
          </div>

          {/* Footer Text */}
          <p className="text-gray-600 dark:text-gray-400 text-center font-medium">
            {t.footer.text}
          </p>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-600">
            © {new Date().getFullYear()} <span className="text-cyber-600 dark:text-cyber-500">Senz</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
