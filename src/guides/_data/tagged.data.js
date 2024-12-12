import { createContentLoader } from 'vitepress';

export default createContentLoader('/guides/*.md', {
    transform(rawData) {
        return rawData.filter((page) => page.frontmatter?.tags?.length);
    },
});
