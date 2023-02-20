import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from './plugins/vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vuetify({ autoImport: true })],
  
})
