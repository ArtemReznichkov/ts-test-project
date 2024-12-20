import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            camelcase: 0,
            'react/jsx-no-bind': 0,
            'default-param-last': 0,
            'react/require-default-props': 0,
            'react/jsx-wrap-multilines': 0,
            'react/jsx-closing-bracket-location': 0,
            'react/jsx-closing-tag-location': 0,
            'no-return-await': 0,
            '@typescript-eslint/ban-ts-comment': 0,
            'react-hooks/exhaustive-deps': 0,
        },
    }
);
