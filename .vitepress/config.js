import { defineConfig } from 'vitepress';
import Nav from './nav.json';
import Sidebar from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Essentials Documentation',
    description: 'Guides and Documentation for Essential Addons.',
    srcDir: 'src',
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        logo: '/zoolanders-logo.svg',
        siteTitle: false,
        editLink: {
            pattern: 'https://github.com/zoolanders/documentation/edit/v3/src/:path',
        },

        // https://vitepress.dev/reference/default-theme-config
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
            message: 'Essentials for YOOtheme Pro and ZOO',
            copyright: 'Copyright © <a href="https://zoolanders.com">ZOOlanders</a>',
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

        // Forms Addon
        switch (true) {
            // actions
            case filePath.startsWith('essentials-for-yootheme-pro/addons/forms/actions') &&
                !filePath.endsWith('index.md'):
                pageData.titleTemplate = ':title Action | Forms Builder for YOOtheme Pro';
                break;
            case filePath.startsWith('essentials-for-yootheme-pro/addons/forms/fields') &&
                !filePath.endsWith('index.md'):
                pageData.titleTemplate = ':title Field Element | Form Builder for YOOtheme Pro';
                break;
            case filePath.startsWith('essentials-for-yootheme-pro/addons/forms/captcha') &&
                !filePath.endsWith('index.md'):
                pageData.titleTemplate = ':title Field Element | Form Builder for YOOtheme Pro';
                break;

            // fallback
            case filePath.startsWith('essentials-for-yootheme-pro/addons/forms/'):
                pageData.titleTemplate = ':title | Form Builder for YOOtheme Pro';
                break;
        }

        // Sources Addon
        switch (true) {
            // sources
            case filePath.startsWith('essentials-for-yootheme-pro/addons/sources/providers') &&
                !filePath.endsWith('index.md'):
                pageData.titleTemplate =
                    ':title Provider | Dynamic Content Sources for YOOtheme Pro';
                break;

            // fallback
            case filePath.startsWith('essentials-for-yootheme-pro/addons/sources/'):
                pageData.titleTemplate = ':title | Dynamic Content Sources for YOOtheme Pro';
                break;
        }

        // Access Addon
        switch (true) {
            // rules
            case filePath.startsWith('essentials-for-yootheme-pro/addons/access/rules') &&
                !filePath.endsWith('index.md'):
                pageData.titleTemplate = ':title Rule | Conditional Content for YOOtheme Pro';
                break;

            // fallback
            case filePath.startsWith('essentials-for-yootheme-pro/addons/access/'):
                pageData.titleTemplate = ':title | Conditional Content for YOOtheme Pro';
                break;
        }

        // Icons Addon
        switch (true) {
            // rules
            case filePath.startsWith('essentials-for-yootheme-pro/addons/icons/collections') &&
                !filePath.endsWith('index.md'):
                pageData.titleTemplate =
                    ':title Collection | Custom and 3rd party Icons for YOOtheme Pro';
                break;

            // fallback
            case filePath.startsWith('essentials-for-yootheme-pro/addons/icons/'):
                pageData.titleTemplate = ':title | Custom and 3rd party Icons for YOOtheme Pro';
                break;
        }

        // Elements Addon
        switch (true) {
            // elements
            case filePath.startsWith('essentials-for-yootheme-pro/addons/elements') &&
                !filePath.endsWith('index.md'):
                pageData.titleTemplate = ':title Element | Free Elements for YOOtheme Pro';
                break;

            case filePath.startsWith('essentials-for-yootheme-pro/addons/elements/'):
                pageData.titleTemplate = ':title | Free Elements for YOOtheme Pro';
                break;
        }

        // Layout Addon
        switch (true) {
            case filePath.startsWith('essentials-for-yootheme-pro/addons/layout'):
                pageData.titleTemplate = ':title | Custom Layout Libraries for YOOtheme Pro';
                break;
        }

        // Dynamic Addon
        switch (true) {
            case filePath.startsWith('essentials-for-yootheme-pro/addons/dynamic'):
                pageData.titleTemplate = ':title | Advanced Dynamic Content for YOOtheme Pro';
                break;
        }
    },
});
