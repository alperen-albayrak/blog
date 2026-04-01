import typography from '@tailwindcss/typography';
import {
  PAPER, BASE_2, BASE_3, BASE_4, BASE_5, BASE_6, BASE_7, BASE_8,
  BASE_9, BASE_A, BASE_B, BASE_C, BASE_D, BLACK,
  RED, ORANGE, YELLOW, GREEN, CYAN, BLUE, PURPLE, PINK,
  RED_D, ORANGE_D, YELLOW_D, GREEN_D, CYAN_D, BLUE_D, PURPLE_D, PINK_D,
} from './src/colors.mjs';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        flexoki: {
          paper:      PAPER,
          'base-2':   BASE_2,
          'base-3':   BASE_3,
          'base-4':   BASE_4,
          'base-5':   BASE_5,
          'base-6':   BASE_6,
          'base-7':   BASE_7,
          'base-8':   BASE_8,
          'base-9':   BASE_9,
          'base-a':   BASE_A,
          'base-b':   BASE_B,
          'base-c':   BASE_C,
          'base-d':   BASE_D,
          black:      BLACK,
          red:        RED,
          orange:     ORANGE,
          yellow:     YELLOW,
          green:      GREEN,
          cyan:       CYAN,
          blue:       BLUE,
          purple:     PURPLE,
          pink:       PINK,
          'red-d':    RED_D,
          'orange-d': ORANGE_D,
          'yellow-d': YELLOW_D,
          'green-d':  GREEN_D,
          'cyan-d':   CYAN_D,
          'blue-d':   BLUE_D,
          'purple-d': PURPLE_D,
          'pink-d':   PINK_D,
        },
      },
    },
  },
  plugins: [typography],
};
