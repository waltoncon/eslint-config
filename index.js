module.exports = {
    extends: ['@antfu', 'plugin:prettier/recommended'],
    rules: {
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
