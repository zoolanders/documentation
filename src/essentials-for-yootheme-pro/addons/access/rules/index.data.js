import { createContentLoader } from 'vitepress';

export default createContentLoader('/essentials-for-yootheme-pro/addons/access/rules/*.md', {
    excerpt: true,
    transform(rawData) {
        return rawData
            .filter((item) => !item.frontmatter?.index)
            .map((item) => {
                const name = item.frontmatter?.title?.toLowerCase().replace(/ /g, '-');

                return {
                    ...item.frontmatter,
                    icon: `/essentials-for-yootheme-pro/addons/access/assets/rules/icon/${name}.svg`,
                    link: item.url,
                };
            });
    },
});
