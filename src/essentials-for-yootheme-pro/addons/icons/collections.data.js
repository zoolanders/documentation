import fs from 'node:fs';

export default {
    watch: ['./_collections/*/*.json'],
    load(watchedFiles) {
        return watchedFiles.map((file) => {
            return {
                ...JSON.parse(fs.readFileSync(file, 'utf-8')),
                icon: fs.readFileSync(file.replace('.json', '.svg'), 'utf-8'),
            };
        });
    },
};
