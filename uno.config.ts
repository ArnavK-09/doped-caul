// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetUno(),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      "background": "#000000",
      "primary": "#DD1D38",
      "secondary": "#00E1DB"
    }
  },
})