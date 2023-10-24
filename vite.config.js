import { defineConfig } from 'vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import WindiCSS from 'vite-plugin-windicss'
import liveReload from 'vite-plugin-live-reload'

export default defineConfig({
  // base: '/yaMeiProject/',
  server: {
    open: '/src/pages/front/index.html' // 指定打開路徑
  },
  plugins: [
    // 如果ejs更新畫面要顯示
    liveReload(['public/layouts/*.ejs', 'src/pages/**/*.{js,ejs}', 'src/pages/**/*.html']),
    ViteEjsPlugin(),
    WindiCSS()
  ]
})
