import { createContentLoader } from 'vitepress';

export default createContentLoader('/essentials-for-yootheme-pro/v2.4/addons/forms/fields/*.md', {
    excerpt: true,
    transform(rawData) {
        return rawData
            .filter((item) => !item.url.endsWith('/'))
            .map((item) => {
                const name = item.frontmatter?.title?.toLowerCase();

                return {
                    ...item.frontmatter,
                    icon: `/essentials-for-yootheme-pro/addons/forms/fields/assets/icon/${name}.svg`,
                    link: item.url,
                };
            });
    },
});
