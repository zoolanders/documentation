import { defineConfig } from 'vitepress';
import Nav from './nav.json';
import Sidebar from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'ZOOlanders',
    description: 'Guides and Documentation for Essential Addons.',
    srcDir: 'src',
    outDir: 'dist',
    cleanUrls: true,
    srcExclude: ['**/_partials/*.md'],
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        [
            'script',
            { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'ZSVBFMCY', defer: true },
        ],
    ],
    sitemap: {
        hostname: 'https://docs.zoolanders.com',
    },
    themeConfig: {
        logo: '/zoolanders.svg',
        siteTitle: false,
        editLink: {
            pattern: 'https://github.com/zoolanders/documentation/edit/main/src/:path',
        },
        search: {
            provider: 'algolia',
            options: {
                appId: process.env.ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_API_KEY,
                indexName: 'zoolanders',
            },
        },
        nav: Nav,
        sidebar: Sidebar,
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/zoolanders/documentation',
            },
            {
                icon: 'twitter',
                link: 'https://twitter.com/jzoolanders',
            },
            {
                icon: 'discord',
                link: 'https://discord.gg/3BT5nHauWr',
            },
        ],
        footer: {
            // message: 'Essentials for YOOtheme Pro and ZOO',
            copyright:
                'Copyright © <a href="https://zoolanders.com" target="_blank">ZOOlanders</a>',
        },
    },
    transformHead({ assets }) {
        const myFontFile = assets.find(() => /varela-round\.\w+\.woff2/);

        if (myFontFile) {
            return [
                [
                    'link',
                    {
                        rel: 'preload',
                        href: myFontFile,
                        as: 'font',
                        type: 'font/woff2',
                        crossorigin: '',
                    },
                ],
            ];
        }
    },
    async transformPageData(pageData) {
        const filePath = pageData.filePath;

        if (filePath.startsWith('essentials-for-yootheme-pro/')) {
            pageData.titleTemplate = ':title | Essentials YOOtheme Pro Documentation | ZOOlanders';
        }

        if (filePath.startsWith('essentials-for-zoo/')) {
            pageData.titleTemplate = ':title | Essentials ZOO Documentation | ZOOlanders';
        }
    },
});
