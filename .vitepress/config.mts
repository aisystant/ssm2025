import { defineConfig } from 'vitepress'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Школа системного менеджмента",
  description: "Готовим директоров по развитию, меняющих мир к лучшему",
  vite: {
    plugins: [
      createSvgSpritePlugin({
        symbolId: 'icon-[name]-[hash]',
        include: ['**/sprite/**.svg']
      }),
    ],
  }
})
