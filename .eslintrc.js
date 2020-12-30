module.exports = {
    root: true,
    extends: ['plugin:prettier/recommended'],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error'],
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    env: {
        es6: true,
    },
};
