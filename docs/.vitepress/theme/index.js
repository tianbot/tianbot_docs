// .vitepress/theme/index.js

// Ref: https://github.com/vuejs/vitepress/issues/854

import { h } from 'vue'
import Announcement from './Announcement.vue'
import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import CopyOrDownloadAsMarkdownButtons from 'vitepress-plugin-llms/vitepress-components/CopyOrDownloadAsMarkdownButtons.vue'

import './index.css';

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('CopyOrDownloadAsMarkdownButtons', CopyOrDownloadAsMarkdownButtons)
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
    //   mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); 

    // If you want to enable this for all images without explicitly adding , please enable the follow line
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
    //   'aside-outline-before': () => h(Announcement)
      'layout-top': () => h(Announcement)
    })
  }
};