import { createContentLoader } from 'vitepress';

export default createContentLoader('/essentials-for-yootheme-pro/auth-drivers/*.md', {
    excerpt: true,
    transform(rawData) {
        return rawData
            .filter((item) => !item.url?.endsWith('/'))
            .map((item) => {
                const name = item.frontmatter?.title?.toLowerCase().replace(/ /g, '-');

                return {
                    ...item.frontmatter,
                    icon: `/essentials-for-yootheme-pro/auth-drivers/assets/${name}.svg`,
                    link: item.url,
                };
            });
    },
});
