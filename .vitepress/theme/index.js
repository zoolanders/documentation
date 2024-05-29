// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme-without-fonts';
import './style.css';

import TmIndex from './components/TmIndex.vue';
import MyLayout from './components/MyLayout.vue';

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app, router, siteData }) {
        app.component('TmIndex', TmIndex);
    },
};
