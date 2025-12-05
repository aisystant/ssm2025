// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import 'vue-search-select/dist/VueSearchSelect.css'
import './assets/scss/app.scss'

if (typeof window !== 'undefined') {
  import('bootstrap').then((bootstrap) => {
    // ...
  });
}

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

