module.exports = {
    extends: [
        '@antfu',
    ],
    rules: {
        'semi': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/indent': ['error', 4],
        'vue/html-self-closing': ['warn', {
            html: {
                void: 'always',
            },
        }],
        'vue/html-indent': ['error', 4],
        'vue/v-on-style': 'error',
    },
};
