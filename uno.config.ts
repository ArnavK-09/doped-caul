// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    colors: {
      "background": "#000000",
      "primary": "#DD1D38",
      "secondary": "#00E1DB"
    }
  },
})