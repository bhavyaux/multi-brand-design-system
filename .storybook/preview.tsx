/// <reference types="vite/client" />

import type { Preview } from '@storybook/react-vite';
import '../src/tokens/tokens.css';

const preview: Preview = {
  globalTypes: {
    brand: {
      description: 'Brand',
      toolbar: { title: 'Brand', items: ['pepsi', 'lays', 'starbucks'], dynamicTitle: true },
    },
    mode: {
      description: 'Mode',
      toolbar: { title: 'Mode', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { brand: 'pepsi', mode: 'light' },
  decorators: [
    (Story, context) => {
      const root = document.documentElement;
      root.dataset.brand = context.globals.brand;
      root.dataset.mode = context.globals.mode;
      document.body.style.background = 'var(--surface-base)';
      return Story();
    },
  ],
  parameters: {
    layout: 'centered',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
  },
};

export default preview;