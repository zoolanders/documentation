import AccessSidebar from './_sidebars/access.json';
import AuthsSidebar from './_sidebars/auths.json';
import DynamicSidebar from './_sidebars/dynamic.json';
import ElementsSidebar from './_sidebars/elements.json';
import FormsSidebar from './_sidebars/forms.json';
import IconsSidebar from './_sidebars/icons.json';
import LayoutsSidebar from './_sidebars/layouts.json';

const basePath = '/essentials-for-yootheme-pro/v3.0-beta';

// iterate all sidebar items to update their base paths
const updateBasePaths = (sidebar) => {
    sidebar.forEach((item) => {
        if (item.base) {
            item.base = item.base.replace('${base}', basePath);
        }
        if (item.items) {
            updateBasePaths(item.items);
        }
    });
};

updateBasePaths(AccessSidebar);
updateBasePaths(AuthsSidebar);
updateBasePaths(FormsSidebar);
updateBasePaths(DynamicSidebar);
updateBasePaths(IconsSidebar);
updateBasePaths(ElementsSidebar);
updateBasePaths(LayoutsSidebar);

const MainSidebar = [
    {
        text: 'Getting Started',
        base: basePath,
        items: [
            {
                text: 'Introduction',
                link: '/',
            },
            {
                text: 'Installation',
                link: '/installation',
            },
            {
                text: 'Updating',
                link: '/updating',
            },
        ],
    },
    {
        text: 'Addons',
        base: `${basePath}/addons`,
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
        base: basePath,
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
        base: basePath,
        items: [
            {
                text: 'Settings',
                link: '/settings',
            },
            {
                text: 'Glossary',
                link: '/glossary',
            },
        ],
    },
    {
        text: 'Troubleshooting',
        base: `${basePath}`,
        items: [
            {
                text: 'Common Issues',
                link: '/troubleshooting',
            },
        ],
    },
];

export default {
    [basePath]: MainSidebar,
    [`${basePath}/auths/`]: AuthsSidebar,
    [`${basePath}/addons/icons`]: IconsSidebar,
    [`${basePath}/addons/forms`]: FormsSidebar,
    [`${basePath}/addons/access`]: AccessSidebar,
    [`${basePath}/addons/dynamic`]: DynamicSidebar,
    [`${basePath}/addons/layouts`]: LayoutsSidebar,
    [`${basePath}/addons/elements`]: ElementsSidebar,
};
