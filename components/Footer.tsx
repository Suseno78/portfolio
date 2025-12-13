'use client';

import { Translations } from '@/lib/translations';

interface FooterProps {
  t: Translations;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 bg-gradient-to-br from-primary-50 via-accent-50 to-peach-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary-600 dark:text-primary-400"
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
          <p className="text-gray-700 dark:text-gray-300 text-center font-medium">
            {t.footer.text}
          </p>
          
          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Senz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
