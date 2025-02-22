/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        gold: '#DAA520',
        darkBrown: '#1A0F00',
        darkBlue: '#1a237e',
        chakraRed: '#D4463B',
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
      backgroundImage: {
        'chakra-pattern': "url('https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=2574')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      rotate: {
        'y-90': 'rotateY(90deg)',
        '-y-90': 'rotateY(-90deg)',
        'x-90': 'rotateX(90deg)',
        '-x-90': 'rotateX(-90deg)',
      },
      translate: {
        'z-32': '32px',
        '-z-32': '-32px',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
};