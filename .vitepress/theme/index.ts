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
    // Вкладки на странице /iwe: inline <script> в markdown вырезается сборкой,
    // поэтому функция регистрируется здесь глобально (onclick="iweTab(...)").
    if (typeof window !== 'undefined') {
      (window as unknown as Record<string, unknown>).iweTab = (id: string, btn: HTMLElement) => {
        document.querySelectorAll('.iwe-tab-pane').forEach((p) => p.classList.remove('active'));
        document.querySelectorAll('.iwe-tab-btn').forEach((b) => b.classList.remove('active'));
        document.getElementById('iwe-tab-' + id)?.classList.add('active');
        btn.classList.add('active');
      };
    }
  }
} satisfies Theme

