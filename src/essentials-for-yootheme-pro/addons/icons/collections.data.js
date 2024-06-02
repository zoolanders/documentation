import fs from 'node:fs';

export default {
    watch: ['./_collections/*/*.json'],
    load(watchedFiles) {
        return watchedFiles.map((file) => JSON.parse(fs.readFileSync(file, 'utf-8')));
    },
};
