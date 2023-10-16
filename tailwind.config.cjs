const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,jsx,tsx}'],
  darkMode: ['class', '[data-user-color-scheme="dark"]'],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/assets/light-background.jpeg')",
        dark: "url('/assets/dark-background.jpeg')",
        hero: "url('/assets/hero.png')",
      },
      fontFamily: {
        reenie: 'Reenie Beanie',
        cedarville: 'Cedarville Cursive',
        major: 'Major Mono Display',
        comfortaa: 'Comfortaa',
        manrope: 'Manrope',
        caps: 'Six Caps',
        bebas: 'Bebas Neue',
        londrina: 'Londrina Shadow',
        cormorant: 'Cormorant',
        jacques: 'Jacques Francois Shadow',
        cheyra: 'Cheyra',
        augment: 'Best Augment Demo',
      },
      colors: {
        'primary': '#050816',
        'secondary': '#aaa6c3',
        'tertiary': '#666375',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        'skin': '#ffb39b',
        'red': 'rgb(207,74,52)',
        'light-scene': '#ebecf0',
        'light': '#5d73a3',
        // 'light': '#14303f',
        // 'dark': 'rgb(99	105	123)',
        'dark': '#5d73a3',
        'border-color-light': '#fff',
        'border-color-dark': '#5d73a3',
        'main-section-background-color': 'rgb(91,96,115)',
        'orange': 'rgb(224	110	43)',
        'beige': 'rgb(229	227	214	)',
        'grey': 'rgb(39	37	41)',
        'darkBlue': 'rgb(13	23	44)',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.-scale-x-1': {
          transform: 'scaleX(-1)',
        },
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
  // corePlugins: {
  //   preflight: false, // prevents loading preflight.css, so we avoid overwriting default (:host) web-components styles
  // },
};
