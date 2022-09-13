import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import unocss from 'unocss/vite';
import {
  presetIcons,
  presetUno,
  presetAttributify,
  transformerAttributifyJsx,
} from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss({
      presets: [presetAttributify(), presetIcons(), presetUno()],
      transformers: [transformerAttributifyJsx()],
    }),
    react(),
  ],
});
