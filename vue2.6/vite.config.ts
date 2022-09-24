import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue2(),
    ScriptSetup(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
