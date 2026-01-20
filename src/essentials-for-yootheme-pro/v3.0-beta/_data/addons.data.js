import { createContentLoader } from 'vitepress';

export default createContentLoader('/essentials-for-yootheme-pro/addons/*/index.md', {
    excerpt: true,
    transform(rawData) {
        return rawData.map((item) => {
            return {
                ...item.frontmatter,
                link: item.url,
            };
        });
    },
});
