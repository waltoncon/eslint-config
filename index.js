module.exports = {
    extends: ['@antfu'],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/semi': ['error', 'always'],
        'max-len': ['error', {
            code: 80,
            ignoreUrls: true,
        }],
        'semi': ['error', 'always'],
        'vue/html-indent': ['warn', 4],
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'always',
                },
            },
        ],
        'vue/v-on-style': 'error',
    },
};
