import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const repoName = 'LordSinSentido.github.io'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths({
      projects: ['./tsconfig.app.json']
    })
  ]
})
