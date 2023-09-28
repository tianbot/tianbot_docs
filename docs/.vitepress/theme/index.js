// .vitepress/theme/index.js

// Ref: https://github.com/vuejs/vitepress/issues/854

import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';

import './index.css';

export default {
  ...DefaultTheme,

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
};