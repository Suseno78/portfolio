/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cyber color palette
        cyber: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#00f5ff',
          600: '#0ea5e9',
          700: '#0284c7',
          800: '#0369a1',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Neon purple palette
        neon: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#a855f7',
          700: '#9333ea',
          800: '#7c3aed',
          900: '#6b21a8',
          950: '#4a044e',
        },
        // Electric accents
        electric: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        // Dark backgrounds
        dark: {
          50: '#1e293b',
          100: '#1a2234',
          200: '#151c2c',
          300: '#111827',
          400: '#0f172a',
          500: '#0d1424',
          600: '#0a101c',
          700: '#080d16',
          800: '#060a12',
          900: '#0a0a1a',
          950: '#050508',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 245, 255, 0.3)',
        'cyber-lg': '0 0 40px rgba(0, 245, 255, 0.4)',
        'cyber-xl': '0 0 60px rgba(0, 245, 255, 0.5)',
        'neon': '0 0 20px rgba(168, 85, 247, 0.3)',
        'neon-lg': '0 0 40px rgba(168, 85, 247, 0.4)',
        'electric': '0 0 20px rgba(244, 63, 94, 0.3)',
        'glow': '0 0 30px rgba(0, 245, 255, 0.2), 0 0 60px rgba(168, 85, 247, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'cyber-flicker': 'cyberFlicker 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0, 245, 255, 0.5)' },
          '50%': { borderColor: 'rgba(168, 85, 247, 0.5)' },
        },
        cyberFlicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.9' },
          '97%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a0a1a 0%, #0f172a 50%, #0a0a1a 100%)',
        'neon-gradient': 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)',
        'neon-text': 'linear-gradient(90deg, #00f5ff 0%, #a855f7 50%, #f43f5e 100%)',
        'cyber-radial': 'radial-gradient(ellipse at center, rgba(0, 245, 255, 0.1) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
