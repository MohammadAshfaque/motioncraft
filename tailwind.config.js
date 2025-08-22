/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'aurora': {
          '0%': { backgroundPosition: '0% 50%, 100% 40%, 50% 80%, 50% 50%' },
          '100%': { backgroundPosition: '20% 40%, 80% 60%, 55% 70%, 50% 50%' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'wave-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'particles-float': {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
        'neon-glow': {
          '0%': { filter: 'brightness(1) hue-rotate(0deg)' },
          '100%': { filter: 'brightness(1.25) hue-rotate(18deg)' },
        },
        'liquid-flow': {
          '0%': { backgroundPosition: '20% 30%, 80% 65%, 60% 20%, 50% 50%' },
          '100%': { backgroundPosition: '30% 40%, 70% 50%, 55% 25%, 50% 50%' },
        },
        'geometric-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'ripple-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        'starfield-drift': {
          '0%': { backgroundPosition: '0 0, 0 0, 0 0' },
          '100%': { backgroundPosition: '0 1000px, 0 800px, 0 1200px' },
        },
        'floral-spiral': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'geometric-mosaic': {
          '0%': { backgroundPosition: '0 0, 30px 30px, 30px 30px, 0 0' },
          '100%': { backgroundPosition: '60px 60px, 90px 90px, 90px 90px, 60px 60px' },
        },
        'artistic-brush': {
          '0%, 100%': { backgroundSize: '100% 100%, 100% 100%, 100% 100%' },
          '50%': { backgroundSize: '150% 150%, 150% 150%, 150% 150%' },
        },
        'vintage-texture': {
          '0%': { backgroundPosition: '0 0, 20px 20px, 20px 20px, 0 0' },
          '100%': { backgroundPosition: '40px 40px, 60px 60px, 60px 60px, 40px 40px' },
        },
        'modern-dots': {
          '0%, 100%': { backgroundSize: '50px 50px' },
          '50%': { backgroundSize: '60px 60px' },
        },
        'elegant-lines': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '24px 24px' },
        },
        'cosmic-swirl': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'nature-inspired': {
          '0%, 100%': { backgroundSize: '100% 100%, 100% 100%, 100% 100%' },
          '50%': { backgroundSize: '120% 120%, 120% 120%, 120% 120%' },
        },
        'neon-pulse': {
          '0%, 100%': { backgroundPosition: '0% 50%', boxShadow: '0 0 20px rgba(255, 0, 128, 0.5)' },
          '50%': { backgroundPosition: '100% 50%', boxShadow: '0 0 40px rgba(0, 255, 128, 0.8)' },
        },
        'energy-field': {
          '0%, 100%': { backgroundSize: '100% 100%', opacity: '0.8' },
          '50%': { backgroundSize: '150% 150%', opacity: '1' },
        },
        'magnetic-pull': {
          '0%, 100%': { backgroundSize: '100% 100%', transform: 'scale(1)' },
          '50%': { backgroundSize: '80% 80%', transform: 'scale(1.1)' },
        },
        'quantum-leap': {
          '0%, 100%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
          '50%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(180deg)' },
        },
        'time-warp': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'fractal-growth': {
          '0%, 100%': { backgroundSize: '100px 100px' },
          '50%': { backgroundSize: '150px 150px' },
        },
        'symmetry-mirror': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'tessellation': {
          '0%': { backgroundPosition: '0 0, 40px 40px, 40px 40px, 0 0' },
          '100%': { backgroundPosition: '80px 80px, 120px 120px, 120px 120px, 80px 80px' },
        },
        'polygon-shift': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'geometric-flow': {
          '0%, 100%': { backgroundSize: '100% 100%, 100% 100%, 100% 100%' },
          '50%': { backgroundSize: '130% 130%, 130% 130%, 130% 130%' },
        },
        'sunset-glow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'ocean-depths': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'forest-mist': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'desert-sand': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'aurora-dream': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'slide-in-from-top': 'slide-in-from-top 0.5s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.5s ease-out',
        'slide-in-from-left': 'slide-in-from-left 0.5s ease-out',
        'slide-in-from-right': 'slide-in-from-right 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'aurora': 'aurora 14s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'wave-slide': 'wave-slide 4s ease-in-out infinite',
        'particles-float': 'particles-float 15s linear infinite',
        'neon-glow': 'neon-glow 4s ease-in-out infinite',
        'liquid-flow': 'liquid-flow 16s ease-in-out infinite',
        'geometric-spin': 'geometric-spin 10s linear infinite',
        'ripple-pulse': 'ripple-pulse 2.8s ease-in-out infinite',
        'starfield-drift': 'starfield-drift 20s linear infinite',
        'floral-spiral': 'floral-spiral 8s linear infinite',
        'geometric-mosaic': 'geometric-mosaic 4s linear infinite',
        'artistic-brush': 'artistic-brush 6s ease-in-out infinite',
        'vintage-texture': 'vintage-texture 5s linear infinite',
        'modern-dots': 'modern-dots 3s ease-in-out infinite',
        'elegant-lines': 'elegant-lines 4s linear infinite',
        'cosmic-swirl': 'cosmic-swirl 10s linear infinite',
        'nature-inspired': 'nature-inspired 7s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 3s ease-in-out infinite',
        'energy-field': 'energy-field 4s ease-in-out infinite',
        'magnetic-pull': 'magnetic-pull 5s ease-in-out infinite',
        'quantum-leap': 'quantum-leap 6s ease-in-out infinite',
        'time-warp': 'time-warp 8s linear infinite',
        'fractal-growth': 'fractal-growth 7s ease-in-out infinite',
        'symmetry-mirror': 'symmetry-mirror 5s ease-in-out infinite',
        'tessellation': 'tessellation 6s linear infinite',
        'polygon-shift': 'polygon-shift 9s linear infinite',
        'geometric-flow': 'geometric-flow 8s ease-in-out infinite',
        'sunset-glow': 'sunset-glow 6s ease-in-out infinite',
        'ocean-depths': 'ocean-depths 5s ease-in-out infinite',
        'forest-mist': 'forest-mist 7s ease-in-out infinite',
        'desert-sand': 'desert-sand 6s ease-in-out infinite',
        'aurora-dream': 'aurora-dream 8s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
