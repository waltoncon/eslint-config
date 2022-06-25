module.exports = {
    extends: ['@antfu'],
    rules: {
        'brace-style': 'off',
        '@typescript-eslint/brace-style': [
            'error', '1tbs',
        ],

        'curly': [
            'error',
            'multi-line',
        ],

        'indent': 'off',
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
            MemberExpression: 1,
            ignoredNodes: [
                'FunctionExpression > .params[decorators.length > 0]',
                'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
            ],
        }],

        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
            },
        ],

        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 1,
            },
        ],

        'operator-linebreak': [
            'error',
            'before',
            {
                overrides: {
                    '=': 'after',
                },
            },
        ],

        'semi': ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],

        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never', asyncArrow: 'always' },
        ],

        'vue/html-indent': ['warn', 4],

        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'always',
                },
            },
        ],
    },
};
