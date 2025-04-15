/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Catppuccin Mocha palette
        rosewater: '#f5e0dc',
        flamingo: '#f2cdcd',
        pink: '#f5c2e7',
        mauve: '#cba6f7',
        red: '#f38ba8',
        maroon: '#eba0ac',
        peach: '#fab387',
        yellow: '#f9e2af',
        green: '#a6e3a1',
        teal: '#94e2d5',
        sky: '#89dceb',
        sapphire: '#74c7ec',
        blue: '#89b4fa',
        lavender: '#b4befe',
        text: '#cdd6f4',
        subtext1: '#bac2de',
        subtext0: '#a6adc8',
        overlay2: '#9399b2',
        overlay1: '#7f849c',
        overlay0: '#6c7086',
        surface2: '#585b70',
        surface1: '#45475a',
        surface0: '#313244',
        base: '#1e1e2e',
        mantle: '#181825',
        crust: '#11111b',
      },
      backgroundImage: {
        'paisley': "url('https://images.unsplash.com/photo-1582658275411-f1f95c4e1a86?auto=format&fit=crop&q=80&w=2000&blur=100')",
        'mandala': "url('https://images.unsplash.com/photo-1596297532832-78857d4358ad?auto=format&fit=crop&q=80&w=2000&blur=100')",
      },
      fontFamily: {
        sanskrit: ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
};