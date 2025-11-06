import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },

    // 👇 Aquí definimos la carpeta pública
    publicDir: 'src/renderer/public',

    // 👇 Base relativa para que funcione en `file://` en producción
    base: './',

    build: {
      outDir: 'dist/renderer',
      emptyOutDir: true,
    },
  },
})
