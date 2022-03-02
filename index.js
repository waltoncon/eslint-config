module.exports = {
    extends: ['@antfu', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': ['error', require('./prettier.config')],
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
