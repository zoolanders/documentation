import fs from 'node:fs';

export default {
    watch: ['./_collections/*/*.json'],
    load(watchedFiles) {
        return watchedFiles.map((file) => ({
            ...JSON.parse(fs.readFileSync(file, 'utf-8')),
            icon: fs.readFileSync(file.replace('collection.json', 'icon.svg'), 'utf-8'),
        }));
    },
};
