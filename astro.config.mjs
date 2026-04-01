import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { flexokiLight } from './src/themes/flexoki-light.mjs';
import { flexokiDark } from './src/themes/flexoki-dark.mjs';
import { BASE_2, BASE_3, BASE_4, BASE_5, BASE_C, BASE_D, BLACK, WHITE } from './src/colors.mjs';

const C = {
  dark:  { ui1: BASE_C, ui2: BASE_D, ui3: BASE_C, text: BASE_5, bg: BASE_D },
  light: { ui1: BASE_4, ui2: BASE_3, ui3: BASE_4, text: BLACK,  bg: BASE_2 },
};
const pick = (dark, light) => ({ theme }) => theme.type === 'dark' ? dark : light;

import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkToc from 'remark-toc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://alperenalbayrak.dev',
  markdown: {
    remarkPlugins: [
      remarkMath,
      [remarkToc, { heading: 'contents|table of contents|toc' }],
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      rehypeKatex,
    ],
  },
  integrations: [
    expressiveCode({
      plugins: [pluginLineNumbers()],
      defaultProps: { showLineNumbers: false },
      themes: [flexokiDark, flexokiLight],
      themeCssSelector: (theme) => theme.type === 'dark' ? '.dark' : ':root:not(.dark)',
      styleOverrides: {
        borderRadius: '6px',
        borderColor: pick(C.dark.ui1, C.light.ui1),
        frames: {
          frameBoxShadowCssValue: 'none',
          editorTabBarBackground:           pick(C.dark.ui2,  C.light.ui2),
          editorTabBarBorderBottomColor:    pick(C.dark.ui1,  C.light.ui1),
          editorTabBarBorderColor:          pick(C.dark.ui1,  C.light.ui1),
          editorActiveTabBackground:        pick(C.dark.bg,   C.light.bg),
          editorActiveTabForeground:        pick(C.dark.text, C.light.text),
          terminalTitlebarBackground:       pick(C.dark.ui2,  C.light.ui2),
          terminalTitlebarBorderBottomColor:pick(C.dark.ui1,  C.light.ui1),
          terminalBackground:               pick(C.dark.bg,   C.light.bg),
        },
      },
    }),
    mdx(),
    tailwind(),
    sitemap(),
  ],
});
