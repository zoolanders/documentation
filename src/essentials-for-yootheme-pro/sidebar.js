import AuthsSidebar from './auths/sidebar.json';
import AccessAddonSidebar from './addons/access/sidebar.json';
import DynamicAddonSidebar from './addons/dynamic/sidebar.json';
import ElementAddonSidebar from './addons/elements/sidebar.json';
import FormsAddonSidebar from './addons/forms/sidebar.json';
import IconsAddonSidebar from './addons/icons/sidebar.json';

export default [
    {
        text: 'Getting Started',
        base: '/essentials-for-yootheme-pro',
        items: [
            {
                text: 'Introduction',
                link: '/',
            },
            {
                text: 'Updating',
                link: '/updating',
            },
            {
                text: 'Settings',
                link: '/settings',
            },
        ],
    },
    {
        text: 'Addons',
        base: '/essentials-for-yootheme-pro/addons',
        items: [
            {
                text: 'Form Builder',
                link: '/forms',
            },
            {
                text: 'Dynamic Content',
                link: '/dynamic',
            },
            {
                text: 'Access Conditions',
                link: '/access',
            },
            {
                text: 'Layout Libraries',
                link: '/layouts',
            },
            {
                text: 'Icon Collections',
                link: '/icons',
            },
            {
                text: 'Builder Elements',
                link: '/elements',
            },
        ],
    },
    {
        text: 'Advanced',
        base: '/essentials-for-yootheme-pro',
        items: [
            {
                text: 'Conditions',
                link: '/conditions',
            },
            {
                text: 'Date & Time',
                link: '/datetime',
            },
            {
                text: 'Auth, Keys & Secrets',
                link: '/auths/',
            },
            {
                text: 'Storages',
                link: '/storage',
            },
            {
                text: 'Source Routing',
                link: '/addons/dynamic/routing',
            },
        ],
    },
    {
        text: 'Reference',
        items: [
            {
                ...FormsAddonSidebar[1],
                text: 'Forms Actions',
                collapsed: true,
            },
            {
                ...DynamicAddonSidebar[1],
                collapsed: true,
                text: 'Source Providers',
            },
            {
                ...AccessAddonSidebar[1],
                text: 'Access Rules',
                collapsed: true,
            },
            {
                ...IconsAddonSidebar[1],
                text: 'Icon Collections',
                collapsed: true,
            },
            {
                ...ElementAddonSidebar[1],
                collapsed: true,
                text: 'Builder Elements',
            },
            {
                ...AuthsSidebar[1],
                text: 'Auth Drivers',
                collapsed: true,
            },
        ],
    },
    {
        text: 'Troubleshooting',
        base: '/essentials-for-yootheme-pro',
        items: [
            {
                text: 'Common Issues',
                link: '/troubleshooting',
            },
        ],
    },
];
