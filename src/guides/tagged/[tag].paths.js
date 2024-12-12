import tags from '../_data/tags.json';

export default {
    paths() {
        return tags.map((tag) => ({ params: { tag: tag.name } }));
    },
};
