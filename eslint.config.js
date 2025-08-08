import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
    eslintJs.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
    eslintConfigPrettier,
    {
        ignores: ['.vitepress/cache', '.vitepress/dist', 'dist'],
    },
    {
        rules: {
            'no-unused-vars': ['error', { caughtErrors: 'none' }],
            'vue/multi-word-component-names': 'off',
            'vue/component-definition-name-casing': 'off',
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
    },
    {
        files: ['*.mjs', 'scripts/**', '.vitepress/config.js'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
            'vue/require-default-prop': 'off',
        },
    },
];
